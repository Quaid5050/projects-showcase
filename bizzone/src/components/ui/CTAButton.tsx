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
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} text-ink shadow-glow-purple hover:-translate-y-0.5 ${className}`}
        style={{
          background:
            "linear-gradient(100deg, var(--brand-green), var(--brand-purple-bright))",
        }}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"
          style={{
            background:
              "linear-gradient(100deg, var(--brand-green), var(--brand-purple-bright))",
          }}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} glass text-white hover:border-brand-green/50 hover:-translate-y-0.5 hover:shadow-glow-green ${className}`}
    >
      {children}
    </Link>
  );
}
