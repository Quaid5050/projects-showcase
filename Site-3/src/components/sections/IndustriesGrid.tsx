"use client"

import React from "react"
import Link from "next/link"
import { industries } from "@/data/industries"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowRight } from "lucide-react"

export const IndustriesGrid = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="industries">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Built for Every Type of Restaurant
          </h2>
          <p className="text-lg text-slate-600">
            Whether you run a single neighborhood cafe or a multi-location enterprise, Merchant Orders scales with you.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.05} animation="scale-up">
              <Link href={industry.link} className="block group h-full">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:border-emerald-200 relative overflow-hidden">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-5 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors duration-300">
                      <industry.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-emerald-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      View use case <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
