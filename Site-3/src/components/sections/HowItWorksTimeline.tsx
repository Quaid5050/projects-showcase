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

  const steps = [
    {
      title: "Get Set Up Fast",
      description: "Share your menu, store details, delivery zones, and branding. Merchant Orders helps you prepare your ordering experience quickly.",
      number: "01"
    },
    {
      title: "Start Taking Direct Orders",
      description: "Accept pickup, delivery, curbside, catering, and dine-in QR orders through your branded ordering flow.",
      number: "02"
    },
    {
      title: "Grow, Retain, and Optimize",
      description: "Use analytics, loyalty, customer data, and promotions to increase repeat business.",
      number: "03"
    }
  ]

  // Height of the progress line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-24 bg-white relative" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            How Merchant Orders Works
          </h2>
          <p className="text-lg text-slate-600">
            A simple, streamlined process to get your restaurant running with powerful digital tools.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 transform md:-translate-x-1/2 rounded-full z-0" />
          
          {/* Animated Vertical Progress Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 transform md:-translate-x-1/2 rounded-full z-10 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 md:space-y-24 relative z-20">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:text-left" : "md:text-right"} pl-14 md:pl-0`}>
                  <AnimatedSection 
                    animation="fade-up"
                    delay={0.2}
                  >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm mb-4">
                      Step {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 text-base md:text-lg">{step.description}</p>
                  </AnimatedSection>
                </div>

                {/* Center Dot — desktop */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white bg-emerald-500 transform -translate-x-[14px] md:-translate-x-1/2 shadow-md shadow-emerald-200 z-20 hidden md:block" />
                
                {/* Mobile Dot */}
                <div className="absolute left-4 w-8 h-8 rounded-full border-4 border-white bg-emerald-500 transform -translate-x-[14px] shadow-md shadow-emerald-200 z-20 md:hidden" />

                {/* Visual Side — desktop only */}
                <div className="w-full md:w-1/2 hidden md:block">
                  <AnimatedSection delay={0.4}>
                    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden relative group">
                      <img 
                        src={`/images/step-${step.number}.webp`}
                        alt={`Step ${step.number}`}
                        className="w-full h-auto block"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                        }}
                      />
                      <div className="fallback hidden w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-[120px] font-black text-slate-100 opacity-50 group-hover:scale-110 group-hover:text-emerald-50 transition-all duration-500">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
