import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

// Short one-line descriptions for each service card
const shortDesc: Record<string, string> = {
  "localized-cryotherapy":
    "Supports skin rejuvenation, reduces puffiness, and helps relieve pain and inflammation for better recovery and wellness.",
  "laser-hair-removal":
    "Pain-free & non-invasive laser hair removal. No discomfort, no downtime. Quick sessions with long-lasting smooth skin.",
  "organic-teeth-whitening":
    "Gentle organic whitening. No downtime, no harsh chemicals. Quick, visible glow results.",
  "body-contouring":
    "Non-invasive body contouring. No surgery, no downtime. Quick sessions, visible results.",
  "brazilian-laser":
    "Clean, hygienic, and comfortable laser service with full care and privacy.",
};

export const ServicesPreview = () => (
  <section className="relative py-8 sm:py-12 overflow-hidden w-full">
    <GradientBlobs />
    <div className="container-luxe relative min-w-0">

      {/* Header */}
      <div className="max-w-2xl mb-8 sm:mb-10 min-w-0">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Services</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
          Step Into Luxury at Our{" "}
          <span className="italic text-gradient">Premier Aesthetic Haven</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We work with all skin types, with strong expertise in male and female Brazilians and treat darker skin tones safely and effectively. Every detail is considered, so you walk out feeling like the best version of yourself.
        </p>
      </div>

      {/* Single-row cards — horizontally scrollable on mobile */}
      <div className="flex gap-5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-5">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex-shrink-0 w-[220px] sm:w-auto"
          >
            <Link
              to={`/services/${s.slug}`}
              className="group flex flex-col bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 h-full"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {shortDesc[s.slug] ?? s.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
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
