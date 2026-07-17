import React from "react";
import { motion } from "framer-motion";
import { Apple, Star } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { SmartImage } from "../common/SmartImage";
import { images } from "../../data/images";
import { mealsSection } from "../../data/siteContent";

const mealHighlights = [
  "Nutritious, balanced meals included",
  "Healthy snacks throughout the day",
  "Supportive of children's energy and focus",
  "Part of a caring daily routine",
];

export const MealsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-warm" aria-labelledby="meals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SmartImage
              src={images.home.meals.src}
              alt={images.home.meals.alt}
              width={images.home.meals.width}
              height={images.home.meals.height}
              rounded="rounded-4xl"
              animate
            />

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-4 bg-navy text-white px-5 py-3 rounded-2xl shadow-hover flex items-center gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              <Apple size={18} className="text-peach" aria-hidden="true" />
              <div>
                <p className="font-display font-semibold text-white text-base">Meals Included</p>
                <p className="font-body text-sky-light text-xs">Part of every day</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center">
                <Apple size={20} className="text-navy" aria-hidden="true" />
              </div>
              <span className="font-body font-700 text-text-muted text-sm uppercase tracking-wider">
                Nutrition & Wellness
              </span>
            </div>

            <SectionHeading
              id="meals-heading"
              title={mealsSection.heading}
              className="mb-5"
            />

            <motion.p
              className="font-body text-text-muted text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {mealsSection.body}
            </motion.p>

            <motion.ul
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              role="list"
            >
              {mealHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-peach rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={11} fill="#183b65" className="text-navy" aria-hidden="true" />
                  </div>
                  <span className="font-body text-text-dark text-base">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              className="font-body text-text-muted text-sm italic border-l-4 border-peach pl-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {mealsSection.disclaimer}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
