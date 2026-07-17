"use client"

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020509] cinema-grid noise"
    >
      {/* ── Deep background orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] rounded-full bg-emerald-500/8 blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full bg-cyan-500/6 blur-[160px]" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-amber-500/5 blur-[120px]" />
        {/* Dramatic center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full" />
      </div>

      {/* ── Radial fade overlay ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,136,0.07),transparent)] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="w-full relative z-10">
        <div className="container mx-auto px-6 md:px-10 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

            {/* ── Text ── */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } }
              }}
              className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              {/* Badge */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 neon-pulse" />
                  Next Generation Restaurant Tech
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.03em] mb-6 text-white">
                  OWN YOUR
                  <br />
                  <span className="gradient-text">ORDERS.</span>
                  <br />
                  <span className="text-white">OWN YOUR</span>
                  <br />
                  <span className="text-amber-400 glow-gold">FUTURE.</span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="text-base md:text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Launch branded ordering, delivery, loyalty, mobile app, analytics, and customer engagement — from one cinematic platform.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] transition-all duration-300 border-0"
                  >
                    Book a Demo →
                  </Button>
                </Link>
                <Link href="/features">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-base border-white/10 text-white hover:bg-white/5 hover:border-emerald-500/40 transition-all duration-300"
                  >
                    Explore Features
                  </Button>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.6, duration: 0.8 } } }}
                className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-4"
              >
                {[
                  { value: "0%", label: "Commission Fees" },
                  { value: "24/7", label: "Support" },
                  { value: "100%", label: "Your Brand" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-black text-emerald-400 glow-emerald">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1 tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Visual ── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
            >
              {/* Glow behind mockup */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full scale-75" />

              {/* Main device */}
              <div className="relative w-full max-w-[480px] lg:max-w-[560px] rounded-[2.5rem] overflow-hidden z-20 shadow-[0_0_60px_rgba(0,255,136,0.12),0_40px_80px_rgba(0,0,0,0.8)] border border-white/8 float-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none z-10" />
                <img
                  src="/images/hero-dashboard-mockup.webp"
                  alt="Merchant Orders Dashboard"
                  className="w-full h-auto block"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    const fallback = e.currentTarget.parentElement?.querySelector(".fallback")
                    if (fallback) fallback.classList.remove("hidden")
                  }}
                />
                {/* Fallback */}
                <div className="fallback hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-[#020509] p-8 flex flex-col gap-4 min-h-[400px]">
                  <div className="h-8 w-32 bg-emerald-500/20 rounded-full mx-auto" />
                  <div className="h-40 bg-white/3 rounded-2xl border border-white/5" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-white/3 rounded-xl border border-white/5" />
                    <div className="h-20 bg-white/3 rounded-xl border border-white/5" />
                  </div>
                  <div className="h-14 bg-emerald-500/30 rounded-xl mt-auto border border-emerald-500/20" />
                </div>
              </div>

              {/* Floating card — New Order */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -left-6 top-16 z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0d1117]/90 backdrop-blur-xl px-4 py-3 shadow-[0_0_20px_rgba(0,255,136,0.1)]"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-lg">🍔</div>
                <div>
                  <div className="text-sm font-bold text-white">New Order</div>
                  <div className="text-xs text-emerald-400">Pickup · 15 mins</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 neon-pulse ml-2" />
              </motion.div>

              {/* Floating card — Sales */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-6 bottom-28 z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0d1117]/90 backdrop-blur-xl px-4 py-3 shadow-[0_0_20px_rgba(0,200,255,0.1)]"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-black text-cyan-400 text-sm">↑</div>
                <div>
                  <div className="text-sm font-bold text-white">+24% Sales</div>
                  <div className="text-xs text-slate-400">vs last week</div>
                </div>
              </motion.div>

              {/* Floating card — Revenue */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 3 }}
                className="absolute left-0 bottom-12 z-30 hidden lg:flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0d1117]/90 backdrop-blur-xl px-4 py-3 shadow-[0_0_20px_rgba(245,166,35,0.1)]"
              >
                <div className="text-xl">🔥</div>
                <div>
                  <div className="text-sm font-bold text-amber-400">$8,430 Today</div>
                  <div className="text-xs text-slate-400">Direct revenue</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020509] to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-emerald-500/50 to-transparent" />
      </motion.div>
    </section>
  )
}
