import React from "react"
import type { Metadata } from "next"
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Merchant Orders™",
  description: "See how Merchant Orders helps restaurants set up, launch, and grow their branded online ordering experience.",
  alternates: { canonical: "https://www.merchantorders.io/how-it-works" },
  openGraph: {
    url: "https://www.merchantorders.io/how-it-works",
    title: "How It Works | Merchant Orders™",
    description: "See how Merchant Orders helps restaurants set up, launch, and grow their branded online ordering experience.",
  },
}

export default function HowItWorksPage() {
  const checklists = [
    {
      title: "Setup Checklist",
      color: "emerald",
      items: [
        "Provide your current menu and pricing",
        "Share your brand logo and colors",
        "Define your delivery zones and fees",
        "Set up your merchant account for payments",
        "Connect your existing POS system",
      ],
    },
    {
      title: "Launch Checklist",
      color: "cyan",
      items: [
        "Review your branded ordering website",
        "Test a live order from start to finish",
        "Train your staff on the tablet interface",
        "Publish your custom mobile apps to the stores",
        "Announce your new platform to customers",
      ],
    },
    {
      title: "Growth Checklist",
      color: "amber",
      items: [
        "Activate your loyalty and rewards program",
        "Send your first push notification promotion",
        "Review your first 30 days of analytics",
        "Optimize your top-selling menu items",
        "Collect customer feedback and reviews",
      ],
    },
  ]

  const colorMap: Record<string, { title: string; check: string; border: string; bg: string }> = {
    emerald: {
      title: "text-emerald-400",
      check: "text-emerald-500",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
    },
    cyan: {
      title: "text-cyan-400",
      check: "text-cyan-500",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/5",
    },
    amber: {
      title: "text-amber-400",
      check: "text-amber-500",
      border: "border-amber-500/20",
      bg: "bg-amber-500/5",
    },
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020509] relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/6 blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/4 blur-[130px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              The Journey
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
              From Sign-Up to
              <br />
              <span className="gradient-text">Your First Order</span>
            </h1>
            <p className="text-xl text-slate-400">
              We've streamlined onboarding so you can focus on making great food while we handle the technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <HowItWorksTimeline />

      {/* Checklists */}
      <section className="py-24 md:py-32 bg-[#040810] relative overflow-hidden">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/4 blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              Stay on Track
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Your Path to <span className="gradient-text">Success</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Checklists to keep your launch on track and your growth moving upward.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {checklists.map((list, index) => {
              const c = colorMap[list.color]
              return (
                <AnimatedSection key={index} delay={index * 0.15} animation="fade-up">
                  <div className={`rounded-2xl border ${c.border} ${c.bg} p-8 h-full transition-all duration-300 hover:-translate-y-1`}>
                    <h3 className={`text-lg font-black ${c.title} mb-6 pb-4 border-b ${c.border}`}>
                      {list.title}
                    </h3>
                    <ul className="space-y-4">
                      {list.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className={`${c.check} shrink-0 mt-0.5`} />
                          <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
