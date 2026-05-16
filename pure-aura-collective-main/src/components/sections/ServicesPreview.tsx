import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

export const ServicesPreview = () => (
  <section className="relative py-32 overflow-hidden">
    <GradientBlobs />
    <div className="container-luxe relative">
      <div className="max-w-2xl mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Services</p>
        <h2 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
          Treatments designed<br /><span className="italic text-gradient">for visible change.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          From precision laser hair removal to sculpting with body contouring and confidence-boosting organic teeth whitening, every treatment is designed to deliver visible change — not just a temporary glow. We work with all skin types, with strong expertise in male and female Brazilians, and treat darker skin tones safely and effectively.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Link
              to={`/services/${s.slug}`}
              className="group block bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <span className="h-10 w-10 rounded-full bg-secondary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
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
