// pages/api/get-location.js  (Next.js style) or any Node route file
export default async function handler(req, res) {
  // Utility: safe fetch with timeout
  const fetchWithTimeout = async (url, opts = {}, ms = 4000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), ms);
    try {
      const r = await fetch(url, { signal: controller.signal, ...opts });
      clearTimeout(id);
      return r;
    } catch (err) {
      clearTimeout(id);
      throw err;
    }
  };

  // 1) Extract client IP (best-effort)
  let ip =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")?.[0]?.trim() ||
    req.socket?.remoteAddress ||
    null;

  // If IPv6 like ::ffff:203.0.113.195, strip prefix
  if (ip && ip.startsWith("::ffff:")) ip = ip.replace("::ffff:", "");

  // If still missing or it's a localhost/private address, mark as local
  const isLocalOrPrivate =
    !ip ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.") || // note: 172.16.0.0/12 includes many; this is a simple check
    ip.startsWith("::ffff:127.") ||
    ip.startsWith("::1");

  // If local/dev, we still attempt to use the header value — but warn later
  // (Important: you cannot reliably get user's real public IP from localhost without a proxy)
  // Proceed to query geolocation APIs only if ip exists and not obviously private.
  let geo = null;
  let usedService = null;

  // Helper to normalize responses
  const normalize = (src, serviceName) => {
    // src is parsed json from service
    if (!src) return null;

    // ipwho.is returns { success: true, ip, city, region, region_code, country, country_code, latitude, longitude, isp }
    if (serviceName === "ipwho") {
      return {
        ip: src.ip || null,
        city: src.city || null,
        region: src.region || src.region_name || null,
        regionCode: src.region_code || null,
        country: src.country || null,
        countryCode: src.country_code || null,
        lat: src.latitude ?? src.lat ?? null,
        lon: src.longitude ?? src.lon ?? null,
        isp: src.connection?.isp || src.isp || null,
        raw: src,
      };
    }

    // ipapi.co returns { ip, city, region, region_code, country_name, country, latitude, longitude, org }
    if (serviceName === "ipapi") {
      return {
        ip: src.ip || null,
        city: src.city || null,
        region: src.region || null,
        regionCode: src.region_code || null,
        country: src.country_name || src.country || null,
        countryCode: src.country_code || null,
        lat: src.latitude ?? src.lat ?? src.latitude ?? null,
        lon: src.longitude ?? src.lon ?? null,
        isp: src.org || null,
        raw: src,
      };
    }

    // Default fallback attempt
    return {
      ip: src.ip || null,
      city: src.city || null,
      region: src.region || src.state || null,
      regionCode: src.region_code || null,
      country: src.country || src.country_name || null,
      countryCode: src.country_code || null,
      lat: src.latitude ?? src.lat ?? src.location?.lat ?? null,
      lon: src.longitude ?? src.lon ?? src.location?.lon ?? null,
      isp: src.org || src.isp || null,
      raw: src,
    };
  };

  try {
    if (!ip || isLocalOrPrivate) {
      // We still attempt to use whatever IP we have, but inform it's likely local/private.
      // Optionally, you can attempt to fetch client's public IP via external service - but that returns server's public IP.
      // So we won't auto-replace ip here.
    }

    // Try primary service: ipwho.is
    if (ip) {
      try {
        const r1 = await fetchWithTimeout(`https://ipwho.is/${encodeURIComponent(ip)}`, {}, 4000);
        if (r1.ok) {
          const data1 = await r1.json();
          if (data1 && (data1.success === true || data1.ip)) {
            geo = normalize(data1, "ipwho");
            usedService = "ipwho.is";
          }
        }
      } catch (e) {
        // ignore, fallback next
        console.warn("ipwho.is failed:", e?.message || e);
      }
    }

    // If primary didn't return useful region info, try ipapi.co as fallback
    if ((!geo || !geo.region) && ip) {
      try {
        // ipapi.co does not always require a token for basic info, but rate-limits apply.
        const r2 = await fetchWithTimeout(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {}, 4000);
        if (r2.ok) {
          const data2 = await r2.json();
          if (data2 && !data2.error) {
            const norm2 = normalize(data2, "ipapi");
            // prefer ipapi region if available (often has nicer region names)
            geo = {
              ...geo,
              ...norm2,
            };
            usedService = usedService || "ipapi.co";
          }
        }
      } catch (e) {
        console.warn("ipapi.co failed:", e?.message || e);
      }
    }
  } catch (err) {
    console.error("Geo lookup top-level error:", err);
  }

  // Final: ensure region fields exist and trim whitespace
  if (geo) {
    const trimVal = v => (typeof v === "string" ? v.trim() : v);
    geo.city = trimVal(geo.city) || null;
    geo.region = trimVal(geo.region) || null;
    geo.regionCode = trimVal(geo.regionCode) || null;
    geo.country = trimVal(geo.country) || null;
    geo.countryCode = trimVal(geo.countryCode) || null;
    geo.lat = geo.lat !== undefined ? Number(geo.lat) : null;
    geo.lon = geo.lon !== undefined ? Number(geo.lon) : null;
  }

  // Logging (for debugging)
  console.log(
    JSON.stringify({
      ip,
      isLocalOrPrivate,
      usedService,
      location: geo && {
        city: geo.city,
        region: geo.region,
        regionCode: geo.regionCode,
        country: geo.country,
        countryCode: geo.countryCode,
        lat: geo.lat,
        lon: geo.lon,
        isp: geo.isp,
      },
    })
  );

  // Response
  res.status(200).json({
    ok: true,
    ip: ip || null,
    isLocalOrPrivate: !!isLocalOrPrivate,
    usedService: usedService || null,
    location: geo || null,
    note:
      isLocalOrPrivate
        ? "Client IP looks local/private. When testing on localhost you will not get the user's public IP. For real client IPs behind proxies ensure your host (e.g. Vercel) forwards X-Forwarded-For."
        : undefined,
  });
}
