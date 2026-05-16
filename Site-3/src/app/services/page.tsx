import React from "react"
import type { Metadata } from "next"
import { FeatureShowcase } from "@/components/sections/FeatureShowcase"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "Restaurant Ordering Services | Merchant Orders",
  description: "Merchant Orders provides digital ordering services for restaurants, including online ordering setup, branded websites, customer engagement, delivery workflows, and reporting tools.",
  alternates: { canonical: "https://www.merchantorders.io/services" },
  openGraph: {
    url: "https://www.merchantorders.io/services",
    title: "Restaurant Ordering Services | Merchant Orders",
    description: "Merchant Orders provides digital ordering services for restaurants, including online ordering setup, branded websites, customer engagement, delivery workflows, and reporting tools.",
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-emerald-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-500/30 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-slate-900/40 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-100 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Solutions Built for Restaurant Growth
            </h1>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              From online ordering setup to branded apps and real-time analytics, we provide end-to-end services to elevate your brand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reusing FeatureShowcase which serves as the "Services" layout */}
      <FeatureShowcase />

      {/* Simple Process Overview */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How We Deliver Success
            </h2>
            <p className="text-lg text-slate-600">
              A proven methodology to get your restaurant digital-ready in record time.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Consultation & Strategy", desc: "We analyze your menu, locations, and brand goals to design the perfect ordering flow." },
              { title: "Setup & Integration", desc: "Our team configures your platform, builds your branded apps, and connects your tools." },
              { title: "Launch & Optimize", desc: "We help you launch with confidence and use analytics to continually improve performance." }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="fade-up">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                  <div className="text-4xl font-black text-emerald-100 mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
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
