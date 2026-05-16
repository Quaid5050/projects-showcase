import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-8 sm:py-12 overflow-hidden">
    <div className="container-luxe">
      <div className="relative min-w-0 overflow-hidden rounded-[2rem] bg-deep-gradient p-6 sm:p-12 md:p-20 shadow-elegant">
        <div className="blob bg-primary-glow h-[500px] w-[500px] -top-40 -right-20 opacity-30" />
        <div className="blob bg-accent h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">Special Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-[1.05]">
            <span className="text-primary-glow">$499</span> — 1 Year Unlimited Sessions on{" "}
            <span className="italic">Laser Hair Removal!</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-xl">
            This month only! Enjoy unlimited sessions and see results that last all year. Spots are limited — book now and make your skin feel cared for every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/booking">Book Now <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
