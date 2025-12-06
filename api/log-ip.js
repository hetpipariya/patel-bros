module.exports = async (req, res) => {
  try {
    const body = req.method === "POST" ? req.body : {};

    // 1) GET CLIENT IP
    let ip =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress?.replace("::ffff:", "") ||
      null;

    // 2) GPS COORDS FROM CLIENT
    let lat = body.lat ?? null;
    let lon = body.lon ?? null;
    let source = body.source || null;

    // 3) IF NO GPS → FALLBACK TO IP LOCATION
    if ((!lat || !lon) && ip && source === "ip-fallback") {
      try {
        const r = await fetch(`https://ipapi.co/${ip}/json/`);
        const d = await r.json();

        lat = d.latitude ?? null;
        lon = d.longitude ?? null;
        source = "ip";
      } catch (e) {
        console.log("IP lookup failed", e);
      }
    }

    // NO COORDS → RETURN
    if (!lat || !lon) {
      return res.status(200).json({ ok: false, msg: "no-coords", ip });
    }

    // 4) REVERSE GEOCODE → FULL ADDRESS
    let address = null;
    try {
      const rev = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`
      );
      const js = await rev.json();
      address = js.display_name || null;
    } catch (e) {
      console.log("Reverse geocode failed", e);
    }

    // 5) FINAL CLEAN RESPONSE
    const out = {
      ok: true,
      ip,
      lat: Number(lat),
      lon: Number(lon),
      address,
      source,
      time: new Date().toISOString(),
    };

    console.log("LOCATION_LOG:", out);

    res.status(200).json(out);
  } catch (err) {
    console.error("log-ip.js ERROR:", err);
    res.status(500).json({ ok: false, error: String(err) });
  }
};
