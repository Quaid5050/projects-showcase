import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import slimming  from "@/assets/cryo-slimming.png";
import frotox    from "@/assets/frotox-facial-treatment.png";
import skinCond  from "@/assets/skin-conditions.png";

const cards = [
  {
    image: slimming,
    title: "Cryo Slimming",
    desc: "Targeted fat reduction using controlled cold to permanently eliminate fat cells — no surgery, no downtime.",
    link: "/services/cryo-slimming",
  },
  {
    image: frotox,
    title: "Frotox Facial",
    desc: "A needle-free alternative to Botox that reduces fine lines and tightens skin using SubZero cryotherapy.",
    link: "/services/frotox",
  },
  {
    image: skinCond,
    title: "Skin Conditions",
    desc: "Reduces inflammation, redness, and uneven texture using precise cold application — naturally and without harsh chemicals.",
    link: "/services/skin-conditions",
  },
];

export const AestheticCryoSection = () => (
  <section className="py-10 sm:py-14 overflow-hidden relative">
    <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />

    <div className="container-luxe relative">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="inline-flex h-12 w-12 rounded-2xl bg-deep-gradient items-center justify-center mb-4 shadow-elegant mx-auto">
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </span>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Aesthetic Cryotherapy</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Body Sculpting &{" "}
          <span className="italic text-gradient">Skin Rejuvenation</span>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Non-invasive treatments for visible aesthetic improvements — from targeted fat reduction to natural skin tightening, with zero downtime.
        </p>
      </motion.div>

      {/* 3 cards */}
      <div className="flex gap-5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.link}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-[260px] sm:w-auto"
          >
            <Link
              to={c.link}
              className="group flex flex-col bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 h-full"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
