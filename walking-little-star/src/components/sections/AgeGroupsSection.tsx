import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Star, BookOpen, ArrowRight } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { StarSVG } from "../common/StarSVG";

const ageGroups = [
  {
    id: "infants",
    label: "Infants",
    age: "2–12 Months",
    icon: Heart,
    color: "bg-peach",
    borderColor: "border-peach-dark",
    iconColor: "text-navy",
    description:
      "Gentle care, comforting routines, sensory discovery, and a safe, warm environment for early development and bonding.",
    highlights: ["Comfort & connection", "Sensory experiences", "Early communication", "Individual attention"],
  },
  {
    id: "toddlers",
    label: "Toddlers",
    age: "1–3 Years",
    icon: Star,
    color: "bg-sky-pale",
    borderColor: "border-sky-brand",
    iconColor: "text-sky-brand",
    description:
      "Movement, communication, imaginative play, social development, and growing independence in a supportive setting.",
    highlights: ["Language development", "Creative play", "Social skills", "Growing confidence"],
  },
  {
    id: "preschool",
    label: "Preschool Explorers",
    age: "3–5 Years",
    icon: BookOpen,
    color: "bg-navy",
    borderColor: "border-navy",
    iconColor: "text-white",
    description:
      "Early literacy, numbers, creative learning, Spanish exposure, confidence-building, and preschool preparation.",
    highlights: ["Early literacy", "Spanish exposure", "School readiness", "Creative arts"],
    dark: true,
  },
];

export const AgeGroupsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="age-groups-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-peach-light/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-pale/40 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-6">
          <SectionHeading
            id="age-groups-heading"
            title="Growing Together"
            subtitle="A nurturing environment designed for every stage of early childhood."
            centered
            className="mb-4"
          />
        </div>

        {/* Pathway illustration */}
        <div className="relative mb-12 hidden md:flex justify-center items-center" aria-hidden="true">
          <svg width="600" height="60" viewBox="0 0 600 60" fill="none" className="max-w-full">
            <path
              d="M 50 30 Q 200 10 300 30 Q 400 50 550 30"
              stroke="#fedebe"
              strokeWidth="3"
              strokeDasharray="8 6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="50" cy="30" r="8" fill="#fedebe" />
            <circle cx="300" cy="30" r="8" fill="#9fcaf4" />
            <circle cx="550" cy="30" r="8" fill="#183b65" />
          </svg>
        </div>

        {/* Age group cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ageGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                className={`rounded-4xl p-8 relative overflow-hidden ${group.dark ? "bg-navy text-white" : "bg-white shadow-card"} ${!group.dark ? `border-2 ${group.borderColor}` : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Decorative star for dark card */}
                {group.dark && (
                  <div className="absolute top-4 right-4 pointer-events-none opacity-20" aria-hidden="true">
                    <StarSVG size={40} color="#fedebe" />
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${group.color} flex items-center justify-center mb-5`}>
                  <Icon size={24} className={group.iconColor} aria-hidden="true" />
                </div>

                {/* Age badge */}
                <div className={`inline-flex items-center font-body text-xs font-700 px-3 py-1 rounded-full mb-3 ${
                  group.dark ? "bg-white/15 text-sky-light" : "bg-peach text-navy"
                }`}>
                  {group.age}
                </div>

                <h3 className={`font-display font-semibold text-2xl mb-3 ${group.dark ? "text-white" : "text-navy"}`}>
                  {group.label}
                </h3>

                <p className={`font-body text-base leading-relaxed mb-5 ${group.dark ? "text-sky-light" : "text-text-muted"}`}>
                  {group.description}
                </p>

                <ul className="space-y-2 mb-6" role="list">
                  {group.highlights.map((item) => (
                    <li key={item} className={`flex items-center gap-2 font-body text-sm ${group.dark ? "text-sky-light" : "text-text-dark"}`}>
                      <Star size={11} fill={group.dark ? "#fedebe" : "#183b65"} className={group.dark ? "text-peach flex-shrink-0" : "text-navy flex-shrink-0"} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy font-body font-700 text-base hover:text-sky-brand transition-colors focus-visible:ring-2 focus-visible:ring-navy rounded-md"
          >
            Explore all programs
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
