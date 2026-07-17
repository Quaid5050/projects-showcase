import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Zap, ShieldCheck, Sparkles } from "lucide-react";

import cryoAesthetic from "@/assets/cryo-aesthetic.jpg";
import cryoOrtho     from "@/assets/cryo-ortho.jpg";
import cryoSports    from "@/assets/cryo-sports.jpg";
import cryoPostsurgery from "@/assets/cryo-postsurgery.jpg";
import cryo1 from "@/assets/cryo-1.jpg";
import cryo2 from "@/assets/cryo-2.jpg";
import cryo3 from "@/assets/cryo-3.jpg";

const cards = [
  {
    image: cryoAesthetic,
    title: "Aesthetic Cryotherapy",
    desc: "Non-invasive body sculpting, Frotox & skin rejuvenation with zero downtime.",
    link: "/services/cryo-aesthetic",
  },
  {
    image: cryoOrtho,
    title: "Orthopaedic Cryotherapy",
    desc: "Targeted cold therapy for joint pain relief, injury recovery & post-op support.",
    link: "/services/cryo-ortho",
  },
  {
    image: cryoSports,
    title: "Sports Cryotherapy",
    desc: "Accelerate muscle recovery, reduce soreness & enhance athletic performance.",
    link: "/services/cryo-sports",
  },
  {
    image: cryoPostsurgery,
    title: "Post-Surgery Cryotherapy",
    desc: "Gentle cold therapy to reduce swelling, relieve pain & support healing.",
    link: "/services/cryo-postsurgery",
  },
];

const badges = [
  { icon: ShieldCheck, text: "Pain-free & non-invasive" },
  { icon: Zap,         text: "No needles, no downtime" },
  { icon: Snowflake,   text: "Hamilton's only SubZero provider" },
];

export const CryotherapySection = () => (
  <section className="py-12 sm:py-20 overflow-hidden relative">
    <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />

    <div className="container-luxe relative">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="inline-flex h-14 w-14 rounded-2xl bg-deep-gradient items-center justify-center mb-5 shadow-elegant mx-auto">
          <Snowflake className="h-7 w-7 text-primary-foreground" />
        </span>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Advanced Cold Therapy</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Localized <span className="italic text-gradient">Cryotherapy</span>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
          Hamilton's only provider of SubZero Cryotherapy. Targeted cold therapy for aesthetic results, pain relief, athletic recovery, and post-surgical healing.
        </p>

        {/* 3 images */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          {[cryo1, cryo2, cryo3].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-soft group h-36 sm:h-44"
            >
              <img
                src={src}
                alt="Cryotherapy treatment"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {badges.map((b) => (
            <div key={b.text} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-soft">
              <b.icon className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{b.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 4 cards ── */}
      <div className="flex gap-5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.link}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex-shrink-0 w-[220px] sm:w-auto"
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom CTA strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10 relative overflow-hidden rounded-[2rem] bg-deep-gradient p-6 sm:p-10 shadow-elegant flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="blob bg-primary-glow h-[300px] w-[300px] -top-20 -right-10 opacity-25" />
        <div className="blob bg-accent h-[200px] w-[200px] -bottom-16 -left-10 opacity-20" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-2">Hamilton's Only Provider</p>
          <h3 className="font-display text-2xl sm:text-3xl text-primary-foreground leading-[1.1]">
            Experience SubZero Cryotherapy — <span className="italic">First in Hamilton</span>
          </h3>
          <p className="mt-2 text-primary-foreground/75 text-sm max-w-xl">
            From body sculpting to sports recovery, our SubZero technology delivers clinical results with zero downtime.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-3 shrink-0">
          <Link
            to="/services/localized-cryotherapy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-foreground font-medium text-sm hover:bg-accent/90 transition-colors shadow-soft"
          >
            Explore Cryotherapy <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white font-medium text-sm hover:bg-white/25 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </motion.div>

    </div>
  </section>
);
