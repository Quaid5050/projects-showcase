import { Quote } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  quote: string;
  name: string;
  role: string;
  className?: string;
};

export function TestimonialCard({ quote, name, role, className }: Props) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <Quote className="h-8 w-8 text-accent/80" aria-hidden />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm">
        <p className="font-semibold text-charcoal">{name}</p>
        <p className="text-muted">{role}</p>
      </figcaption>
    </figure>
  );
}
