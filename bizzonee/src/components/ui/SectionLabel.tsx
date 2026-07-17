import { type ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-mint">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-mint shadow-glow-mint" />
      {children}
    </span>
  );
}
