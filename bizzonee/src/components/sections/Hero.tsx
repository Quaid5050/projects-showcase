"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";
import HeroOrb from "@/components/sections/HeroOrb";

const ease = [0.22, 1, 0.36, 1] as const;
const WORDS: { t: string; g?: boolean }[] = [
  { t: "We" }, { t: "Build" }, { t: "Growth", g: true }, { t: "Engines,", g: true },
  { t: "Not" }, { t: "Just" }, { t: "Marketing" }, { t: "Campaigns." },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* floating accent orbs */}
      <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-10 top-32 h-64 w-64 rounded-full bg-brand-purple/20 blur-[120px]" />
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-brand-mint/10 blur-[130px]" />

      <div className="section grid items-center gap-10 lg:grid-cols-2">
        {/* Left copy */}
        <div className="relative z-10 order-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-mint">
              <Sparkles size={13} /> AI Automation &amp; Digital Growth Agency
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          >
            {WORDS.map((w, i) => (
              <motion.span key={i} className="inline-block"
                variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                transition={{ duration: 0.6, ease }}>
                <span className={w.g ? "text-gradient" : ""}>{w.t}</span>{"\u00A0"}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
            From strategy to automation, we help businesses attract, engage, and convert through data-driven digital solutions.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.82, ease }}
            className="mt-9 flex flex-wrap items-center gap-4">
            <NeonButton href="#contact" variant="primary">Book Strategy Call <ArrowRight size={16} /></NeonButton>
            <NeonButton href="#work" variant="ghost"><Play size={15} /> Explore Our Work</NeonButton>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.95, ease }}
            className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["#8C00FF", "#C8F31D", "#B47BFF", "#DBFF5A"].map((c, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-ink" style={{ background: `linear-gradient(135deg, ${c}, #0b0e18)` }} />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-white">100+ Businesses Scaled</p>
              <p className="text-xs text-white/90">With BizzOne Digital</p>
            </div>
          </motion.div>
        </div>

        {/* Right: animated orb composition */}
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease }}
          className="relative order-2 h-[300px] sm:h-[420px] lg:h-[520px] xl:h-[580px]">
          <HeroOrb />
        </motion.div>
      </div>
    </section>
  );
}