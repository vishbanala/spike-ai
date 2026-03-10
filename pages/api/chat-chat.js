const ROLES = ["outside", "libero", "setter", "middle", "opposite"];
const ROLE_LABELS = {
  outside: "Outside Hitter",
  libero: "Libero",
  setter: "Setter",
  middle: "Middle Blocker",
  opposite: "Opposite Hitter",
};

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const FALLBACK_REPLY =
  "SpikeAI is out of reps right now, try again later.";

/** CORS headers for Figma Make */
function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ reply: FALLBACK_REPLY });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ reply: FALLBACK_REPLY });
  }

  const { role, messages } = body;

  if (!role || !ROLES.includes(role)) {
    return res.status(400).json({ reply: FALLBACK_REPLY });
  }
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ reply: FALLBACK_REPLY });
  }

  const roleLabel = ROLE_LABELS[role] ?? role;
  const systemPrompt = `You are an elite ${roleLabel} volleyball coach for high school and club players. Give clear, specific, game-ready advice in 3–6 sentences.`;

  const chatMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((msg) => ({
      role: msg.from === "user" ? "user" : "assistant",
      content: typeof msg.text === "string" ? msg.text : String(msg.text ?? ""),
    })),
  ];

  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://spikeai-theta.vercel.app",
        "X-Title": "SpikeAI",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openrouter/auto",
        messages: chatMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter error:", response.status, data);
      return res.status(500).json({ reply: FALLBACK_REPLY });
    }

    const reply =
      data.choices?.[0]?.message?.content?.trim() ?? FALLBACK_REPLY;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("chat-chat error:", error);
    return res.status(500).json({ reply: FALLBACK_REPLY });
  }
}
