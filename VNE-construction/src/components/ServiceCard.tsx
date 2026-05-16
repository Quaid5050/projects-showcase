"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICE_ICONS, type ServiceIconKey } from "@/lib/service-icons";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description: string;
  iconKey: ServiceIconKey;
  items: string[];
  id?: string;
};

export function ServiceCard({
  title,
  description,
  iconKey,
  items,
  id,
}: Props) {
  const Icon = SERVICE_ICONS[iconKey];
  const reduce = useReducedMotion();

  return (
    <motion.article
      id={id}
      layout={!reduce}
      whileHover={
        reduce
          ? undefined
          : { y: -4, transition: { type: "spring", stiffness: 380, damping: 26 } }
      }
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]"
      )}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal text-white shadow-inner">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-charcoal">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-charcoal">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
