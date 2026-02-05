export default async function handler(req, res) {
  try {
    const body = req.method === "POST" ? req.body : {};

    let ip =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress?.replace("::ffff:", "") ||
      null;

    let lat = body.lat ?? null;
    let lon = body.lon ?? null;
    let source = body.source || null;

    if ((!lat || !lon) && ip && source === "ip-fallback") {
      try {
        const r = await fetch(`https://ipapi.co/${ip}/json/`);
        if (r.ok) {
          const d = await r.json();
          lat = lat ?? d.latitude ?? d.lat ?? null;
          lon = lon ?? d.longitude ?? d.lon ?? null;
          source = "ip";
        }
      } catch (e) {
        console.warn("IP lookup failed", e);
      }
    }

    if (!lat || !lon) {
      return res.status(200).json({ ok: false, msg: "no-coords", ip });
    }

    let address = null;
    try {
      const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&format=jsonv2&addressdetails=1`;

      const nomRes = await fetch(nominatimUrl, {
        headers: {
          "User-Agent": "TradingWithAI-App/1.0 (https://github.com/hetpipariya)",
          "Referer": "https://github.com/hetpipariya"
        },
      });

      const contentType = nomRes.headers.get("content-type") || "";

      if (nomRes.ok && contentType.includes("application/json")) {
        const js = await nomRes.json();
        address = js.display_name ?? null;
      } else {
        const txt = await nomRes.text().catch(() => "");
        console.warn("Nominatim non-JSON/failed response:", nomRes.status, txt.slice(0, 200));
        address = null;
      }
    } catch (e) {
      console.warn("Reverse geocode failed", e);
      address = null;
    }

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