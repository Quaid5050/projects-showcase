"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Shield, Building } from "lucide-react"

const highlights = [
  { icon: MapPin, label: "Local Business", value: "GTA-Based" },
  { icon: Users, label: "Team Size", value: "15+ Professionals" },
  { icon: Shield, label: "Licensed", value: "Fully Insured" },
  { icon: Building, label: "Experience", value: "15+ Years" },
]

export function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Lupin Project Group professional team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-6 gradient-primary text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm text-white/80">Years of Service</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 gradient-primary text-white rounded-full text-sm font-semibold mb-4"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6"
            >
              Your Trusted Construction & Handyman Partner in the GTA
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                Lupin Project Group is a trusted construction and handyman service provider based in the GTA. With over 15 years of experience, we have built our reputation on delivering quality craftsmanship, reliable service, and exceptional customer satisfaction.
              </p>
              <p>
                Our team of skilled professionals is dedicated to handling both residential and commercial projects with the same level of care and attention to detail. From small repairs to large-scale renovations, we approach every job with professionalism and expertise.
              </p>
              <p>
                As a GTA-based business, we take pride in serving our community and building lasting relationships with our clients. We understand the importance of trust when inviting someone into your home or business, which is why we prioritize transparency, communication, and respect in everything we do.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-muted p-6 rounded-2xl text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-foreground">{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
