import React from "react"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { IndustriesGrid } from "@/components/sections/IndustriesGrid"
import { CheckCircle2 } from "lucide-react"
import {
  Pizza,
  Coffee,
  CupSoda,
  Truck,
  Map,
  UtensilsCrossed,
  Ghost,
  Store,
  ShoppingCart,
} from "lucide-react"

const industryUseCases = [
  {
    id: "pizzerias",
    title: "Pizzerias",
    description: "Complex modifiers, half-and-half pricing, and dedicated delivery zones made simple.",
    icon: Pizza,
    features: [
      "Half-and-half topping pricing built in",
      "Custom delivery zone mapping",
      "Size & crust modifier logic",
      "Real-time order tracking for customers",
    ],
  },
  {
    id: "cafes-bakeries",
    title: "Cafes & Bakeries",
    description: "Scheduled pickups, coffee customizations, and loyalty points for regular customers.",
    icon: Coffee,
    features: [
      "Scheduled pickup time slots",
      "Loyalty rewards for repeat visitors",
      "Seasonal menu management",
      "Pre-order for fresh daily items",
    ],
  },
  {
    id: "coffee-shops",
    title: "Coffee Shops",
    description: "Fast mobile ordering so customers can skip the morning line.",
    icon: CupSoda,
    features: [
      "Mobile-first ordering experience",
      "Milk, syrup & size customizations",
      "Queue management & ready notifications",
      "Saved favorite orders for regulars",
    ],
  },
  {
    id: "food-trucks",
    title: "Food Trucks",
    description: "Location-independent ordering that moves where you move.",
    icon: Truck,
    features: [
      "Live location updates for customers",
      "QR code ordering at the window",
      "Daily menu changes in seconds",
      "Offline-capable order management",
    ],
  },
  {
    id: "multi-location",
    title: "Multi-Location Restaurants",
    description: "Unified menus, location routing, and enterprise-level reporting.",
    icon: Map,
    features: [
      "Centralized menu management across all locations",
      "Per-location pricing & availability overrides",
      "Consolidated sales & performance reporting",
      "Automatic order routing to nearest branch",
    ],
  },
  {
    id: "fast-casual",
    title: "Fast Casual Restaurants",
    description: "High-volume throughput with seamless kitchen integrations.",
    icon: UtensilsCrossed,
    features: [
      "Kitchen display system (KDS) integration",
      "Rapid checkout with saved payment methods",
      "Peak-hour order throttling controls",
      "Upsell prompts at checkout",
    ],
  },
  {
    id: "ghost-kitchens",
    title: "Ghost Kitchens",
    description: "Digital-first brands thriving on streamlined delivery operations.",
    icon: Ghost,
    features: [
      "Multi-brand management from one dashboard",
      "Direct delivery dispatch without third-party fees",
      "Virtual brand storefront builder",
      "Delivery radius & fee configuration",
    ],
  },
  {
    id: "new-openings",
    title: "New Restaurant Openings",
    description: "Launch with a modern tech stack from day one.",
    icon: Store,
    features: [
      "Branded website & ordering page included",
      "Onboarding support & menu setup assistance",
      "Built-in marketing tools to drive first orders",
      "No long-term contracts — scale as you grow",
    ],
  },
  {
    id: "grocery",
    title: "Grocery & Specialty",
    description: "Inventory management and scheduled delivery for specialty items.",
    icon: ShoppingCart,
    features: [
      "Real-time inventory sync & low-stock alerts",
      "Scheduled delivery windows for perishables",
      "Weight-based & variable pricing support",
      "Subscription & recurring order options",
    ],
  },
]

export const metadata: Metadata = {
  title: "Restaurant Types We Serve | Merchant Orders™",
  description: "Merchant Orders supports pizzerias, cafes, bakeries, coffee shops, food trucks, ghost kitchens, fast casual restaurants, and multi-location restaurant brands.",
  alternates: { canonical: "https://www.merchantorders.io/industries" },
  openGraph: {
    url: "https://www.merchantorders.io/industries",
    title: "Restaurant Types We Serve | Merchant Orders™",
    description: "Merchant Orders supports pizzerias, cafes, bakeries, coffee shops, food trucks, ghost kitchens, fast casual restaurants, and multi-location restaurant brands.",
  },
}

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#020509] text-white relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/images/hero-industries.webp"
            alt="Various restaurant types"
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-600/8 blur-[150px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020509] to-transparent" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-500/70 mb-4">
              Industries
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
              Built for Every
              <br />
              <span className="text-amber-400 glow-gold">Business Model</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10">
              A coffee shop's needs differ from a pizzeria's. Our platform adapts to how you do business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <IndustriesGrid />

      <section className="py-24 bg-[#040810] border-t border-white/5 relative">
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-amber-500/3 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-500/70 mb-4">
              Deep Dives
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Industry <span className="text-amber-400 glow-gold">Use Cases</span>
            </h2>
            <p className="text-lg text-slate-400">
              See how different types of restaurants leverage Merchant Orders.
            </p>
          </AnimatedSection>

          <div className="space-y-8 max-w-5xl mx-auto">
            {industryUseCases.map((industry, index) => (
              <AnimatedSection key={index} animation="fade-up" className="scroll-mt-32" id={industry.id}>
                <div className="rounded-2xl border border-white/6 bg-white/2 p-8 md:p-10 hover:border-amber-500/15 hover:bg-white/3 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-all duration-300">
                      <industry.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-3">{industry.title}</h3>
                      <p className="text-slate-400 text-base mb-6">{industry.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {industry.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                            <span className="text-slate-300 font-medium text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
