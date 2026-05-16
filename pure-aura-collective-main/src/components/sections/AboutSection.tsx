import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staff } from "@/data/staff";

export const AboutSection = () => (
  <section className="py-32 bg-soft-gradient">
    <div className="container-luxe">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
            Meet Hands <br />
            <span className="italic text-gradient">That Heal.</span>
          </h2>
          <p className="font-display text-2xl text-muted-foreground mt-6 italic">
            It's not just about treatments — it's about how you feel in your own skin.
          </p>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            At Hands That Heal, every person who walks through our doors deserves to feel comfortable, confident, and cared for, no matter their skin tone or experience with beauty treatments.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            From laser hair removal and body contouring to organic teeth whitening, we focus on making each session gentle, respectful, and tailored to you. Our M/F Brazilian care ensures everyone feels safe and looked after. We believe small moments of care can make a big difference.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, label: "Medical-Grade" },
              { icon: Heart, label: "Inclusive Care" },
              { icon: Sparkles, label: "Lasting Results" },
            ].map((f) => (
              <div key={f.label} className="glass rounded-2xl p-5 text-center">
                <f.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <span className="text-xs font-medium text-foreground">{f.label}</span>
              </div>
            ))}
          </div>

          <Button asChild variant="hero" size="lg" className="mt-10">
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
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
              <div className="p-5">
                <h4 className="font-display text-xl">{s.name}</h4>
                <p className="text-xs text-primary mt-1">{s.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
