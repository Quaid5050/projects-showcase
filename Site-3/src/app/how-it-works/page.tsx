import React from "react"
import type { Metadata } from "next"
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Merchant Orders",
  description: "See how Merchant Orders helps restaurants set up, launch, and grow their branded online ordering experience.",
  alternates: { canonical: "https://www.merchantorders.io/how-it-works" },
  openGraph: {
    url: "https://www.merchantorders.io/how-it-works",
    title: "How It Works | Merchant Orders",
    description: "See how Merchant Orders helps restaurants set up, launch, and grow their branded online ordering experience.",
  },
}

export default function HowItWorksPage() {
  const checklists = [
    {
      title: "Setup Checklist",
      items: [
        "Provide your current menu and pricing",
        "Share your brand logo and colors",
        "Define your delivery zones and fees",
        "Set up your merchant account for payments",
        "Connect your existing POS system"
      ]
    },
    {
      title: "Launch Checklist",
      items: [
        "Review your branded ordering website",
        "Test a live order from start to finish",
        "Train your staff on the tablet interface",
        "Publish your custom mobile apps to the stores",
        "Announce your new platform to customers"
      ]
    },
    {
      title: "Growth Checklist",
      items: [
        "Activate your loyalty and rewards program",
        "Send your first push notification promotion",
        "Review your first 30 days of analytics",
        "Optimize your top-selling menu items",
        "Collect customer feedback and reviews"
      ]
    }
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              From Sign-Up to Your First Order
            </h1>
            <p className="text-xl text-slate-600">
              We've streamlined the onboarding process so you can focus on making great food while we handle the technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <HowItWorksTimeline />

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Path to Success
            </h2>
            <p className="text-slate-400 text-lg">
              Checklists to keep your launch on track and your growth moving upward.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {checklists.map((list, index) => (
              <AnimatedSection key={index} delay={index * 0.15} animation="fade-up">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full transition-transform hover:-translate-y-2 duration-300 hover:shadow-2xl hover:shadow-emerald-900/20">
                  <h3 className="text-xl font-bold text-emerald-400 mb-6 pb-4 border-b border-slate-700">
                    {list.title}
                  </h3>
                  <ul className="space-y-4">
                    {list.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
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
