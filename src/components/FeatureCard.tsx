"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ href, icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group w-80 bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0 right-0" />
      <div className="relative">
        <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl p-6 shadow-lg shadow-orange-500/50 w-fit mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl text-white font-medium mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-orange-500/20 rounded-bl-3xl pointer-events-none" />
    </Link>
  );
}
