"use client"

import React from "react"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const IntegrationsSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="integrations">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-800 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-700 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-emerald-900 opacity-50" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-emerald-500/10 blur-[50px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <AnimatedSection className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Built to Support Your Restaurant Stack
          </h2>
          <p className="text-lg text-slate-300">
            Merchant Orders is designed to connect with the technology your restaurant already uses — from ordering to payments and delivery.
          </p>
        </AnimatedSection>

        {/* Orbiting / Grid of Integration Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {[
            "POS Systems", "Payment Gateways", "Delivery Workflows", "Loyalty Tools",
            "Mobile Ordering", "Analytics", "Customer Engagement", "Online Ordering"
          ].map((partner, index) => (
            <AnimatedSection key={index} delay={index * 0.1} animation="scale-up">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors h-24">
                <span className="font-semibold text-slate-300">{partner}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <Link href="/integrations">
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white">
              View All Integrations
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
