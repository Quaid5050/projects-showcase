import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staff } from "@/data/staff";

export const AboutSection = () => (
  <section className="py-8 sm:py-12 bg-soft-gradient overflow-hidden">
    <div className="container-luxe">
      <div className="grid min-w-0 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            About Hands That Heal
          </h2>
          <p className="font-display text-2xl text-muted-foreground mt-6 italic">
            Feel confident, comfortable, and cared for.
          </p>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            We created Hands That Heal for those who want more than just a quick service; a space where aesthetics and wellness come together with real expertise and privacy. With 14 years of experience, our focus is on delivering treatments that show visible, lasting results.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            As the only provider of localised cryotherapy in the area, we bring advanced solutions for both beauty and orthopaedic care, along with carefully designed combination packages that support your overall wellness and aesthetic goals.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Our trained specialists use proven techniques that are safe and effective for all skin types, ensuring every client feels comfortable and confident in their journey.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            {[
              { icon: ShieldCheck, label: "Expert Hands. Proven Methods" },
              { icon: Heart, label: "Safe, thoughtful approaches" },
              { icon: Sparkles, label: "Results That Go Beyond the Moment" },
            ].map((f) => (
              <div key={f.label} className="glass rounded-2xl p-5 text-center">
                <f.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <span className="text-xs font-medium text-foreground">{f.label}</span>
              </div>
            ))}
          </div>

          <Button asChild variant="hero" size="lg" className="mt-10 w-full max-w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap">
            <Link to="/about">Find Out More about Hands That Heal</Link>
          </Button>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-4">
          {staff.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-card rounded-3xl overflow-hidden shadow-soft ${i === 0 ? "col-span-2 row-span-1" : ""}`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
