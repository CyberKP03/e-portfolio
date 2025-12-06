export default async function handler(req, res) {
  try {
    const response = await fetch("https://your-node-api.com/data", {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        ...req.headers,
      },
      body: req.body ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
