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
  title: "Restaurant Types We Serve | Merchant Orders",
  description: "Merchant Orders supports pizzerias, cafes, bakeries, coffee shops, food trucks, ghost kitchens, fast casual restaurants, and multi-location restaurant brands.",
  alternates: { canonical: "https://www.merchantorders.io/industries" },
  openGraph: {
    url: "https://www.merchantorders.io/industries",
    title: "Restaurant Types We Serve | Merchant Orders",
    description: "Merchant Orders supports pizzerias, cafes, bakeries, coffee shops, food trucks, ghost kitchens, fast casual restaurants, and multi-location restaurant brands.",
  },
}

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img 
            src="/images/hero-industries.webp" 
            alt="Various restaurant types" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[150px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Built for Every Business Model
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              We understand that a coffee shop's needs are different from a pizzeria's. That's why our platform adapts to how you do business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <IndustriesGrid />

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Industry Use Cases
            </h2>
            <p className="text-lg text-slate-600">
              See how different types of restaurants leverage Merchant Orders.
            </p>
          </AnimatedSection>

          <div className="space-y-16 max-w-5xl mx-auto">
            {industryUseCases.map((industry, index) => (
              <AnimatedSection key={index} animation="fade-up" className="scroll-mt-32" id={industry.id}>
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <industry.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry.title}</h3>
                      <p className="text-slate-600 text-lg mb-6">{industry.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {industry.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{feature}</span>
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
