import React from "react"
import type { Metadata } from "next"
import { FeatureShowcase } from "@/components/sections/FeatureShowcase"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "Restaurant Ordering Services | Merchant Orders™",
  description: "Merchant Orders provides digital ordering services for restaurants, including online ordering setup, branded websites, customer engagement, delivery workflows, and reporting tools.",
  alternates: { canonical: "https://www.merchantorders.io/services" },
  openGraph: {
    url: "https://www.merchantorders.io/services",
    title: "Restaurant Ordering Services | Merchant Orders™",
    description: "Merchant Orders provides digital ordering services for restaurants, including online ordering setup, branded websites, customer engagement, delivery workflows, and reporting tools.",
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#020509] relative overflow-hidden cinema-grid text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/8 blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[130px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-[-0.03em] leading-[0.95] text-white">
              Solutions Built for
              <br />
              <span className="gradient-text">Restaurant Growth</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              End-to-end services to elevate your brand and dominate your digital presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FeatureShowcase />

      {/* Process */}
      <section className="py-24 bg-[#020509] border-t border-white/5 relative">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/4 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              Our Method
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              How We Deliver <span className="gradient-text">Success</span>
            </h2>
            <p className="text-lg text-slate-400">
              A proven methodology to get your restaurant digital-ready in record time.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Consultation & Strategy", desc: "We analyze your menu, locations, and brand goals to design the perfect ordering flow." },
              { title: "Setup & Integration", desc: "Our team configures your platform, builds your branded apps, and connects your tools." },
              { title: "Launch & Optimize", desc: "We help you launch with confidence and use analytics to continually improve performance." },
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="fade-up">
                <div className="rounded-2xl border border-white/6 bg-white/2 p-8 h-full hover:border-emerald-500/20 hover:bg-white/4 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
                  <div className="text-5xl font-black text-white/5 mb-4 leading-none">0{index + 1}</div>
                  <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
