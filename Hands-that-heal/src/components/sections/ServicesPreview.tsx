import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

export const ServicesPreview = () => (
  <section className="relative py-8 sm:py-12 overflow-hidden w-full">
    <GradientBlobs />
    <div className="container-luxe relative min-w-0">
      <div className="max-w-2xl mb-8 sm:mb-12 min-w-0">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Services</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
          Step Into Luxury at Our{" "}
          <span className="italic text-gradient">Premier Aesthetic Haven</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We work with all skin types, with strong expertise in male and female Brazilians and treat darker skin tones safely and effectively. Every detail is considered, so you walk out feeling like the best version of yourself.
        </p>
      </div>

      <div className="grid min-w-0 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="h-full min-w-0"
          >
            <Link
              to={`/services/${s.slug}`}
              className="group flex min-w-0 flex-col h-full bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative shrink-0">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <span className="h-10 w-10 rounded-full bg-secondary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
