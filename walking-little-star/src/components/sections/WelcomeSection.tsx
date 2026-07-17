import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { welcomeSection } from "../../data/siteContent";
import { images } from "../../data/images";
import { SmartImage } from "../common/SmartImage";
import { SectionHeading } from "../common/SectionHeading";
import { StarSVG, CurvedPathSVG } from "../common/StarSVG";

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-14 lg:py-24 bg-cream-warm overflow-hidden" aria-labelledby="welcome-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image collage */}
          <motion.div
            className="relative px-4 sm:px-8 lg:px-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Main image */}
            <div className="relative z-10">
              <SmartImage
                src={images.home.welcome1.src}
                alt={images.home.welcome1.alt}
                width={images.home.welcome1.width}
                height={images.home.welcome1.height}
                rounded="rounded-4xl"
                animate
              />
            </div>

            {/* Top-right overlay image — hidden on very small screens */}
            <motion.div
              className="absolute -top-4 right-0 sm:-right-2 w-28 sm:w-36 z-20 shadow-card rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SmartImage
                src={images.home.welcome2.src}
                alt={images.home.welcome2.alt}
                width={images.home.welcome2.width}
                height={images.home.welcome2.height}
                rounded="rounded-3xl"
              />
            </motion.div>

            {/* Bottom-right overlay image */}
            <motion.div
              className="absolute -bottom-4 right-0 sm:-right-2 w-28 sm:w-36 z-20 shadow-card rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SmartImage
                src={images.home.welcome3.src}
                alt={images.home.welcome3.alt}
                width={images.home.welcome3.width}
                height={images.home.welcome3.height}
                rounded="rounded-3xl"
              />
            </motion.div>

            {/* Floating label */}
            <motion.div
              className="absolute bottom-8 left-2 sm:left-4 z-30 bg-navy text-white font-body font-700 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-hover flex items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <Star size={11} fill="white" />
              {welcomeSection.floatingLabel}
            </motion.div>

            {/* Decorative stars */}
            <div className="absolute -top-6 -left-2 pointer-events-none" aria-hidden="true">
              <StarSVG size={28} color="#fedebe" className="animate-twinkle opacity-70" />
            </div>
            <div className="absolute -bottom-6 left-1/3 pointer-events-none hidden sm:block" aria-hidden="true">
              <CurvedPathSVG width={180} height={50} color="#fedebe" />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="mt-8 sm:mt-4 lg:mt-0">
            <SectionHeading id="welcome-heading" title={welcomeSection.heading} className="mb-5" />
            <motion.p
              className="font-body text-text-muted text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {welcomeSection.body}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { label: "Safe Environment", icon: "🛡️" },
                { label: "Early Learning", icon: "📚" },
                { label: "Spanish Activities", icon: "🌟" },
                { label: "Healthy Meals", icon: "🍎" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-2xl px-3 sm:px-4 py-3 shadow-soft">
                  <span className="text-lg sm:text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <span className="font-body font-700 text-navy text-sm leading-tight">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
