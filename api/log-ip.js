export default async function handler(req, res) {
  // Get visitor IP from headers
  const ip =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "0.0.0.0";

  let geo = null;

  try {
    const r = await fetch(`https://ipapi.co/${ip}/json/`);
    if (r.ok) {
      geo = await r.json();
    }
  } catch (e) {
    console.error("Geo lookup failed:", e);
  }

  // Log in Vercel logs
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

  res.status(200).json({
    ok: true,
    ip,
    geo,
  });
}
