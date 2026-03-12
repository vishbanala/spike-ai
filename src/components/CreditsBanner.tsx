import { Info } from "lucide-react";

const CREDITS_BANNER_TEXT =
  "SpikeAI is wired to a real AI volleyball coach behind the scenes. In this public demo, live AI responses are limited to free-tier credits. When credits are out, you'll still see our best preloaded coaching answers instead of a live AI reply.";

/**
 * Non-dismissible informational banner explaining AI credit limitations.
 * Placed below the header, above the chat messages area.
 */
export function CreditsBanner() {
  return (
    <div
      className="flex-shrink-0 mx-4 mt-3 px-4 py-3 bg-slate-900/80 backdrop-blur-sm border border-orange-500/30 border-l-4 border-l-orange-500 rounded-lg flex gap-3"
      role="status"
      aria-label="AI credits information"
    >
      <Info className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden />
      <p className="text-xs text-gray-300 leading-relaxed">
        {CREDITS_BANNER_TEXT}
      </p>
    </div>
  );
}
