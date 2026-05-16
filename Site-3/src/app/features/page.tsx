import React from "react"
import type { Metadata } from "next"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features | Merchant Orders",
  description: "Explore Merchant Orders features for restaurant online ordering, branded websites, mobile ordering, delivery workflows, loyalty, reporting, and dine-in QR ordering.",
  alternates: { canonical: "https://www.merchantorders.io/features" },
  openGraph: {
    url: "https://www.merchantorders.io/features",
    title: "Features | Merchant Orders",
    description: "Explore Merchant Orders features for restaurant online ordering, branded websites, mobile ordering, delivery workflows, loyalty, reporting, and dine-in QR ordering.",
  },
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Powerful Features for <br className="hidden md:block" />Modern Restaurants
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Everything you need to launch, manage, and grow your digital restaurant experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20 md:space-y-32">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                id={feature.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } scroll-mt-32`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <AnimatedSection animation="fade-up">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <feature.icon size={28} />
                    </div>
                    
                    {feature.headline && (
                      <p className="font-bold text-emerald-600 mb-2">{feature.headline}</p>
                    )}
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{feature.title}</h2>
                    <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-base md:text-lg">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button variant="outline" className="group w-full sm:w-auto">
                        Get Started with {feature.title}
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </AnimatedSection>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <AnimatedSection delay={0.2} animation="scale-up">
                    <div className="relative w-full rounded-[2rem] bg-slate-900 border border-slate-800 shadow-sm overflow-hidden flex items-center justify-center group hover:shadow-lg transition-all duration-500">
                      <img 
                        src={`/images/feature-page-${feature.id}.webp`}
                        alt={feature.title} 
                        className="w-full h-auto block"
                      />
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
