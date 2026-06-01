"use client";

import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-white/55">{subtitle}</p>}
    </Reveal>
  );
}
