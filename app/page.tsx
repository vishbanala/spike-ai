"use client";

import { ClipboardList, MapPin } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { VolleyballIcon } from "@/components/VolleyballIcon";
import { ScreenBackground } from "@/components/ScreenBackground";
import { UNSPLASH } from "@/lib/unsplash";

export default function HomePage() {
  return (
    <ScreenBackground
      imageId={UNSPLASH.home}
      stripeTop
      stripeBottom
    >
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50 mb-6">
            <VolleyballIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-7xl text-white font-bold tracking-tight">
            SpikeAI
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="h-px w-12 bg-orange-500 flex-shrink-0" />
            <span className="text-orange-400 text-lg uppercase tracking-widest">
              AI-Powered Volleyball Training
            </span>
            <span className="h-px w-12 bg-orange-500 flex-shrink-0" />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          <FeatureCard
            href="/strategy"
            icon={ClipboardList}
            title="Game Strategy"
            description="Analyze plays and tactics"
          />
          <FeatureCard
            href="/positions"
            icon={MapPin}
            title="Positional Help"
            description="Optimize court positioning"
          />
        </div>
      </div>
    </ScreenBackground>
  );
}
