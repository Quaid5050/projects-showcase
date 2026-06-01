"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Particles from "@/components/ui/Particles";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        style={{ objectPosition: "center 72%" }}
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* overlays — lighter so the video reads clearly, with top/bottom scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-transparent to-ink/80" />
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(55% 45% at 50% 46%, rgba(5,3,8,0.6), transparent 72%)" }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-purple/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-green/15 blur-[140px]" />
      <Particles className="pointer-events-none absolute inset-0 h-full w-full opacity-30" />

      {/* content — centered */}
      <div className="section relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/75"
          >
            <Sparkles size={14} className="text-brand-green" />
            Premium Digital Solutions
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Digital Growth,
            <br />
            <span className="text-gradient">Engineered.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Premium websites, apps, automation & marketing that turn ambitious ideas into measurable results.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="#contact">
              Start Your Project 
            </CTAButton>
            <CTAButton href="#portfolio" variant="secondary">
              View Our Work
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-brand-green" />
        </div>
      </motion.div>
    </section>
  );
}