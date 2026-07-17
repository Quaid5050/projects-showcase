import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Heart, Sparkles, Users, Shield, BookOpen, Smile } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { SmartImage } from "../components/common/SmartImage";
import { StarSVG } from "../components/common/StarSVG";
import { aboutPage } from "../data/siteContent";
import { images } from "../data/images";

const coreValues = [
  { icon: Shield, label: "Safety", desc: "Children's safety is the foundation of everything we do." },
  { icon: Heart, label: "Kindness", desc: "Every interaction is guided by warmth, care, and empathy." },
  { icon: Sparkles, label: "Curiosity", desc: "We nurture children's natural desire to explore and discover." },
  { icon: Star, label: "Creativity", desc: "Art, play, and imagination are celebrated every day." },
  { icon: Smile, label: "Confidence", desc: "We help every child feel capable, valued, and proud." },
  { icon: Users, label: "Family Connection", desc: "Families are partners in their child's growth and journey." },
];

export const AboutPage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-hero.png')" }}
          aria-hidden="true"
        />
        {/* Strong dark overlay so all text is clearly readable */}
        <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />

        {/* Subtle star decorations */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[12, 10, 16, 14, 10].map((size, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                top: `${10 + i * 14}%`,
                left: i % 2 === 0 ? `${3 + i * 4}%` : undefined,
                right: i % 2 !== 0 ? `${3 + i * 3}%` : undefined,
                animationDelay: `${i * 0.4}s`,
              } as React.CSSProperties}
            >
              <StarSVG size={size} color="#fedebe" />
            </div>
          ))}
        </div>

        {/* Centered content — no side image */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white font-body font-700 text-sm px-4 py-1.5 rounded-full mb-5">
              <Star size={12} fill="#fedebe" aria-hidden="true" />
              About Us
            </div>

            <h1
              id="about-hero-heading"
              className="font-display font-semibold text-white leading-tight text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              {aboutPage.heroHeading}
            </h1>

            <p className="font-body text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {aboutPage.heroSubtext}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-6 py-3 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-navy min-h-[44px]"
              >
                Schedule a Tour
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy font-body font-700 px-6 py-3 rounded-full hover:bg-peach hover:-translate-y-0.5 transition-all shadow-soft focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy min-h-[44px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="#fffdf9" preserveAspectRatio="none" className="w-full block">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream-warm" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading id="story-heading" title={aboutPage.storyHeading} className="mb-6" />
              {aboutPage.storyBody.map((para, i) => (
                <motion.p
                  key={i}
                  className="font-body text-text-muted text-lg leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SmartImage
                src={images.about.story2.src}
                alt={images.about.story2.alt}
                width={images.about.story2.width}
                height={images.about.story2.height}
                rounded="rounded-4xl"
                animate
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white" aria-labelledby="mission-section-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            id="mission-section-heading"
            title={aboutPage.missionHeading}
            centered
            className="mb-6"
          />
          <motion.p
            className="font-body text-text-muted text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {aboutPage.missionBody}
          </motion.p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cream-warm" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="values-heading"
            title="Our Core Values"
            subtitle="The principles that guide every interaction, every activity, and every day."
            centered
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.label}
                  className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-peach rounded-2xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-navy" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-xl mb-2">{value.label}</h3>
                  <p className="font-body text-text-muted text-base leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading id="approach-heading" title={aboutPage.approachHeading} className="mb-6" />
              <ul className="space-y-3" role="list">
                {aboutPage.approachPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-peach rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star size={11} fill="#183b65" className="text-navy" aria-hidden="true" />
                    </div>
                    <span className="font-body text-text-dark text-base leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-navy rounded-4xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20 pointer-events-none" aria-hidden="true">
                <StarSVG size={48} color="#fedebe" />
              </div>
              <h3 className="font-display font-semibold text-white text-2xl mb-4">
                {aboutPage.environmentHeading}
              </h3>
              <p className="font-body text-sky-light text-lg leading-relaxed">
                {aboutPage.environmentBody}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Provider section (conditionally shown) */}
      {aboutPage.showProviderSection && (
        <section className="py-20 bg-cream-warm" aria-labelledby="provider-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="provider-heading"
              title={aboutPage.providerHeading}
              centered
              className="mb-10"
            />
            <div className="bg-white rounded-4xl p-10 shadow-card text-center">
              <p className="font-body text-text-muted text-lg leading-relaxed italic">
                {aboutPage.providerPlaceholder}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-cream-warm" aria-labelledby="about-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-navy rounded-4xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-4 right-4 opacity-15 pointer-events-none" aria-hidden="true">
              <StarSVG size={60} color="#fedebe" />
            </div>
            <h2
              id="about-cta-heading"
              className="font-display font-semibold text-white text-balance mb-4 relative z-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              {aboutPage.ctaHeading}
            </h2>
            <p className="font-body text-sky-light text-lg mb-8 relative z-10">
              We would love to meet you and your family.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Schedule a Tour
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-body font-700 px-7 py-3.5 rounded-full hover:bg-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
