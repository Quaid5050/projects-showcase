import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-32">
    <div className="container-luxe">
      <div className="relative overflow-hidden rounded-[2rem] bg-deep-gradient p-12 md:p-20 shadow-elegant">
        <div className="blob bg-primary-glow h-[500px] w-[500px] -top-40 -right-20 opacity-30" />
        <div className="blob bg-accent h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground leading-[1.05]">
            Start Your Transformation <span className="italic text-primary-glow">Today.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
            Pick your service, choose a time, and confirm your booking in seconds.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="xl">
              <Link to="/booking">Book Your Visit <ArrowRight className="ml-1" /></Link>
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
