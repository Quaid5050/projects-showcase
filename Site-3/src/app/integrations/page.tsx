import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { integrations } from "@/data/integrations"
import { Plug, CreditCard, Truck, Gift } from "lucide-react"

export const metadata: Metadata = {
  title: "Integrations | Merchant Orders™",
  description: "Learn how Merchant Orders can support restaurant technology workflows and future integrations.",
  alternates: { canonical: "https://www.merchantorders.io/integrations" },
  openGraph: {
    url: "https://www.merchantorders.io/integrations",
    title: "Integrations | Merchant Orders™",
    description: "Learn how Merchant Orders can support restaurant technology workflows and future integrations.",
  },
}

export default function IntegrationsPage() {
  const categories = [
    { title: "POS Systems", icon: Plug, data: integrations.pos },
    { title: "Payment Gateways", icon: CreditCard, data: integrations.payments },
    { title: "Delivery Partners", icon: Truck, data: integrations.delivery },
    { title: "Loyalty & Marketing", icon: Gift, data: integrations.loyalty },
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-[#020509] text-white relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/images/hero-integrations.webp"
            alt="Restaurant technology integrations"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020509]/60 to-[#020509]" />
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/6 blur-[150px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-cyan-500/70 mb-4">
              Integrations
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
              Power Your
              <br />
              <span className="text-cyan-400 glow-blue">Entire Stack</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10">
              Merchant Orders connects with the tools your restaurant already uses — seamlessly and powerfully.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#040810] relative">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/4 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-cyan-500/70 mb-4">
              Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Integration <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We support connections across key restaurant technology categories. Contact us to discuss your specific setup.
            </p>
          </AnimatedSection>

          <div className="space-y-14 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div key={index}>
                <AnimatedSection animation="fade-up">
                  <h3 className="text-xl font-black text-white mb-6 pb-4 border-b border-white/6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full inline-block" />
                    <category.icon size={20} className="text-cyan-400" />
                    <span>{category.title}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.data.map((item, i) => (
                      <div
                        key={i}
                        className="border border-white/6 bg-white/2 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/25 hover:bg-white/4 hover:shadow-[0_0_20px_rgba(0,200,255,0.06)] transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-3 group-hover:scale-110 transition-transform flex items-center justify-center text-cyan-400">
                          <category.icon size={18} />
                        </div>
                        <span className="font-semibold text-slate-300 text-sm group-hover:text-white transition-colors">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-20 text-center">
            <div className="rounded-3xl border border-cyan-500/15 bg-cyan-500/5 p-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-white mb-4">Need a Specific Integration?</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our team works with restaurants to support the tools they already rely on. Reach out and we will discuss your requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,200,255,0.3)] hover:shadow-[0_0_35px_rgba(0,200,255,0.5)]"
              >
                Contact Us →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
