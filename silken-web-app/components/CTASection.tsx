"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CTASection({
  headline = "Upgrade Your Car Interior Today",
  subtext,
  primaryButtonText = "Book Installation",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Shop Products",
  secondaryButtonHref = "/products",
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-24 lg:py-32 ${className}`}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-luxury-black via-gold-dark/40 to-luxury-black"
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(249,200,51,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(254,235,78,0.12),transparent)]" />
      {/* Floating glow orbs */}
      <motion.div
        className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-primary/20 blur-[80px]"
        animate={{ x: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-yellow-glow/15 blur-[60px]"
        animate={{ x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <span className="bg-gradient-to-r from-gold-primary via-yellow-glow to-gold-primary bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.h2>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-yellow-pastel/85"
          >
            {subtext}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={primaryButtonHref}
              className="inline-block w-full rounded-md bg-gradient-to-r from-gold-primary to-yellow-glow px-10 py-4 font-semibold text-luxury-black shadow-[0_0_40px_rgba(249,200,51,0.4)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(249,200,51,0.55)] text-center sm:w-auto"
            >
              {primaryButtonText}
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={secondaryButtonHref}
              className="inline-block w-full rounded-md border-2 border-gold-primary/70 px-10 py-4 font-semibold text-gold-primary transition-all duration-300 hover:bg-gold-primary/15 hover:shadow-[0_0_35px_rgba(249,200,51,0.25)] text-center sm:w-auto"
            >
              {secondaryButtonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
