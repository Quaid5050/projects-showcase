import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NextStep = () => (
  <section className="py-8 sm:py-12 overflow-hidden">
    <div className="container-luxe">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-deep-gradient p-6 sm:p-12 md:p-20 shadow-elegant"
      >
        <div className="blob bg-primary-glow h-[500px] w-[500px] -top-40 -right-20 opacity-30" />
        <div className="blob bg-accent h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-[1.05]">
            Your next step starts here.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-xl">
            Book a one-on-one consultation. We understand your needs, plan the right treatments, and guide you through every step with care and privacy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/booking">Schedule Appointment <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
