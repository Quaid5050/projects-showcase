import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getService, services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug || "");
  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <title>{`${service.title} — Lumière`}</title>
      <meta name="description" content={service.tagline} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-gradient opacity-85" />
        </div>
        <div className="container-luxe relative z-10 pt-16">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl text-white leading-[1.05] max-w-4xl">
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-xl text-white/85 max-w-2xl font-display italic">
            {service.tagline}
          </motion.p>
          <Button asChild variant="gold" size="lg" className="mt-10">
            <Link to="/booking">Book This Treatment</Link>
          </Button>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Overview</p>
            <p className="text-xl text-foreground leading-relaxed font-display">{service.description}</p>

            <div className="mt-16">
              <h2 className="font-display text-4xl mb-8">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => (
                  <div key={b} className="glass rounded-2xl p-5 flex gap-3">
                    <span className="h-7 w-7 rounded-full bg-deep-gradient grid place-items-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h2 className="font-display text-4xl mb-8">Who it's for</h2>
              <ul className="space-y-3">
                {service.forWho.map((w) => (
                  <li key={w} className="flex gap-3 text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <h2 className="font-display text-4xl mb-8">Frequently asked</h2>
              <Accordion type="single" collapsible className="bg-card rounded-3xl shadow-soft px-6">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-deep-gradient rounded-3xl p-8 text-primary-foreground shadow-elegant">
              <h3 className="font-display text-3xl">Ready to begin?</h3>
              <p className="mt-3 text-primary-foreground/80 text-sm">Book a private consultation today.</p>
              <Button asChild variant="gold" size="lg" className="mt-6 w-full">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="mt-3 w-full">
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-24 bg-soft-gradient">
        <div className="container-luxe">
          <h2 className="font-display text-4xl mb-10">Continue exploring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl group-hover:text-primary transition-colors">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
