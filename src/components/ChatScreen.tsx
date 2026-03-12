"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  type Role,
  PRESET_QA,
  ROLE_LABELS,
} from "@/lib/presetQa";
import { CreditsBanner } from "@/components/CreditsBanner";

interface Message {
  from: "user" | "ai";
  text: string;
}

interface ChatScreenProps {
  role: Role;
}

const AI_FALLBACK_MESSAGE =
  "Network error. The preset answer above is still valid coaching!";

export function ChatScreen({ role }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const label = ROLE_LABELS[role];
  const presets = PRESET_QA[role];

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handlePresetClick(index: number) {
    const preset = presets[index];
    if (!preset || loading) return;

    const userMsg: Message = { from: "user", text: preset.question };
    const presetMsg: Message = { from: "ai", text: preset.presetAnswer };

    setMessages((prev) => [...prev, userMsg, presetMsg]);
    setLoading(true);

    try {
      const history = [...messages, userMsg, presetMsg];
      const res = await fetch("/api/chat-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          messages: history.map((m) => ({ from: m.from, text: m.text })),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.reply ?? data.error ?? "Request failed");
      }

      const followUp: Message = {
        from: "ai",
        text: (data.reply ?? "").trim() || AI_FALLBACK_MESSAGE,
      };
      setMessages((prev) => [...prev, followUp]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: AI_FALLBACK_MESSAGE },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="flex-shrink-0 bg-slate-950 border-b border-orange-500/30 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/positions"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-white">
              {label} Chat
            </h1>
            <p className="text-xs text-gray-400">
              Ask anything about {label} play
            </p>
          </div>
        </div>
      </header>

      <CreditsBanner />

      {/* Chat messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-40"
      >
        {messages.length === 0 && (
          <p className="text-center text-gray-500 text-sm pt-8">
            Choose a question below to get expert coaching for {label}.
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

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] rounded-2xl px-4 py-2 text-sm bg-slate-800 text-gray-400">
              Getting AI follow-up...
            </div>
          </div>
        )}
      </div>

      {/* Preset questions footer (fixed) */}
      <footer className="fixed bottom-0 left-0 right-0 px-4 py-3 border-t border-orange-500/20 bg-slate-900/80">
        <p className="text-xs text-gray-400 mb-2">Choose a question:</p>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handlePresetClick(index)}
              disabled={loading}
              className="text-xs rounded-full px-3 py-1.5 border border-orange-500/40 text-orange-100 hover:bg-orange-500/20 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {preset.question}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
