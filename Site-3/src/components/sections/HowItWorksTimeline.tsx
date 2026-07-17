"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedSection } from "@/components/ui/AnimatedSection"

export const HowItWorksTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = [
    {
      title: "Get Set Up Fast",
      description: "Share your menu, store details, delivery zones, and branding. We configure everything so you can focus on making great food.",
      number: "01",
      color: "emerald",
      accent: "rgba(0,255,136,0.6)"
    },
    {
      title: "Start Taking Direct Orders",
      description: "Accept pickup, delivery, curbside, catering, and dine-in QR orders through your branded ordering flow — commission-free.",
      number: "02",
      color: "cyan",
      accent: "rgba(0,200,255,0.6)"
    },
    {
      title: "Grow, Retain, and Optimize",
      description: "Use analytics, loyalty, customer data, and promotions to dramatically increase repeat business and own your growth.",
      number: "03",
      color: "amber",
      accent: "rgba(245,166,35,0.6)"
    }
  ]

  return (
    <section className="py-24 md:py-36 bg-[#020509] relative overflow-hidden cinema-grid" id="how-it-works">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/4 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            From Sign-Up to{" "}
            <span className="gradient-text">First Order</span>
          </h2>
          <p className="text-lg text-slate-400">
            A streamlined path to get you live and profitable in record time.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Timeline line bg */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 transform md:-translate-x-1/2 z-0" />
          {/* Animated line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-emerald-400 via-cyan-400 to-amber-400 transform md:-translate-x-1/2 z-10 origin-top shadow-[0_0_8px_rgba(0,255,136,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-20 md:space-y-28 relative z-20">
            {steps.map((step, index) => {
              const isOdd = index % 2 === 1
              const colorMap: Record<string, string> = {
                emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 shadow-emerald-500/20",
                cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-cyan-500/20",
                amber: "text-amber-400 bg-amber-500/10 border-amber-500/30 shadow-amber-500/20",
              }
              const glowMap: Record<string, string> = {
                emerald: "bg-emerald-500",
                cyan: "bg-cyan-400",
                amber: "bg-amber-400",
              }
              const badgeMap: Record<string, string> = {
                emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
              }

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 ${isOdd ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isOdd ? "md:text-left" : "md:text-right"}`}>
                    <AnimatedSection animation={isOdd ? "slide-left" : "slide-right"} delay={0.1}>
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold mb-4 ${badgeMap[step.color]}`}>
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">{step.title}</h3>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed">{step.description}</p>
                    </AnimatedSection>
                  </div>

                  {/* Center dot */}
                  <div className={`absolute left-6 md:left-1/2 w-10 h-10 rounded-full border-2 border-[#020509] ${glowMap[step.color]} transform -translate-x-[18px] md:-translate-x-1/2 z-20 shadow-[0_0_20px_var(--dot-shadow)] flex items-center justify-center`}
                    style={{ "--dot-shadow": step.accent } as React.CSSProperties}
                  >
                    <span className="text-xs font-black text-black">{step.number}</span>
                  </div>

                  {/* Visual side */}
                  <div className="w-full md:w-1/2 hidden md:block">
                    <AnimatedSection delay={0.3} animation="scale-up">
                      <div className={`rounded-2xl border overflow-hidden ${colorMap[step.color]} shadow-lg relative group`}>
                        <img
                          src={`/images/step-${step.number}.webp`}
                          alt={`Step ${step.number}`}
                          className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                            const fb = e.currentTarget.parentElement?.querySelector(".fb") as HTMLElement | null
                            if (fb) fb.style.display = "flex"
                          }}
                        />
                        <div
                          className="fb hidden absolute inset-0 items-center justify-center min-h-[200px] bg-[#0a0f1a]"
                        >
                          <div className={`text-[100px] font-black opacity-10 ${colorMap[step.color].split(" ")[0]}`}>
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
