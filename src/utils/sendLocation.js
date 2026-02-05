
export async function sendUserLocation() {
  
  const post = (body) =>
    fetch("/api/log-ip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

  if (!("geolocation" in navigator)) {
    
    return post({ source: "ip-fallback" });
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      post({
        source: "gps",
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      }).catch((e) => console.warn("Send location failed:", e));
    },
    (err) => {
      
      post({ source: "ip-fallback" }).catch((e) => console.warn("Send location failed:", e));
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}
