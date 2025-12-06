// api/log-ip.js  (ESM style - export default)
export default async function handler(req, res) {
  try {
    const body = req.method === "POST" ? req.body : {};

    // 1) Get client IP (best-effort)
    let ip =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress?.replace("::ffff:", "") ||
      null;

    // 2) Coordinates from client (GPS) if provided
    let lat = body.lat ?? null;
    let lon = body.lon ?? null;
    let source = body.source || null;

    // 3) If no GPS → fallback to IP (when client requested ip-fallback)
    if ((!lat || !lon) && ip && source === "ip-fallback") {
      try {
        const r = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`);
        const d = await r.json();
        lat = lat ?? d.latitude ?? d.lat ?? null;
        lon = lon ?? d.longitude ?? d.lon ?? null;
        source = "ip";
      } catch (e) {
        console.warn("IP lookup failed", e);
      }
    }

    // If still no coords -> respond gracefully
    if (!lat || !lon) {
      return res.status(200).json({ ok: false, msg: "no-coords", ip });
    }

    // 4) Reverse geocode (OpenStreetMap Nominatim)
    let address = null;
    try {
      const rev = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(
          lat
        )}&lon=${encodeURIComponent(lon)}&format=jsonv2`
      );
      const js = await rev.json();
      address = js.display_name || null;
    } catch (e) {
      console.warn("Reverse geocode failed", e);
    }

    // 5) Final response
    const out = {
      ok: true,
      ip,
      source,
      lat: Number(lat),
      lon: Number(lon),
      address,
      time: new Date().toISOString(),
    };

    console.log("LOCATION_LOG:", out);
    return res.status(200).json(out);
  } catch (err) {
    console.error("log-ip.js ERROR:", err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
}
