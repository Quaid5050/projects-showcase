/** Static page title band for interior routes (paired with PageMain top padding). */
export function InteriorPageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-white/60">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
