"use client"

import { motion } from "framer-motion"
import { Award, Clock, DollarSign, ThumbsUp, Users } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Our skilled team brings years of expertise to every project, ensuring quality results.",
  },
  {
    icon: Award,
    title: "High-Quality Workmanship",
    description: "We take pride in delivering exceptional craftsmanship that stands the test of time.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and consistently deliver projects within agreed timelines.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs or surprises. Get honest, upfront quotes for all our services.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority. We work until you're completely happy.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
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
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional construction team at work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-6 gradient-primary text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
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
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6"
            >
              Excellence in Every Project,{" "}
              <span className="gradient-text">Trust in Every Detail</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              At Lupin Project Group, we don't just complete projects—we build lasting relationships through exceptional craftsmanship, transparent communication, and unwavering commitment to your satisfaction.
            </motion.p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-glow"
                >
                  <div className="flex items-center justify-center w-10 h-10 gradient-primary rounded-lg shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
