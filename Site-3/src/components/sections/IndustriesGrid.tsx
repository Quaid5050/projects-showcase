"use client"

import React from "react"
import Link from "next/link"
import { industries } from "@/data/industries"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowRight } from "lucide-react"

export const IndustriesGrid = () => {
  return (
    <section className="py-24 md:py-36 bg-[#040810] relative overflow-hidden" id="industries">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/4 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-500/70 mb-4">
            Who We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Built for Every{" "}
            <span className="text-amber-400 glow-gold">Restaurant</span>{" "}
            Type
          </h2>
          <p className="text-lg text-slate-400">
            From a single neighborhood cafe to a multi-location empire — Merchant Orders scales with your ambition.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.05} animation="scale-up">
              <Link href={industry.link} className="block group h-full">
                <div className="relative rounded-2xl border border-white/6 bg-white/2 p-6 h-full transition-all duration-500 hover:border-amber-500/20 hover:bg-white/4 hover:shadow-[0_0_40px_rgba(245,166,35,0.06)] overflow-hidden">
                  {/* Corner glow on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl border border-white/8 bg-white/3 text-slate-400 flex items-center justify-center mb-5 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 group-hover:text-amber-400 transition-all duration-300 relative z-10">
                    <industry.icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors relative z-10">
                    {industry.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed relative z-10">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-amber-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10">
                    View use case <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
