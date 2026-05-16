import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";
import { ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/sections/Testimonials";
import laser from "@/assets/about-1.jpeg";
import cryo from "@/assets/about-2.jpeg";
import contour from "@/assets/about-3.jpeg";
import about4 from "@/assets/about-4.jpeg";
import about5 from "@/assets/about-5.jpeg";

const missionCards = [
  {
    title: "Our Mission",
    text: "To deliver high-quality wellness services that help relieve stress, restore balance, and support a healthier lifestyle for every client.",
  },
  {
    title: "Our Vision",
    text: "To be a trusted name in wellness, known for compassionate care, professional service, and lasting results.",
  },
  {
    title: "Our Goal",
    text: "To ensure every visit leaves you feeling relaxed, refreshed, and truly cared for.",
  },
];

const whyFeatures = [
  { icon: ShieldCheck, title: "Safe for All Skin Tones", desc: "Our advanced technology is designed to work gently and effectively on every skin type, including darker tones." },
  { icon: Heart, title: "Comfort Comes First", desc: "We keep every session calm, private, and easy for you — from the moment you walk in to the moment you leave." },
  { icon: Sparkles, title: "Real Results That Last", desc: "Less regrowth, smoother skin, and visible change over time. We prioritize long-lasting, visible outcomes." },
  { icon: Users, title: "People Who Truly Care", desc: "You're treated with attention, respect, and honesty every time. Our team is here to guide you every step." },
  { icon: Clock, title: "No Downtime", desc: "All our treatments are non-invasive. Return to your daily routine immediately after every session." },
  { icon: Star, title: "Inclusive & Welcoming", desc: "We serve everyone — all genders, all skin tones, all backgrounds. Everyone deserves to feel cared for." },
];

const ServicesTabsSection = () => {
  const [active, setActive] = useState(services[0].slug);
  const current = services.find((s) => s.slug === active)!;
  return (
    <section className="py-8 sm:py-12">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Our <span className="italic text-gradient">Treatments</span>
          </h2>
        </div>
        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {services.map((s) => (
            <button
              key={s.slug}
              onClick={() => setActive(s.slug)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === s.slug
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {s.title.split("(")[0].trim()}
            </button>
          ))}
        </div>
        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-soft"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="font-display text-3xl mb-3">{current.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{current.description}</p>
              <Button asChild variant="hero" size="lg">
                <Link to={`/services/${current.slug}`}>
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const About = () => (
  <>
    <title>About Us — Hands That Heal</title>
    <meta name="description" content="Dedicated to providing care that relaxes, heals, and enhances your overall well-being. Meet the team at Hands That Heal." />

    {/* Hero */}
    <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 overflow-hidden">
      <GradientBlobs />
      <div className="container-luxe relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Hands That Heal</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02]">
          Meet Hands <br />
          <span className="italic text-gradient">That Heal.</span>
        </h1>
        <p className="font-display text-xl sm:text-2xl text-muted-foreground mt-6 italic">
          Where advanced aesthetic care meets trusted expertise to help you feel confident in your skin.
        </p>
      </div>
    </section>

    {/* Image mosaic — premium visual intro */}
    <section className="pt-8 sm:pt-12 pb-6">
      <div className="container-luxe">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="sm:col-span-2 sm:row-span-2 rounded-3xl overflow-hidden shadow-elegant"
          >
            <img src={laser} alt="Laser treatment" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-soft aspect-square"
          >
            <img src={cryo} alt="Cryotherapy" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-soft aspect-square"
          >
            <img src={contour} alt="Body contouring" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Clinic built on expertise */}
    <section className="py-8 sm:py-12 bg-soft-gradient">
      <div className="container-luxe">
        {/* Heading + text — full width on top */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
            A clinic built on expertise and precision.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The Hands That Heal brings over 12+ years of professional experience in aesthetic and wellness care, delivering results-driven treatments with a clinical, detail-focused approach.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We are among the first to introduce advanced Cryotherapy treatments for the first time in HAMILTON, offering innovation in both beauty and orthopaedic care, alongside services such as laser hair removal with Primelase, organic teeth whitening, Brazilian laser, and skin rejuvenation.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every treatment begins with understanding your concerns and building a personalised plan that always stays focused on safe procedures, visible results, and long-term improvement, not generic solutions.
          </p>
        </div>
        {/* 4 feature cards — full width below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, title: "Medical-Grade", desc: "Clinically trusted systems used in advanced dermatology for safe, precise results." },
            { icon: Heart,       title: "Inclusive",     desc: "A premium care for every skin tone, every body, every identity without limitation." },
            { icon: Users,       title: "Private",       desc: "Dedicated treatment spaces that ensure full comfort, discretion, and personal care." },
            { icon: Sparkles,    title: "Visibility",    desc: "Measurable, visible results designed to go beyond surface-level change." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <f.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-display text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Caring Hands Trusted Healing — image + text intro */}
    <section className="py-10">
      <div className="container-luxe grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-soft">
            <img src={about4} alt="Treatment" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-soft sm:mt-8">
            <img src={about5} alt="Treatment" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Caring <span className="italic text-gradient">Hands</span>{" "}
            Trusted <span className="italic text-gradient">Healing</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Hands That Heal, we believe your skin deserves care that is gentle, effective, and tailored just for you. We understand that every person's skin is unique, and our goal is to make every visit comfortable, professional, and results-driven.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether it's laser hair removal, body contouring, or organic teeth whitening, we focus on treatments that leave you feeling confident, cared for, and at ease, from the moment you walk in to the moment you leave.
          </p>
          <Link to="/services">
            <button className="mt-8 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
              View Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Goal */}
    <section className="py-8 sm:py-12 bg-soft-gradient">
      <div className="container-luxe">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Mission and Vision</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
            Dedicated to providing care that relaxes, heals, and enhances your overall well-being.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {missionCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-5 sm:p-8"
            >
              <h3 className="font-display text-2xl text-primary mb-4">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Tabs */}
    <ServicesTabsSection />

    {/* Why Choose Us */}
    <section className="py-8 sm:py-12 bg-soft-gradient">      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Care that feels right{" "}
            <span className="italic text-gradient">from the moment you walk in</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-3xl p-8 hover:shadow-elegant transition-all"
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

    {/* Testimonials — Google Reviews */}
    <Testimonials />
  </>
);;

export default About;
