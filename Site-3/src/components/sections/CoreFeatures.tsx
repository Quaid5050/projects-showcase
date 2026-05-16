import React from "react"
import Link from "next/link"
import { features } from "@/data/features"
import { Card } from "@/components/ui/Card"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const CoreFeatures = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden" id="features">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything You Need to Grow Your Restaurant
          </h2>
          <p className="text-lg text-slate-600">
            A complete suite of tools to take control of your orders, understand your customers, and scale your brand.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.id} 
              delay={index * 0.1}
              animation="fade-up"
              className={index === 6 ? "md:col-span-2 lg:col-span-1" : ""} // Handle odd number of items gracefully
            >
              <Card className="h-full p-8 flex flex-col group hover:-translate-y-2 hover:border-emerald-200 hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                
                {feature.headline && (
                  <p className="font-semibold text-emerald-700 mb-2 text-sm">{feature.headline}</p>
                )}
                
                <p className="text-slate-600 mb-6 flex-grow">{feature.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 mt-auto group/link"
                >
                  Explore Feature 
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
