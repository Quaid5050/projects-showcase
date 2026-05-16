import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  price: string;
  subtitle?: string;
  features: string[];
  highlight?: boolean;
  footer?: string;
};

export function PricingCard({
  title,
  price,
  subtitle,
  features,
  highlight,
  footer,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
        highlight
          ? "border-accent/40 ring-2 ring-accent/20"
          : "border-border"
      )}
    >
      {highlight ? (
        <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-charcoal">{price}</span>
      </p>
      {subtitle ? (
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      ) : null}
      <ul className="mt-6 flex-1 space-y-3 text-sm text-charcoal">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {f}
          </li>
        ))}
      </ul>
      {footer ? (
        <p className="mt-6 border-t border-border pt-4 text-xs text-muted">{footer}</p>
      ) : null}
    </div>
  );
}
