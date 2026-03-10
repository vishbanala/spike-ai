import Link from "next/link";

const roles = [
  { id: "outside", label: "Outside Hitter" },
  { id: "libero", label: "Libero" },
  { id: "setter", label: "Setter" },
  { id: "middle", label: "Middle Blocker" },
  { id: "opposite", label: "Opposite Hitter" },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-2">SpikeAI</h1>
      <p className="text-gray-400 text-sm mb-8">Choose a position to start chatting</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {roles.map(({ id, label }) => (
          <Link
            key={id}
            href={`/chat/${id}`}
            className="rounded-xl bg-slate-800 hover:bg-orange-500/20 border border-orange-500/30 px-5 py-3 text-sm font-medium transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
