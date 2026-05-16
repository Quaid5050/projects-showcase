import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Users, Clock, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe for All Skin Tones",
    desc: "Our advanced technology is designed to work gently and effectively on every skin type, including darker tones.",
  },
  {
    icon: Heart,
    title: "Comfort Comes First",
    desc: "We keep every session calm, private, and easy for you — from the moment you walk in to the moment you leave.",
  },
  {
    icon: Sparkles,
    title: "Real Results That Last",
    desc: "Less regrowth, smoother skin, and visible change over time. We prioritize long-lasting, visible outcomes.",
  },
  {
    icon: Users,
    title: "People Who Truly Care",
    desc: "You're treated with attention, respect, and honesty every time. Our team is here to guide you every step.",
  },
  {
    icon: Clock,
    title: "No Downtime",
    desc: "All our treatments are non-invasive. Return to your daily routine immediately after every session.",
  },
  {
    icon: Star,
    title: "Inclusive & Welcoming",
    desc: "We serve everyone — all genders, all skin tones, all backgrounds. Everyone deserves to feel cared for.",
  },
];

export const WhyChooseUs = () => (
  <section className="py-8 sm:py-12 bg-soft-gradient">
    <div className="container-luxe min-w-0">
      <div className="text-center max-w-2xl mx-auto mb-10 min-w-0">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Care that feels right{" "}
          <span className="italic text-gradient">from the moment you walk in</span>
        </h2>
      </div>

      <div className="grid min-w-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass min-w-0 rounded-3xl p-5 sm:p-8 hover:shadow-elegant transition-all"
          >
            <span className="h-12 w-12 rounded-2xl bg-deep-gradient grid place-items-center mb-5">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </span>
            <h3 className="font-display text-xl mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
