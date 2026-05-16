import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "0", label: "Side Effects" },
  { value: "20+", label: "Wellness Solutions" },
  { value: "1000+", label: "Happy Clients" },
];

export const Stats = () => (
  <section className="py-8 sm:py-10 bg-deep-gradient">
    <div className="container-luxe">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <p className="font-display text-3xl sm:text-4xl md:text-5xl md:text-6xl text-primary-glow">{s.value}</p>
            <p className="mt-2 text-xs sm:text-sm text-primary-foreground/70 uppercase tracking-widest">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
