"use client"

import React from "react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Own Your Orders, Customers, and Growth?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Build a branded ordering experience that keeps customers coming back. Get started with Merchant Orders today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-slate-100">
                Book a Demo
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-700 text-white hover:bg-emerald-800">
                Contact Us
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
