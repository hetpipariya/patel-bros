export default function handler(req, res) {
  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "")
    .split(",")[0]
    .trim();

  const ua = req.headers["user-agent"] || "";
  const referer = req.headers["referer"] || "";

  console.log("VISITOR_IP:", ip, "| UA:", ua.slice(0, 200), "| REF:", referer);

  return res.status(200).json({ ok: true });
}
