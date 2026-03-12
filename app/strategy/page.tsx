"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScreenBackground } from "@/components/ScreenBackground";
import { CreditsBanner } from "@/components/CreditsBanner";
import { UNSPLASH } from "@/lib/unsplash";

export default function StrategyPage() {
  const [returnPrimary, setReturnPrimary] = useState("");
  const [returnSecondary, setReturnSecondary] = useState("");
  const [passRatings, setPassRatings] = useState("");
  const [primaryBlocker, setPrimaryBlocker] = useState("");
  const [weakestRotation, setWeakestRotation] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  function handleAnalyze(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOutput(null);
    setTimeout(() => {
      setOutput(
        "Strategy analysis will integrate with your backend. For now, fill in the form and click Analyze. Return Primary and Weakest Serve Receive Rotation are required."
      );
      setLoading(false);
    }, 1200);
  }

  function handleReset() {
    setReturnPrimary("");
    setReturnSecondary("");
    setPassRatings("");
    setPrimaryBlocker("");
    setWeakestRotation("");
    setOutput(null);
  }

  return (
    <ScreenBackground imageId={UNSPLASH.home} stripeTop>
      <div className="px-8 py-12 flex flex-col flex-1 max-w-3xl mx-auto w-full">
        <header className="flex flex-col gap-1 mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-4xl text-white font-bold tracking-tight">
            Game Strategy
          </h1>
          <p className="text-sm text-gray-400">
            Input opponent stats for strategic recommendations
          </p>
        </header>

        <CreditsBanner />

        <h2 className="text-orange-400 font-medium text-lg mt-6 mb-4">
          Opponent Statistics
        </h2>
        <form
          onSubmit={handleAnalyze}
          className="bg-slate-800/70 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8 mb-8"
        >
          <div className="grid gap-6">
            <div>
              <label className="block text-orange-400 font-medium mb-2">
                Return Primary <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={returnPrimary}
                onChange={(e) => setReturnPrimary(e.target.value)}
                className="w-full bg-slate-900/50 border border-orange-500/20 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
                placeholder="e.g., Libero - 2.3 rating"
              />
            </div>
            <div>
              <label className="block text-orange-400 font-medium mb-2">
                Return Secondary
              </label>
              <input
                type="text"
                value={returnSecondary}
                onChange={(e) => setReturnSecondary(e.target.value)}
                className="w-full bg-slate-900/50 border border-orange-500/20 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
                placeholder="Optional"
              />
            </div>
            <div>
              <label className="block text-orange-400 font-medium mb-2">
                Pass Ratings
              </label>
              <input
                type="text"
                value={passRatings}
                onChange={(e) => setPassRatings(e.target.value)}
                className="w-full bg-slate-900/50 border border-orange-500/20 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
                placeholder="e.g. 2.5, 2.8, 3.0"
              />
            </div>
            <div>
              <label className="block text-orange-400 font-medium mb-2">
                Primary Blocker
              </label>
              <input
                type="text"
                value={primaryBlocker}
                onChange={(e) => setPrimaryBlocker(e.target.value)}
                className="w-full bg-slate-900/50 border border-orange-500/20 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
                placeholder="e.g. Middle"
              />
            </div>
            <div>
              <label className="block text-orange-400 font-medium mb-2">
                Weakest Serve Receive Rotation <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={weakestRotation}
                onChange={(e) => setWeakestRotation(e.target.value)}
                className="w-full bg-slate-900/50 border border-orange-500/20 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
                placeholder="e.g. Rotation 1"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-orange-600/30 disabled:opacity-70"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="bg-slate-900/60 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 min-h-[120px]">
          <h3 className="text-orange-400 font-medium mb-3">Strategy Output</h3>
          {loading && (
            <div className="flex items-center gap-2 text-gray-400">
              <span className="inline-block w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
              Loading analysis...
            </div>
          )}
          {!loading && output && (
            <p className="text-gray-200 text-sm leading-relaxed">{output}</p>
          )}
          {!loading && !output && (
            <p className="text-gray-500 text-sm">
              Fill in the form and click Analyze to see strategy recommendations.
            </p>
          )}
        </div>
      </div>
    </ScreenBackground>
  );
}
