import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY is not configured" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid message format" });
  }

  const chatMessages = messages.map((msg) => ({
    role: msg.sender === "user" ? "user" : "assistant",
    content: msg.text,
  }));

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 200,
    });

    const reply = completion.choices[0]?.message?.content?.trim() ?? "";
    res.status(200).json({ reply });
  } catch (error) {
    const message = error?.message ?? "Unknown error";
    res.status(500).json({ error: "Failed to generate response", details: message });
  }
}
