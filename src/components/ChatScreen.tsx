"use client";
import { useState } from "react";

type Role = "outside" | "libero" | "setter" | "middle" | "opposite";

interface Message {
  from: "user" | "ai";
  text: string;
}

interface ChatScreenProps {
  role: Role;
}

export function ChatScreen({ role }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");
    setMessages(prev => [...prev, { from: "user", text }]);
    setLoading(true);
    try {
      const history = [...messages, { from: "user" as const, text }];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(m => ({
            sender: m.from === "user" ? "user" : "assistant",
            text: m.text,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setMessages(prev => [...prev, { from: "ai", text: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { from: "ai", text: err instanceof Error ? err.message : "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const label: Record<Role, string> = {
    outside: "Outside Hitter",
    libero: "Libero",
    setter: "Setter",
    middle: "Middle Blocker",
    opposite: "Opposite Hitter",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <header className="px-6 py-4 border-b border-orange-500/30 flex items-center gap-3">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="text-sm text-gray-400 hover:text-white"
        >
          ← Back
        </button>
        <div>
          <h1 className="text-xl font-semibold">{label[role]} Chat</h1>
          <p className="text-xs text-gray-400">
            Ask anything about {label[role]} play
          </p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-sm text-gray-500 text-center mt-8">
            Ask your first question about {label[role]} technique or decision-making.
          </p>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${
                m.from === "user"
                  ? "bg-orange-500 text-white"
                  : "bg-slate-800 text-gray-100"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
        className="border-t border-orange-500/20 px-4 py-3 flex gap-2 bg-slate-900/80"
      >
        <input
          className="flex-1 rounded-full bg-slate-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 outline-none"
          placeholder="Ask about approach, blocking, serve receive..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}
