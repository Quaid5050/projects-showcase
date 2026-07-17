"use client"

import React from "react"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { motion } from "framer-motion"

const integrationItems = [
  { name: "POS Systems", icon: "⚡", color: "emerald" },
  { name: "Payment Gateways", icon: "💳", color: "cyan" },
  { name: "Delivery Workflows", icon: "🚚", color: "amber" },
  { name: "Loyalty Tools", icon: "⭐", color: "emerald" },
  { name: "Mobile Ordering", icon: "📱", color: "cyan" },
  { name: "Analytics", icon: "📊", color: "amber" },
  { name: "Customer Engagement", icon: "🎯", color: "emerald" },
  { name: "Online Ordering", icon: "🛒", color: "cyan" },
]

const colorMap: Record<string, string> = {
  emerald: "border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,200,255,0.1)]",
  amber: "border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,166,35,0.1)]",
}

export const IntegrationsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-[#020509] relative overflow-hidden cinema-grid" id="integrations">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[500, 700, 900].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-white/3"
            style={{ width: size, height: size, top: -size / 2, left: -size / 2 }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-500/6 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <AnimatedSection animation="dramatic" className="max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-cyan-500/70 mb-4">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Built to Power Your{" "}
            <span className="text-cyan-400 glow-blue">Entire Stack</span>
          </h2>
          <p className="text-lg text-slate-400">
            Merchant Orders connects with the technology your restaurant already uses — seamlessly, powerfully.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          {integrationItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.08} animation="scale-up">
              <div className={`rounded-2xl border bg-white/2 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-3 h-28 cursor-default transition-all duration-300 ${colorMap[item.color]} hover:bg-white/5 group`}>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <Link href="/integrations">
            <Button variant="outline" className="border-white/10 text-white hover:border-cyan-500/40">
              View All Integrations
            </Button>
          </Link>
        </AnimatedSection>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
