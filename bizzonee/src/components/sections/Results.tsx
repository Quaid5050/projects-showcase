"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Counter from "@/components/ui/Counter";

export default function Results() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="section">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.6fr]">
          <Reveal>
            <SectionLabel>Our Results</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Numbers That Speak For <span className="text-gradient">Our Workk</span>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl glass p-5 text-center hover:shadow-glow-mint">
                  <div className="font-display text-2xl font-black text-gradient sm:text-3xl">
                    <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </div>
                  <p className="mt-2 text-xs font-medium text-white/55">{s.label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
