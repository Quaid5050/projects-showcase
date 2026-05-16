import { motion } from "framer-motion";

export const Testimonials = () => {
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

        {/* Elfsight Google Reviews widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            className="elfsight-app-ac9937e4-0bea-456b-94b7-921c5a9e081d"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};
