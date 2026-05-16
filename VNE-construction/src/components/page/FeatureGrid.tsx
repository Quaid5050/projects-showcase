import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  items: FeatureItem[];
  className?: string;
  columns?: 2 | 3;
};

export function FeatureGrid({ items, className, columns = 3 }: Props) {
  return (
    <ul
      className={cn(
        "grid gap-5 sm:gap-6",
        columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
        columns === 2 && "md:grid-cols-2",
        className
      )}
    >
      {items.map(({ icon: Icon, title, description }) => (
        <li
          key={title}
          className="group rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal text-white transition-transform group-hover:scale-105">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="mt-4 text-lg font-bold text-charcoal">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </li>
      ))}
    </ul>
  );
}
