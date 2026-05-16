import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/staff";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-5xl md:text-6xl">
            Words from <span className="italic text-gradient">our clients.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Real stories from people who trusted us with their skin and left feeling more comfortable, confident, and cared for.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-10 md:p-16 shadow-elegant">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/15" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-8 text-sm uppercase tracking-[0.25em] text-primary">{t.name}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-10">
              <button onClick={prev} className="h-11 w-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors grid place-items-center">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} className="h-11 w-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors grid place-items-center">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-primary/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
