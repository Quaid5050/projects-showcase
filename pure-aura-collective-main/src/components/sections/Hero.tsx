import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={hero} alt="" className="w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-deep-gradient opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>

    <div className="container-luxe relative z-10 pt-32 pb-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium text-white tracking-wider uppercase">Feel Comfortable & Confident in Your Own Skin</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
        >
          Meet Hands <br />
          <span className="italic text-primary-glow">That Heal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
        >
          We offer laser hair removal, body contouring, and organic teeth whitening that are safe, gentle, and effective for all skin types, including darker tones. We also provide M/F Brazilian treatments, so everyone gets the care they need.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 text-base text-white/70 max-w-2xl leading-relaxed"
        >
          This month only — enjoy 1 year of unlimited laser hair removal sessions for just $499. Spots are limited, book now.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button asChild variant="gold" size="xl">
            <Link to="/booking">Book Appointment <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/services">Explore Services</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap gap-8 text-white/60 text-sm"
        >
          <div><span className="block text-3xl font-display text-white">$499</span>1 Year Unlimited Laser</div>
          <div><span className="block text-3xl font-display text-white">All</span>Skin tones welcomed</div>
          <div><span className="block text-3xl font-display text-white">M/F</span>Brazilian treatments</div>
        </motion.div>
      </div>
    </div>
  </section>
);
