"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, Wrench, Zap, Droplets, Wind, Square, Frame, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "construction",
    icon: Building2,
    title: "Construction Services",
    description: "Large-scale construction projects including new builds, major renovations, additions, and structural work. Professional project management from start to finish.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
  },
  {
    id: "handyman",
    icon: Wrench,
    title: "Handyman Services",
    description: "Quick, reliable repairs and maintenance for your home or business. From minor fixes to installations, we handle all your day-to-day property needs.",
    image: "/Handyman.jpg",
    category: "handyman",
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed electrical work including installations, repairs, panel upgrades, and lighting solutions for residential and commercial properties.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing Services",
    description: "Professional plumbing repairs, installations, and maintenance. From leaky faucets to complete bathroom renovations.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "handyman",
  },
  {
    id: "hvac",
    icon: Wind,
    title: "HVAC Services",
    description: "Complete heating, ventilation, and air conditioning installation, repair, and maintenance to keep your space comfortable year-round.",
    image: "/HVAC services.jpg",
    category: "construction",
  },
  {
    id: "drywall",
    icon: Square,
    title: "Drywall Services",
    description: "Expert drywall installation, repairs, finishing, and texturing for smooth, professional walls and ceilings.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "handyman",
  },
  {
    id: "framing",
    icon: Frame,
    title: "Framing Services",
    description: "Professional structural framing for new construction, additions, and major renovation projects. Building strong foundations.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 gradient-primary text-white rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-foreground text-balance"
          >
            Comprehensive Solutions for{" "}
            <span className="gradient-text">Every Need</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Whether you need major construction work or quick handyman repairs, we deliver quality results with professional service every time.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-background rounded-2xl overflow-hidden border-2 shadow-sm transition-all duration-300 relative ${
                service.category === "construction"
                  ? "border-[#3B82F6]/20 card-glow-construction"
                  : "border-[#8B5CF6]/20 card-glow-handyman"
              }`}
            >
              {/* Service Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                    service.category === "construction"
                      ? "gradient-construction"
                      : "gradient-handyman"
                  }`}
                >
                  {service.title.replace(" Services", "").toUpperCase()}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    service.id === "handyman" ? "object-top" : "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl shadow-lg ${
                      service.category === "construction"
                        ? "gradient-construction"
                        : "gradient-handyman"
                    }`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg border-2 hover:bg-accent"
                >
                  <Link href={`/services#${service.id}`} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-xl gradient-primary hover:gradient-primary-hover text-white shadow-md"
          >
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
