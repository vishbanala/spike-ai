import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { PositionCard } from "@/components/PositionCard";
import { ScreenBackground } from "@/components/ScreenBackground";
import { UNSPLASH } from "@/lib/unsplash";

const POSITIONS = [
  {
    id: "outside",
    title: "Outside Hitter",
    description: "Primary attacker on the left side",
  },
  {
    id: "libero",
    title: "Libero",
    description: "Defensive specialist in the back row",
  },
  {
    id: "middle",
    title: "Middle Blocker",
    description: "Key blocker and quick attacker",
  },
  {
    id: "setter",
    title: "Setter",
    description: "Playmaker and ball distributor",
  },
  {
    id: "opposite",
    title: "Opposite Hitter",
    description: "Right side attacker and blocker",
  },
] as const;

export default function PositionsPage() {
  return (
    <ScreenBackground imageId={UNSPLASH.positions} stripeTop>
      <div className="px-8 py-12 flex flex-col flex-1">
        <header className="flex flex-col items-center mb-10">
          <Link
            href="/"
            className="self-start flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg transition-colors shadow-lg shadow-orange-600/30 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-6xl text-white font-bold tracking-tight text-center">
            SpikeAI
          </h1>
          <p className="text-orange-400 uppercase tracking-widest text-sm mt-3">
            Player Positions
          </p>
        </header>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full flex-1">
          {POSITIONS.map((pos) => (
            <PositionCard
              key={pos.id}
              id={pos.id}
              title={pos.title}
              description={pos.description}
            />
          ))}
        </div>

        <div className="fixed bottom-8 right-8 z-20">
          <button
            type="button"
            className="bg-orange-600 hover:bg-orange-500 text-white rounded-full p-4 transition-colors shadow-xl shadow-orange-600/30"
            aria-label="Help"
          >
            <HelpCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </ScreenBackground>
  );
}
