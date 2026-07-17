"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-24 sm:py-28">
      <div className="section">
        <Reveal>
          <SectionLabel>What Our Clients Say</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Real Stories. <span className="text-gradient">Real Results</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 text-brand-purple/25" size={64} />
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={18} className="fill-brand-mint text-brand-mint" />)}
                </div>
                <p className="max-w-3xl font-display text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">“{t.quote}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-ink" style={{ background: "linear-gradient(135deg,#C8F31D,#B47BFF)" }}>{t.initials}</span>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, d) => (
                  <button key={d} aria-label={`Testimonial ${d + 1}`} onClick={() => setI(d)} className={`h-2 rounded-full transition-all ${d === i ? "w-7 bg-brand-mint" : "w-2 bg-white/20"}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button aria-label="Previous" onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="grid h-10 w-10 place-items-center rounded-full glass text-white hover:text-brand-mint"><ChevronLeft size={18} /></button>
                <button aria-label="Next" onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)} className="grid h-10 w-10 place-items-center rounded-full glass text-white hover:text-brand-mint"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}