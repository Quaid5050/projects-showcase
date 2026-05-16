import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

const Services = () => (
  <>
    <title>Services — Hands That Heal</title>
    <meta name="description" content="Laser hair removal, organic teeth whitening, body contouring, Brazilian laser, and localized cryotherapy. Safe for all skin tones in Hamilton, ON." />

    {/* Hero */}
    <section className="relative pt-28 sm:pt-36 pb-6 sm:pb-10 overflow-hidden">
      <GradientBlobs />
      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Services</p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Step Into Luxury at Our{" "}
            <span className="italic text-gradient">Premier Aesthetic Haven</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We work with all skin types, with strong expertise in male and female Brazilians and treat darker skin tones safely and effectively. Every detail is considered, so you walk out feeling like the best version of yourself.
          </p>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="py-4 bg-deep-gradient mb-6">
      <div className="container-luxe">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "14+", label: "Years Experience" },
            { value: "5", label: "Premium Services" },
            { value: "1000+", label: "Happy Clients" },
            { value: "0", label: "Side Effects" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl md:text-5xl text-primary-glow">{s.value}</p>
              <p className="mt-1 text-xs text-primary-foreground/70 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service list */}
    <section className="pb-10">
      <div className="container-luxe space-y-6">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/services/${s.slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className={`aspect-[4/3] md:aspect-auto overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 sm:p-10 md:p-14 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">0{i + 1}</span>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm italic text-muted-foreground">{s.tagline.split("\n")[0]}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
                <div className="inline-flex items-center gap-2 mt-8 text-primary font-medium text-sm">
                  Read more <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
