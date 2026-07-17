import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    // Remove any previous script to allow re-injection
    const existing = document.getElementById("trustindex-loader");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "trustindex-loader";
    script.src = "https://cdn.trustindex.io/loader.js?e516d5873149425c5b1604e049d";
    script.async = true;
    script.defer = true;

    // Insert script immediately after the widget div so Trustindex
    // finds the correct target element
    container.insertAdjacentElement("afterend", script);
  }, []);

  return (
    <section className="py-8 sm:py-12">
      <div className="container-luxe">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Beauty Backed by{" "}
            <span className="italic text-gradient">Results</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real stories from people who trusted us with their skin and left feeling more comfortable, confident, and cared for.
          </p>
        </motion.div>

        {/* Trustindex widget target — script is injected right after this div */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            ref={widgetRef}
            className="trustindex-widget"
            data-widget-id="e516d5873149425c5b1604e049d"
          />
        </motion.div>
      </div>
    </section>
  );
};
