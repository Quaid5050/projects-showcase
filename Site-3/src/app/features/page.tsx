import React from "react"
import type { Metadata } from "next"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features | Merchant Orders™",
  description: "Explore Merchant Orders features for restaurant online ordering, branded websites, mobile ordering, delivery workflows, loyalty, reporting, and dine-in QR ordering.",
  alternates: { canonical: "https://www.merchantorders.io/features" },
  openGraph: {
    url: "https://www.merchantorders.io/features",
    title: "Features | Merchant Orders™",
    description: "Explore Merchant Orders features for restaurant online ordering, branded websites, mobile ordering, delivery workflows, loyalty, reporting, and dine-in QR ordering.",
  },
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020509] relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/6 blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/4 blur-[130px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              Platform Features
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
              Powerful Features for
              <br />
              <span className="gradient-text">Modern Restaurants</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10">
              Everything you need to launch, manage, and dominate your digital restaurant experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features list */}
      <div className="py-20 md:py-32 bg-[#040810] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 md:space-y-36">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                id={feature.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } scroll-mt-28`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <AnimatedSection animation={index % 2 === 0 ? "slide-right" : "slide-left"}>
                    <div className="text-7xl font-black text-white/3 leading-none mb-4 select-none">
                      0{index + 1}
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                      <feature.icon size={28} />
                    </div>

                    {feature.headline && (
                      <p className="font-bold text-emerald-400 mb-2 text-sm tracking-wide uppercase">{feature.headline}</p>
                    )}

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">{feature.title}</h2>
                    <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">{feature.description}</p>

                    <ul className="space-y-3 mb-8">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button variant="outline" className="group w-full sm:w-auto">
                        Get Started with {feature.title}
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </AnimatedSection>
                </div>

                {/* Visual */}
                <div className="w-full lg:w-1/2">
                  <AnimatedSection delay={0.2} animation="scale-up">
                    <div className="relative w-full rounded-[2rem] bg-[#0a0f1a] border border-white/6 shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_30px_rgba(0,255,136,0.05)] overflow-hidden group">
                      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                      <img
                        src={`/images/feature-page-${feature.id}.webp`}
                        alt={feature.title}
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020509]/40 to-transparent pointer-events-none" />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </>
  )
}
