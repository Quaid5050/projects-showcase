import { CTALink } from "@/components/CTAButton";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function PageCtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-charcoal via-charcoal to-zinc-900 px-6 py-10 text-white shadow-[var(--shadow-soft)] sm:px-10 sm:py-12",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <CTALink
            href={primaryHref}
            size="lg"
            className="justify-center !rounded-full bg-accent px-8 text-white hover:bg-accent-hover"
          >
            {primaryLabel}
          </CTALink>
          {secondaryHref && secondaryLabel ? (
            <CTALink
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="justify-center !rounded-full border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
            >
              {secondaryLabel}
            </CTALink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
