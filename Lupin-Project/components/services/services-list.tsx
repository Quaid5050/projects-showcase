"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, Wrench, Zap, Droplets, Wind, Square, Frame, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "construction",
    icon: Building2,
    title: "Construction Services",
    description: "Comprehensive construction services for large-scale projects including new builds, major renovations, and structural modifications. Our experienced team manages every aspect of your construction project with precision and professionalism.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
    features: [
      "New construction & home builds",
      "Major home additions & extensions",
      "Complete home renovations",
      "Commercial construction projects",
      "Structural modifications & repairs",
      "Full project management services",
    ],
  },
  {
    id: "handyman",
    icon: Wrench,
    title: "Handyman Services",
    description: "Reliable handyman services for all your repair, installation, and maintenance needs. From small fixes to larger projects, we provide skilled workmanship and prompt service for residential and commercial properties.",
    image: "/Handyman.jpg",
    category: "handyman",
    features: [
      "General repairs & maintenance",
      "Door & window installations",
      "Furniture & fixture assembly",
      "Painting & touch-up work",
      "Deck & patio repairs",
      "Property maintenance services",
    ],
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed and certified electricians providing safe, code-compliant electrical work for homes and businesses. We handle everything from simple repairs to complete electrical system installations and upgrades.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
    features: [
      "Electrical panel upgrades",
      "Complete home rewiring",
      "Indoor & outdoor lighting installation",
      "Outlet & switch installation",
      "Circuit breaker repairs & replacement",
      "Electrical safety inspections",
    ],
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing Services",
    description: "Professional plumbing solutions for all your water, drainage, and fixture needs. Our skilled plumbers deliver quality workmanship with prompt, reliable service for any plumbing challenge.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "handyman",
    features: [
      "Pipe repairs & replacement",
      "Fixture installation & upgrades",
      "Drain cleaning & unclogging",
      "Water heater installation & repair",
      "Leak detection & repair",
      "Bathroom & kitchen plumbing",
    ],
  },
  {
    id: "hvac",
    icon: Wind,
    title: "HVAC Services",
    description: "Complete heating, ventilation, and air conditioning services to keep your space comfortable year-round. We install, repair, and maintain all types of HVAC systems with expert care.",
    image: "/HVAC services.jpg",
    category: "construction",
    features: [
      "AC installation & repair",
      "Furnace installation & service",
      "Ductwork installation & repair",
      "Smart thermostat installation",
      "Preventive maintenance programs",
      "Indoor air quality solutions",
    ],
  },
  {
    id: "drywall",
    icon: Square,
    title: "Drywall Services",
    description: "Expert drywall installation, repair, and finishing services for flawless walls and ceilings. We deliver smooth, professional results for both new construction and repair projects.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "handyman",
    features: [
      "New drywall installation",
      "Drywall repair & patching",
      "Professional taping & mudding",
      "Texture application & matching",
      "Ceiling repairs & installation",
      "Water damage restoration",
    ],
  },
  {
    id: "framing",
    icon: Frame,
    title: "Framing Services",
    description: "Professional structural framing for new construction, additions, and major renovation projects. Our skilled framers build the strong, precise foundation your project needs to succeed.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
    features: [
      "Residential framing projects",
      "Commercial framing work",
      "Load-bearing wall modifications",
      "Roof framing & trusses",
      "Floor framing systems",
      "Structural repairs & reinforcement",
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                {/* Service Name Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg ${
                      service.category === "construction"
                        ? "gradient-construction"
                        : "gradient-handyman"
                    }`}
                  >
                    {service.title.replace(" Services", "").toUpperCase()}
                  </span>
                </div>
                
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500 ${
                    service.id === "handyman" ? "object-top" : "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl shadow-lg ${
                      service.category === "construction"
                        ? "gradient-construction"
                        : "gradient-handyman"
                    }`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-5 h-5 shrink-0 ${
                          service.category === "construction"
                            ? "text-[#3B82F6]"
                            : "text-[#8B5CF6]"
                        }`}
                      />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`rounded-xl text-white hover:scale-105 transition-transform shadow-lg ${
                    service.category === "construction"
                      ? "gradient-construction hover:gradient-construction-hover"
                      : "gradient-handyman hover:gradient-handyman-hover"
                  }`}
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
