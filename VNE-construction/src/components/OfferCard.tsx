"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description: string;
  badge?: string;
};

export function OfferCard({ title, description, badge }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reduce ? undefined : { scale: 1.01, transition: { duration: 0.2 } }
      }
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-zinc-50 p-6 shadow-[var(--shadow-card)]"
      )}
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/15 blur-2xl" />
      <div className="flex items-center gap-2 text-accent">
        <Sparkles className="h-5 w-5" />
        {badge ? (
          <span className="text-xs font-bold uppercase tracking-widest">{badge}</span>
        ) : (
          <span className="text-xs font-bold uppercase tracking-widest">Offer</span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
}
