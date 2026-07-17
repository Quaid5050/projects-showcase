import React from "react";
import { motion } from "framer-motion";
import { Languages, Star } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { SmartImage } from "../common/SmartImage";
import { images } from "../../data/images";
import { spanishSection } from "../../data/siteContent";

const wordCards = [
  { spanish: "Hola", english: "Hello" },
  { spanish: "Estrella", english: "Star" },
  { spanish: "Amigos", english: "Friends" },
  { spanish: "Colores", english: "Colors" },
  { spanish: "Números", english: "Numbers" },
  { spanish: "Cantar", english: "To Sing" },
];

export const SpanishSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="spanish-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center">
                <Languages size={20} className="text-navy" aria-hidden="true" />
              </div>
              <span className="font-body font-700 text-text-muted text-sm uppercase tracking-wider">
                Enrichment Activity
              </span>
            </div>

            <SectionHeading
              id="spanish-heading"
              title={spanishSection.heading}
              className="mb-5"
            />

            <motion.p
              className="font-body text-text-muted text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {spanishSection.body}
            </motion.p>

            <motion.p
              className="font-body text-text-muted text-sm italic mb-8 border-l-4 border-peach pl-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {spanishSection.disclaimer}
            </motion.p>

            {/* Word cards */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              role="list"
              aria-label="Sample Spanish vocabulary words"
            >
              {wordCards.map((card, i) => (
                <motion.div
                  key={card.spanish}
                  className="bg-peach-light rounded-2xl p-3 text-center shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                  viewport={{ once: true }}
                  role="listitem"
                >
                  <p className="font-display font-semibold text-navy text-lg leading-tight">
                    {card.spanish}
                  </p>
                  <p className="font-body text-text-muted text-xs mt-0.5">{card.english}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SmartImage
              src={images.home.spanish.src}
              alt={images.home.spanish.alt}
              width={images.home.spanish.width}
              height={images.home.spanish.height}
              rounded="rounded-4xl"
              animate
            />

            {/* Floating speech bubble */}
            <motion.div
              className="absolute -top-6 -left-4 bg-white rounded-2xl px-4 py-3 shadow-card flex items-center gap-2.5"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl" aria-hidden="true">🌟</span>
              <div>
                <p className="font-display font-semibold text-navy text-base">¡Hola, amigos!</p>
                <p className="font-body text-text-muted text-xs">Hello, friends!</p>
              </div>
            </motion.div>

            {/* Star decoration */}
            <div className="absolute -bottom-5 -right-5 pointer-events-none" aria-hidden="true">
              <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center animate-float">
                <Star size={20} fill="#183b65" className="text-navy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
