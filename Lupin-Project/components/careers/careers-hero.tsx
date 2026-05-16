"use client"

import { motion } from "framer-motion"
import { HardHat } from "lucide-react"

export function CareersHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 via-transparent to-[#8B5CF6]/20 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 gradient-primary text-white rounded-full text-sm font-semibold mb-6"
        >
          <HardHat className="w-4 h-4" />
          We're Hiring
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Build Your Career With{" "}
          <span className="gradient-text">Lupin Project Group</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg max-w-2xl mx-auto"
        >
          We're looking for dedicated laborers and skilled tradespeople to join our growing team across the GTA.
        </motion.p>
      </div>
    </section>
  )
}
