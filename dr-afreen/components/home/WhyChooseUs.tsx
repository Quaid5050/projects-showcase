"use client";

import { motion } from "framer-motion";
import { Heart, Users, Star, MessageCircle, MapPin, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reasons = [
  {
    icon: Heart,
    title: "Warm & Approachable Care",
    description: "Dr. Afreen creates a safe, welcoming space where every concern is heard with compassion and attention.",
  },
  {
    icon: Users,
    title: "Women & Children Focused",
    description: "Specialized focus on women's wellness and children's health with gentle, age-appropriate approaches.",
  },
  {
    icon: Star,
    title: "Personalized Guidance",
    description: "Every consultation is tailored to your individual health history, lifestyle, and wellness goals.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Based Booking",
    description: "Simple, direct communication through WhatsApp — no complicated booking systems or long waits.",
  },
  {
    icon: MapPin,
    title: "Toronto-Based Support",
    description: "Locally serving the Toronto community with a deep understanding of local wellness needs.",
  },
  {
    icon: Leaf,
    title: "Gentle Wellness Approach",
    description: "Homeopathic support that works with your body naturally, gently, and respectfully.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #4B1025 0%, #7A1F3D 100%)" }}
    >
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-5 border-2"
        style={{ borderColor: "#F7A8C4" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-5 border-2"
        style={{ borderColor: "#F6C85F" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <SectionHeading
            label="Why Moon Homeopathy"
            title="Why Choose Moon Homeopathy"
            subtitle="A warm, personalized approach to wellness — focused on you, not just your symptoms."
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -4, background: "rgba(255,240,245,0.12)" }}
                  transition={{ duration: 0.3 }}
                  className="p-7 rounded-3xl h-full flex flex-col"
                  style={{
                    background: "rgba(255,240,245,0.07)",
                    border: "1px solid rgba(247,168,196,0.2)",
                    minHeight: "180px",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: "rgba(246,200,95,0.15)", border: "1px solid rgba(246,200,95,0.3)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#F6C85F" }} />
                  </div>
                  <h3
                    className="text-lg font-medium mb-3 leading-snug"
                    style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#FFFCF8" }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(255,240,245,0.7)", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    {reason.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
