"use client";

import Image from "next/image";
import { unsplashUrl } from "@/lib/unsplash";

interface ScreenBackgroundProps {
  imageId: string;
  children: React.ReactNode;
  stripeTop?: boolean;
  stripeBottom?: boolean;
}

export function ScreenBackground({
  imageId,
  children,
  stripeTop = true,
  stripeBottom = false,
}: ScreenBackgroundProps) {
  const imageUrl = unsplashUrl(imageId, 1920);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
      {stripeTop && (
        <div className="h-2 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 flex-shrink-0 z-10" />
      )}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover opacity-[0.15]"
          priority={false}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none" />
      </div>
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      {stripeBottom && (
        <div className="h-2 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 flex-shrink-0 z-10" />
      )}
    </div>
  );
}
