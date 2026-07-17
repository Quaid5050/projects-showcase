import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { ShieldCheck, Heart, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Merchant Orders™",
  description: "Learn about Merchant Orders and its mission to help restaurants own their digital ordering experience.",
  alternates: { canonical: "https://www.merchantorders.io/about" },
  openGraph: {
    url: "https://www.merchantorders.io/about",
    title: "About Merchant Orders™",
    description: "Learn about Merchant Orders and its mission to help restaurants own their digital ordering experience.",
  },
}

export default function AboutPage() {
  const values = [
    { title: "Restaurant First", description: "We build tools that protect restaurant margins and elevate their brand, not ours.", icon: Heart, color: "emerald" },
    { title: "Speed & Reliability", description: "In the restaurant industry, every second counts. Our platform is built for speed and uptime.", icon: Zap, color: "cyan" },
    { title: "Data Ownership", description: "Your customers are yours. We give you the data and insights to build lasting relationships.", icon: ShieldCheck, color: "amber" },
    { title: "Premium Experience", description: "We believe ordering food should be as delightful as eating it. Design matters.", icon: Award, color: "emerald" },
  ]

  const colorMap: Record<string, string> = {
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.15)]",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,166,35,0.15)]",
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020509] relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/6 blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[130px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
              Empowering Restaurants
              <br />
              <span className="gradient-text">to Own Their Future</span>
            </h1>
            <p className="text-xl text-slate-400">
              A team of technologists, designers, and food lovers dedicated to building the best digital ordering experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-[#040810] relative overflow-hidden">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/4 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="slide-right">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Level the Playing Field for Modern Restaurants
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                The restaurant industry is evolving rapidly, but the tools to adapt shouldn't cost you your hard-earned margins. Our mission is to provide powerful online ordering technology that helps you compete, grow, and maintain direct relationships with your guests.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                By focusing on seamless integrations, beautiful design, and actionable analytics, Merchant Orders is here to give independent restaurants the same firepower as enterprise chains.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="slide-left">
              <div className="rounded-3xl border border-white/6 bg-white/2 backdrop-blur-sm p-10 flex flex-col items-center justify-center text-center gap-6 shadow-[0_0_60px_rgba(0,255,136,0.04)]">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2">Built for Restaurants</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">Every feature we build is designed around the real needs of restaurant owners and operators — not just technology for technology's sake.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 w-full pt-4 border-t border-white/5">
                  {[["0%", "Commissions"], ["100%", "Your Brand"], ["24/7", "Support"]].map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <div className="text-2xl font-black text-emerald-400 glow-emerald">{val}</div>
                      <div className="text-xs text-slate-500 mt-1">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="divider-glow absolute bottom-0 left-0 right-0" />
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[#020509] relative overflow-hidden cinema-grid">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/4 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-slate-400">
              The principles that guide how we build our products and support our partners.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="fade-up">
                <div className="p-8 rounded-2xl border border-white/6 bg-white/2 h-full group hover:border-white/10 hover:bg-white/4 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-emerald-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 ${colorMap[value.color]}`}>
                    <value.icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
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
