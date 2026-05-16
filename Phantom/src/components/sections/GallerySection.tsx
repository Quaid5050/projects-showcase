"use client";

import {
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  type GalleryCategory,
} from "@/lib/content";
import { resolvePlaceholderSrc } from "@/lib/placeholder-images";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

type Props = {
  /** When false, hides the in-section title block (e.g. when the page supplies an H1). */
  showIntro?: boolean;
};

export function GallerySection({ showIntro = true }: Props) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<GalleryCategory>("All");

  const items = useMemo(() => {
    if (filter === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((g) => g.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-6 ${showIntro ? "lg:flex-row lg:items-end lg:justify-between" : ""}`}
        >
          {showIntro ? (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
                Gallery
              </p>
              <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                Before / after & select work
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/55">
                Project photos live in{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 text-[11px] text-white/80">
                  /public/placeholders
                </code>
                . Swap any JPG for your own work — filenames match the site data
                keys. Regenerate stock placeholders with{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 text-[11px] text-white/80">
                  node scripts/download-placeholders.mjs
                </code>
                .
              </p>
            </div>
          ) : null}
          <div
            className={`flex flex-wrap gap-2 ${showIntro ? "" : "justify-center sm:justify-start"}`}
            role="tablist"
            aria-label="Gallery filters"
          >
            {GALLERY_FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    active
                      ? "bg-white text-black"
                      : "border border-white/15 bg-white/5 text-white/65 hover:border-white/35"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <BeforeAfterSlider />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {items.map((g) => (
                <motion.figure
                  layout
                  key={g.id}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                >
                  <Image
                    src={resolvePlaceholderSrc(g.image)}
                    alt={g.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 360px"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {g.title}
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
