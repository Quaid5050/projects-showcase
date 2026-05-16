"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Shield, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Users, label: "Experienced Team" },
  { icon: MapPin, label: "Local Business" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:container sm:mx-auto relative z-10 py-16 sm:py-0">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Expert Construction & Handyman Services{" "}
            <span className="gradient-text">Built on Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed"
          >
            From quick repairs to major construction projects, Lupin Project Group delivers exceptional craftsmanship and reliable service throughout The GTA. Licensed, insured, and committed to your satisfaction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl gradient-primary hover:gradient-primary-hover text-white text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 shadow-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Link href="/contact">Get Your Free Quote Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl bg-white hover:bg-gray-50 text-[#4F46E5] border-2 border-white text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <Link href="tel:905-233-2100" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 905-233-2100
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg"
              >
                <badge.icon className="w-5 h-5 text-[#A78BFA] shrink-0" />
                <span className="text-white text-sm font-semibold">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
