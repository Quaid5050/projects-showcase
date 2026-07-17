"use client"

import React from "react"
import Link from "next/link"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

export const FeatureShowcase = () => {
  const showcaseFeatures = features.slice(0, 4)

  return (
    <section className="py-24 md:py-36 bg-[#040810] relative overflow-hidden" id="services-showcase">
      {/* Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
            Core Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Services Built for{" "}
            <span className="gradient-text">Restaurant Growth</span>
          </h2>
          <p className="text-lg text-slate-400">
            A comprehensive arsenal of tools designed to increase revenue and dominate your digital presence.
          </p>
        </AnimatedSection>

        <div className="space-y-28 md:space-y-40">
          {showcaseFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <AnimatedSection animation={index % 2 === 0 ? "slide-right" : "slide-left"}>
                  {/* Index number */}
                  <div className="text-8xl font-black text-white/3 leading-none mb-4 select-none">
                    0{index + 1}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                    <feature.icon size={32} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-4 mb-10">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${feature.id}`}>
                    <Button variant="outline" className="group">
                      Explore Service
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>

              {/* Visual */}
              <div className="w-full lg:w-1/2">
                <AnimatedSection delay={0.2} animation="scale-up">
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-white/6 bg-[#0a0f1a] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_40px_rgba(0,255,136,0.06)] group">
                    {/* Top bar accent */}
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

                    <img
                      src={`/images/feature-${feature.id}.webp`}
                      alt={feature.title}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                        const fb = e.currentTarget.parentElement?.querySelector(".fallback") as HTMLElement | null
                        if (fb) fb.style.display = "flex"
                      }}
                    />
                    {/* Fallback */}
                    <div
                      className="fallback hidden absolute inset-0 items-center justify-center min-h-[300px]"
                    >
                      <div className="flex flex-col items-center gap-4 opacity-30">
                        <feature.icon size={64} className="text-emerald-400" />
                        <span className="text-white/50 font-bold text-lg">{feature.title}</span>
                      </div>
                    </div>

                    {/* Overlay glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020509]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-[#0d1117] border border-emerald-500/20 rounded-2xl px-5 py-3 shadow-[0_0_20px_rgba(0,255,136,0.1)] hidden lg:block">
                    <div className="text-sm font-bold text-emerald-400">✓ Active</div>
                    <div className="text-xs text-slate-500">Live on platform</div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
