"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { unsplashUrl } from "@/lib/unsplash";

const POSITION_IMAGES: Record<string, string> = {
  outside: "1519317154672-063090268b8d",
  libero: "1592659762303-90481f34d087",
  middle: "1574629810360-7efbbe195018",
  setter: "1547347298-4074fc3086f0",
  opposite: "1519317154672-063090268b8d",
};

interface PositionCardProps {
  id: string;
  title: string;
  description: string;
}

export function PositionCard({ id, title, description }: PositionCardProps) {
  const photoId = POSITION_IMAGES[id] ?? POSITION_IMAGES.outside;
  const imageUrl = unsplashUrl(photoId, 400);

  return (
    <Link
      href={`/chat/${id}`}
      className="group flex bg-slate-800/60 backdrop-blur-md border border-orange-500/20 hover:border-orange-500/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:translate-x-2"
    >
      <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={160}
          height={160}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-orange-500/40 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-500" />
      </div>
      <div className="flex-1 p-6 flex items-center justify-between min-w-0">
        <div>
          <h3 className="text-orange-400 text-2xl font-medium group-hover:text-orange-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-base mt-1">{description}</p>
        </div>
        <ChevronRight className="w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all flex-shrink-0" />
      </div>
    </Link>
  );
}
