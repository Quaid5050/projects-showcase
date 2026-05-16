import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { staff } from "@/data/staff";
import { GradientBlobs } from "@/components/GradientBlobs";

const About = () => (
  <>
    <title>About — Lumière Aesthetic</title>
    <meta name="description" content="Meet the hands behind Lumière — certified specialists in inclusive aesthetic care for all skin tones." />

    <section className="relative pt-40 pb-20 overflow-hidden">
      <GradientBlobs />
      <div className="container-luxe relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Lumière</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[1.02]">
          Meet Hands <br /><span className="italic text-gradient">That Heal.</span>
        </h1>
        <p className="font-display text-2xl md:text-3xl italic text-muted-foreground mt-8 leading-snug">
          Feel comfortable and confident in your own skin.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container-luxe grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">A clinic built on listening.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We started Lumière because too many people walk into clinics feeling unseen. Whether it's being told a treatment "won't work for your skin" or feeling rushed through a sensitive procedure — we knew there was a better way.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every appointment begins with a conversation. We map a plan around your goals, your comfort, and your skin — never the other way around.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, t: "Medical-Grade", d: "Equipment trusted by dermatologists worldwide." },
            { icon: Heart, t: "Inclusive", d: "Trained for all skin tones, all bodies, all genders." },
            { icon: Users, t: "Private", d: "Single-client treatment rooms always." },
            { icon: Sparkles, t: "Lasting", d: "Real, visible results that endure." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-2xl p-6">
              <f.icon className="h-7 w-7 text-primary mb-3" />
              <h4 className="font-display text-xl">{f.t}</h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-32 bg-soft-gradient">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Team</p>
          <h2 className="font-display text-5xl md:text-6xl">
            The people behind <span className="italic text-gradient">your glow.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <p className="text-sm text-primary mt-1">{s.role}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{s.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
