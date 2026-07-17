"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 will-change-transform";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} text-ink shadow-glow-green hover:-translate-y-0.5 ${className}`}
        style={{ background: "var(--brand-green)" }}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <span
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"
          style={{ background: "var(--brand-green)" }}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-brand-purple-bright/50 text-white transition-colors hover:-translate-y-0.5 hover:bg-brand-purple-bright/15 hover:shadow-glow-purple ${className}`}
      style={{ background: "rgba(164,53,255,0.10)" }}
    >
      {children}
    </Link>
  );
}