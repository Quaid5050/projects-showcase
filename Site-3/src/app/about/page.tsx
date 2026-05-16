import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { ShieldCheck, Heart, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Merchant Orders",
  description: "Learn about Merchant Orders and its mission to help restaurants own their digital ordering experience.",
  alternates: { canonical: "https://www.merchantorders.io/about" },
  openGraph: {
    url: "https://www.merchantorders.io/about",
    title: "About Merchant Orders",
    description: "Learn about Merchant Orders and its mission to help restaurants own their digital ordering experience.",
  },
}

export default function AboutPage() {
  const values = [
    {
      title: "Restaurant First",
      description: "We build tools that protect restaurant margins and elevate their brand, not ours.",
      icon: Heart
    },
    {
      title: "Speed & Reliability",
      description: "In the restaurant industry, every second counts. Our platform is built for speed and uptime.",
      icon: Zap
    },
    {
      title: "Data Ownership",
      description: "Your customers are yours. We give you the data and insights to build lasting relationships.",
      icon: ShieldCheck
    },
    {
      title: "Premium Experience",
      description: "We believe ordering food should be as delightful as eating it. Design matters.",
      icon: Award
    }
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Empowering Restaurants to Own Their Future
            </h1>
            <p className="text-xl text-slate-600">
              We are a team of technologists, designers, and food lovers dedicated to building the best digital ordering experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The restaurant industry is evolving rapidly, but the tools to adapt shouldn't cost you your hard-earned margins. Our mission is to provide powerful online ordering technology that helps you compete, grow, and maintain direct relationships with your guests.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By focusing on seamless integrations, beautiful design, and actionable analytics, Merchant Orders is here to level the playing field for modern restaurants.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} animation="scale-up">
              <div className="rounded-3xl overflow-hidden bg-emerald-50 border border-emerald-100 shadow-sm p-10 flex flex-col items-center justify-center text-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Built for Restaurants</h3>
                  <p className="text-slate-500 text-sm max-w-xs">Every feature we build is designed around the real needs of restaurant owners and operators.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-slate-400">
              The principles that guide how we build our products and support our partners.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="fade-up">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-700 text-emerald-400 flex items-center justify-center mb-6">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
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
