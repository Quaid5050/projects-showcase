"use client";

import { motion } from "framer-motion";
import { Heart, Baby, Users, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cards = [
  {
    icon: Heart,
    title: "Women's Wellness",
    description: "Thoughtful homeopathic support tailored to women's unique health needs and life stages.",
    color: "#F7A8C4",
    bg: "#FFE8F0",
  },
  {
    icon: Baby,
    title: "Children's Health Support",
    description: "Gentle, safe wellness guidance for children using individualized homeopathic approaches.",
    color: "#7A1F3D",
    bg: "#FFF0F5",
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Comprehensive homeopathic guidance for the whole family's everyday wellness journey.",
    color: "#F6C85F",
    bg: "#FFF8EF",
  },
  {
    icon: Leaf,
    title: "Natural Wellness Guidance",
    description: "Explore natural, gentle wellness support aligned with your body's own healing processes.",
    color: "#7A1F3D",
    bg: "#FFE8F0",
  },
];

export default function WelcomeSection() {
  return (
    <section className="section-padding" style={{ background: "#FFF8EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            label="Welcome"
            title="Welcome to Moon Homeopathy"
            subtitle="Moon Homeopathy offers warm, personalized homeopathic support for women, children, and families with a gentle and caring approach."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(122,31,61,0.12)" }}
                  transition={{ duration: 0.3 }}
                  className="p-7 rounded-3xl h-full flex flex-col"
                  style={{
                    background: card.bg,
                    border: "1px solid rgba(247,168,196,0.2)",
                    boxShadow: "0 4px 20px rgba(122,31,61,0.06)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                    style={{
                      background: `${card.color}20`,
                      border: `1px solid ${card.color}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <h3
                    className="text-lg font-medium mb-3 leading-snug"
                    style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    {card.description}
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
