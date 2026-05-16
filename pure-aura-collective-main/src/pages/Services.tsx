import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

const Services = () => (
  <>
    <title>Services — Lumière Aesthetic</title>
    <meta name="description" content="Explore signature treatments: laser hair removal, organic teeth whitening, body contouring, Brazilian laser, and localized cryotherapy." />
    <section className="relative pt-40 pb-20 overflow-hidden">
      <GradientBlobs />
      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Treatments</p>
          <h1 className="font-display text-6xl md:text-7xl leading-[1.05]">
            Every service, <span className="italic text-gradient">a quiet ritual</span> of care.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Five signature treatments. Endless attention to detail. Each performed in private, calm spaces with medical-grade technology.
          </p>
        </div>
      </div>
    </section>

    <section className="pb-32">
      <div className="container-luxe space-y-8">
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
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">0{i + 1}</span>
                <h3 className="font-display text-4xl md:text-5xl mt-4 group-hover:text-primary transition-colors">{s.title}</h3>
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
