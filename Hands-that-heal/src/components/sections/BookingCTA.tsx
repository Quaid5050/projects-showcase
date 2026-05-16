import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Clock, User } from "lucide-react";

const steps = [
  { icon: CalendarCheck, label: "Service Selection", desc: "Pick the treatment that's right for you." },
  { icon: Clock, label: "Date & Time", desc: "Choose a time that fits your schedule." },
  { icon: User, label: "Your Information", desc: "Confirm your booking in seconds." },
];

export const BookingCTA = () => (
  <section className="py-8 sm:py-12 bg-soft-gradient">
    <div className="container-luxe">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Start Your Transformation Today</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Pick your service, choose a time, and{" "}
          <span className="italic text-gradient">confirm your booking in seconds.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-3xl p-5 sm:p-8 text-center"
          >
            <span className="inline-flex h-14 w-14 rounded-2xl bg-deep-gradient items-center justify-center mb-5">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Step {i + 1}</p>
            <h3 className="font-display text-xl mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="hero" size="xl">
          <Link to="/booking">Book Appointment <ArrowRight className="ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);
