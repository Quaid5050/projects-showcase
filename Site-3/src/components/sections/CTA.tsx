"use client"

import React from "react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

export const CTA = () => {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden bg-[#020509]">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Massive background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-emerald-500/8 blur-[160px]" />
        <div className="absolute top-[-30%] right-[-20%] w-[60%] h-[60%] rounded-full bg-cyan-500/5 blur-[150px]" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[60%] h-[60%] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      {/* Animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[600, 800, 1000].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-emerald-500/5"
            style={{
              width: size,
              height: size,
              top: -size / 2,
              left: -size / 2,
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <AnimatedSection animation="dramatic" className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-6">
            Ready to Launch?
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
            OWN YOUR
            <br />
            <span className="gradient-text">ORDERS.</span>
            <br />
            OWN YOUR
            <br />
            <span className="text-amber-400 glow-gold">GROWTH.</span>
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build a branded ordering experience that keeps customers coming back. Zero commissions. 100% your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-black text-lg shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-[0_0_60px_rgba(0,255,136,0.6)] transition-all duration-300 border-0 px-10"
              >
                Book a Demo →
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            {["No Long-Term Contracts", "Zero Commission Fees", "Setup in Days", "24/7 Support"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 neon-pulse" />
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
