import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { SmartImage } from "../common/SmartImage";
import { images } from "../../data/images";

const rhythmItems = [
  {
    time: "Morning",
    title: "Welcome & Morning Connection",
    description: "Warm greetings, settling in, and morning circle time to start the day with energy.",
    image: images.home.day1,
    color: "bg-peach",
  },
  {
    time: "Mid-Morning",
    title: "Learning Through Play",
    description: "Age-appropriate activities, hands-on exploration, and discovery-based learning.",
    image: images.home.day2,
    color: "bg-sky-pale",
  },
  {
    time: "Late Morning",
    title: "Creative Activities",
    description: "Art, music, sensory play, and imaginative exploration that sparks creativity.",
    image: images.home.day3,
    color: "bg-peach-light",
  },
  {
    time: "Late Morning",
    title: "Spanish Learning",
    description: "Fun songs, familiar words, and stories in Spanish as part of the daily flow.",
    image: images.home.day4,
    color: "bg-sky-pale",
  },
  {
    time: "Midday",
    title: "Healthy Meals & Snacks",
    description: "Nutritious, balanced meals served with care to support growing minds and bodies.",
    image: images.home.day5,
    color: "bg-peach",
  },
  {
    time: "Afternoon",
    title: "Rest, Movement & Pickup",
    description: "Quiet rest time, outdoor activities, afternoon play, and warm family reunions.",
    image: images.home.day6,
    color: "bg-sky-pale",
  },
];

export const DailyRhythmSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-warm overflow-hidden" aria-labelledby="daily-rhythm-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="daily-rhythm-heading"
          title="A Day Filled With Discovery"
          subtitle="Every day is thoughtfully crafted to balance learning, play, rest, and connection."
          centered
          className="mb-4"
        />

        <motion.p
          className="text-center font-body text-text-muted text-sm mb-12 max-w-xl mx-auto italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sample schedule only — daily activities vary based on children's ages, needs, and interests.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rhythmItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <SmartImage
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  rounded="rounded-none"
                  animate
                  className="h-44 !pb-0"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center`}>
                    <Star size={10} fill="#183b65" className="text-navy" aria-hidden="true" />
                  </div>
                  <span className="font-body text-xs font-700 text-text-muted uppercase tracking-wider">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-1.5">
                  {item.title}
                </h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
