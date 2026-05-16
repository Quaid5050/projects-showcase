"use client"

import { motion } from "framer-motion"
import { Award, Heart, Handshake, Target, Shield, Clock } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality. Every project receives our full attention and expertise to deliver outstanding results.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We listen to your needs and work tirelessly to exceed your expectations.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Honesty and transparency guide everything we do. No hidden costs, no surprises - just straightforward service.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "When we make a commitment, we keep it. You can count on us to show up on time and deliver as promised.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "We maintain the highest safety standards on every job site to protect our team and your property.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "We respect your time and work efficiently to complete projects within agreed timelines without sacrificing quality.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 gradient-primary text-white rounded-full text-sm font-semibold mb-4"
          >
            Our Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-foreground text-balance"
          >
            What Drives Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Our core values define who we are and how we approach every project.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 lg:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 gradient-primary rounded-xl mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
