"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="section">
        <Reveal>
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            A Proven Roadmap To Your <span className="text-gradient">Growth</span>.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting glowing line (desktop) */}
          <div className="absolute left-0 right-0 top-10 hidden h-px lg:block">
            <div className="h-full w-full divider-glow" />
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-0 h-px bg-gradient-to-r from-brand-mint via-brand-purple-light to-brand-purple"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 grid h-20 w-20 place-items-center rounded-2xl glass-strong shadow-glow-purple"
                  >
                    <span className="absolute inset-0 rounded-2xl bg-brand-purple/20 blur-lg" />
                    <p.icon className="relative text-brand-mint" size={28} />
                  </motion.div>
                  <span className="mt-5 font-display text-2xl font-black text-white">{p.n}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-white/90">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}