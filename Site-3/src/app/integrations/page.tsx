import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { integrations } from "@/data/integrations"
import { Plug, CreditCard, Truck, Gift } from "lucide-react"

export const metadata: Metadata = {
  title: "Integrations | Merchant Orders",
  description: "Learn how Merchant Orders can support restaurant technology workflows and future integrations.",
  alternates: { canonical: "https://www.merchantorders.io/integrations" },
  openGraph: {
    url: "https://www.merchantorders.io/integrations",
    title: "Integrations | Merchant Orders",
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
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/images/hero-integrations.webp"
            alt="Restaurant technology integrations"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Built to Work With Your Restaurant Stack
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Merchant Orders is designed to connect with the tools your restaurant already uses — from POS systems to payment gateways and delivery workflows.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Integration Categories
            </h2>
            <p className="text-slate-600 text-lg">
              We support connections across key restaurant technology categories. Contact us to discuss your specific setup.
            </p>
          </AnimatedSection>

          <div className="space-y-16 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div key={index}>
                <AnimatedSection animation="fade-up">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
                    <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block" />
                    <category.icon size={22} className="text-emerald-600" />
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {category.data.map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-emerald-200 transition-all group"
                      >
                        <div className="w-12 h-12 bg-emerald-50 rounded-full mb-4 group-hover:scale-110 transition-transform flex items-center justify-center text-emerald-500">
                          <category.icon size={20} />
                        </div>
                        <span className="font-semibold text-slate-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-20 text-center">
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Specific Integration?</h3>
              <p className="text-slate-600 mb-6">
                Our team works with restaurants to support the tools they already rely on. Reach out and we will discuss your requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
