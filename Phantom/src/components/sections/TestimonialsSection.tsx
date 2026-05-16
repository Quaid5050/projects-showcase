"use client";

import { TESTIMONIALS_PLACEHOLDER } from "@/lib/content";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function TestimonialsSection() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS_PLACEHOLDER.length),
      5200,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const active = TESTIMONIALS_PLACEHOLDER[index];

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Voices from the driveway & the bay
        </h2>
        <p className="mt-3 text-sm text-amber-200/80">
          Placeholder reviews — replace with verified client stories when
          available.
        </p>

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="glass-panel mx-auto max-w-2xl rounded-3xl p-10 text-left"
            >
              <blockquote className="text-lg leading-relaxed text-white/80">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/55">
                <span className="font-semibold text-white">{active.name}</span>
                <span className="text-white/40"> · {active.vehicle}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS_PLACEHOLDER.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
