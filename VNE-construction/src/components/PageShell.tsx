import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Use full width for dense grids (e.g. services). */
  wide?: boolean;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  className,
  wide,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8",
        className
      )}
    >
      <header
        className={cn(
          "relative border-b border-border/80 pb-10 sm:pb-12",
          !wide && "max-w-4xl"
        )}
      >
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <div className="mt-3 flex items-start gap-4">
          <span
            className="mt-2 hidden h-14 w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/40 sm:block"
            aria-hidden
          />
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </header>
      <div className={cn("mt-12 sm:mt-14", wide && "max-w-none")}>{children}</div>
    </div>
  );
}
