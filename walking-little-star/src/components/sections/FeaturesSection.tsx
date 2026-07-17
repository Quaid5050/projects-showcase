import React from "react";
import { motion } from "framer-motion";
import { Shield, Star, Languages, Palette, UtensilsCrossed, Users } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";

const features = [
  {
    id: "safe",
    icon: Shield,
    title: "Safe & Loving Environment",
    description:
      "A caring space where children feel comfortable, protected, and valued every single day.",
    color: "bg-peach",
    iconColor: "text-navy",
  },
  {
    id: "learning",
    icon: Star,
    title: "Early Learning Experiences",
    description:
      "Age-appropriate activities that encourage curiosity and prepare children for their next stage of development.",
    color: "bg-sky-pale",
    iconColor: "text-sky-brand",
  },
  {
    id: "spanish",
    icon: Languages,
    title: "Spanish Learning",
    description:
      "Fun and natural Spanish language exposure through everyday activities, songs, stories, and play.",
    color: "bg-peach-light",
    iconColor: "text-navy",
  },
  {
    id: "creative",
    icon: Palette,
    title: "Creative Activities",
    description:
      "Art, music, stories, sensory play, movement, and imaginative exploration that spark joy and growth.",
    color: "bg-sky-pale",
    iconColor: "text-sky-brand",
  },
  {
    id: "meals",
    icon: UtensilsCrossed,
    title: "Healthy Meals & Snacks",
    description:
      "Thoughtfully prepared food that supports healthy routines, energy, and well-being throughout the day.",
    color: "bg-peach",
    iconColor: "text-navy",
  },
  {
    id: "attention",
    icon: Users,
    title: "Personal Attention",
    description:
      "A warm childcare environment focused on each child's individual needs, pace, and personality.",
    color: "bg-peach-light",
    iconColor: "text-navy",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-warm" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="features-heading"
          title="Why Families Choose Us"
          subtitle="Everything we do is designed to help your child feel safe, loved, and ready to learn."
          centered
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  <Icon size={24} className={feature.iconColor} aria-hidden="true" />
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <h3 className="font-display font-semibold text-navy text-xl leading-snug">
                    {feature.title}
                  </h3>
                </div>
                <p className="font-body text-text-muted text-base leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 w-8 h-0.5 rounded-full bg-peach group-hover:w-16 transition-all duration-400" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
