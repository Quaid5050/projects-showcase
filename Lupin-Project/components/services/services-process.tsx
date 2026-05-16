"use client"

import { motion } from "framer-motion"
import { Phone, FileText, Hammer, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "1. Contact Us",
    description: "Reach out to discuss your project needs. We're available by phone, email, or through our contact form.",
  },
  {
    icon: FileText,
    title: "2. Free Consultation",
    description: "We'll assess your project, discuss your vision, and provide a detailed, transparent quote.",
  },
  {
    icon: Hammer,
    title: "3. Project Execution",
    description: "Our skilled team gets to work, keeping you informed every step of the way.",
  },
  {
    icon: CheckCircle,
    title: "4. Quality Delivery",
    description: "We complete your project to the highest standards and ensure your complete satisfaction.",
  },
]

export function ServicesProcess() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-foreground text-balance"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Our streamlined process ensures a smooth experience from start to finish.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex"
            >
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="bg-card p-6 lg:p-8 rounded-2xl border border-border shadow-sm relative z-10 flex flex-col w-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 shrink-0">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
