"use client"

import React from "react"
import Link from "next/link"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

export const FeatureShowcase = () => {
  // Taking only the first 4 features for the showcase to keep it concise,
  // or use the required mapping.
  const showcaseFeatures = features.slice(0, 4)

  return (
    <section className="py-24 bg-white" id="services-showcase">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Services Built Around Restaurant Growth
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive suite of tools designed to help you increase revenue and streamline operations.
          </p>
        </AnimatedSection>

        <div className="space-y-20 md:space-y-32">
          {showcaseFeatures.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <AnimatedSection animation={index % 2 === 1 ? "fade-up" : "fade-up"}>
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${feature.id}`}>
                    <Button variant="outline" className="group">
                      Explore Service 
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>

              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <AnimatedSection delay={0.2} animation="scale-up">
                  <div className="relative aspect-[4/3] rounded-[2rem] bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center p-8 group">
                    {/* Placeholder for actual mockups */}
                    
                    <div className="relative w-full max-w-lg bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={`/images/feature-${feature.id}.webp`}
                        alt={feature.title} 
                        className="w-full h-auto block"
                      />
                      {/* Fallback CSS mockup */}
                      <div className="fallback hidden w-full h-full flex flex-col">
                        <div className="h-6 bg-slate-800 w-32 mx-auto rounded-b-xl mb-4" />
                        <div className="px-4 pb-4 flex-grow flex flex-col gap-3">
                          <div className="h-10 bg-slate-100 rounded-lg w-full mb-2" />
                          <div className="h-24 bg-emerald-50 rounded-lg w-full flex items-center justify-center border border-emerald-100 text-emerald-600">
                            <feature.icon size={32} opacity={0.5} />
                          </div>
                          <div className="h-16 bg-slate-50 rounded-lg w-full mt-auto" />
                        </div>
                      </div>
                    </div>

                    {/* Floating elements based on index */}
                    <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 transition-transform duration-500 group-hover:-translate-y-4">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold mb-2">✓</div>
                      <div className="w-20 h-2 bg-slate-100 rounded-full mb-2" />
                      <div className="w-16 h-2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
