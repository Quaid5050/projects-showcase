"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* glow */}
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-purple/40 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-green/25 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(164,53,255,0.25), transparent)" }}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl glass ring-glow"
            >
              <CalendarCheck className="h-7 w-7 text-brand-green" />
            </motion.div>

            <h2 className="relative font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Ready To <span className="text-gradient">Grow Your Business?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/65 sm:text-lg">
              Let's build something amazing together.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="#portfolio" >
                See Our Work
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
