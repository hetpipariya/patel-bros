// api/log-ip.js

export default async function handler(req, res) {
  try {
    // Get visitor IP (Vercel-compatible)
    const ip =
      (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "")
        .split(",")[0]
        .trim();

    // Fetch geo-location using free ipapi.co API
    let geo = null;
    try {
      const r = await fetch(`https://ipapi.co/${ip}/json/`);
      if (r.ok) {
        geo = await r.json();
      }
    } catch (e) {
      console.error("Geo lookup failed:", e);
    }

    // Log everything in Vercel Runtime Logs
    console.log(
      "IP_LOG:",
      JSON.stringify({
        ip,
        city: geo?.city,
        region: geo?.region,
        country: geo?.country_name,
        lat: geo?.latitude,
        lon: geo?.longitude,
      })
    );

    return res.status(200).json({
      ok: true,
      ip,
      geo,
    });
  } catch (err) {
    console.error("ERROR:", err);
    return res.status(500).json({ ok: false });
  }
}
