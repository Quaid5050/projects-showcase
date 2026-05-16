"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useBookingModal } from "@/contexts/BookingModalContext";
import { SITE } from "@/lib/content";
import { resolvePlaceholderSrc } from "@/lib/placeholder-images";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const BG = "/placeholders/hero-cinematic-bg.jpg";

export function HeroSection() {
  const { openBooking } = useBookingModal();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src={resolvePlaceholderSrc(BG)}
          alt="Placeholder hero: cinematic luxury vehicle at night"
          fill
          priority
          className="scale-105 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="noise-overlay absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8"
      >
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/55"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          PAC Phantom Auto Center
        </motion.p>
        <motion.h1
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          Phantom-level auto care, mechanical service & customization
        </motion.h1>
        <motion.p
          className="max-w-2xl text-base text-white/70 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
        >
          From certified mechanical work to luxury detailing, wraps, coatings,
          lighting, and mobile detailing — PAC Phantom Auto Center transforms
          every vehicle with precision.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
        >
          <MagneticButton
            onClick={openBooking}
            className="rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(255,255,255,0.12)] transition hover:bg-white/90"
          >
            Book an appointment
          </MagneticButton>
          <MagneticButton
            href="/services"
            className="rounded-full border border-white/25 bg-white/5 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md transition hover:border-white/45 hover:bg-white/10"
          >
            Explore services
          </MagneticButton>
          <a
            href={SITE.phoneHref}
            className="text-sm font-semibold text-white/75 underline-offset-4 hover:text-white hover:underline"
          >
            {SITE.phone}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
