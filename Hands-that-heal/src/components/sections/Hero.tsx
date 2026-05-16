import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden w-full">
    <div className="absolute inset-0">
      <img src={hero} alt="" className="w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-deep-gradient opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>

    <div className="container-luxe relative z-10 pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 max-w-full"
        >
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent shrink-0" />
          <span className="text-[10px] sm:text-xs font-medium text-white tracking-wider uppercase truncate">Hands That Heal | Modern Wellness &amp; Aesthetics, Beauty/Personal Care</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
        >
          Your Destination for Advanced Aesthetic Treatments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
        >
          From smooth, long-lasting results with Primelase laser hair removal and Brazilian laser, to body contouring that enhances your natural shape, and organic teeth whitening for a brighter, more confident smile.
          <br /><br />
          We also offer advanced cryotherapy treatments, supporting both aesthetic rejuvenation and orthopaedic recovery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4"
        >
          <Button asChild variant="gold" size="xl">
            <Link to="/booking">Book Appointment <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);
