"use client";

import Link from "next/link";
import { type ReactNode } from "react";

export default function NeonButton({
  href, children, variant = "primary", className = "",
}: { href: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:brightness-110";
  if (variant === "primary") {
    return (
      <Link href={href} className={`${base} bg-brand-mint text-ink shadow-glow-mint ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <Link href={href}
      className={`${base} border border-brand-mint/50 bg-brand-mint/10 text-brand-mint hover:bg-brand-mint/20 hover:shadow-glow-mint ${className}`}>
      {children}
    </Link>
  );
}