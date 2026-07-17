import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Star, BookOpen, Languages, Palette, Music, Users, Sparkles, Clock, LucideIcon } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { SmartImage } from "../components/common/SmartImage";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { StarSVG } from "../components/common/StarSVG";
import { servicesPage } from "../data/siteContent";
import { programs, enrichmentActivities, dailySchedule } from "../data/services";
import { faqs } from "../data/faqs";
import { images } from "../data/images";

const programImages = {
  infant: images.services.infant,
  toddler: images.services.toddler,
  preschool: images.services.preschool,
};

const programColors = {
  infant: { bg: "bg-peach", icon: Heart, border: "border-peach-dark" },
  toddler: { bg: "bg-sky-pale", icon: Star, border: "border-sky-brand" },
  preschool: { bg: "bg-navy", icon: BookOpen, border: "border-navy" },
};

const enrichIcons: Record<string, LucideIcon> = {
  Languages,
  Palette,
  Music,
  BookOpen,
  Sparkles,
  Users,
};

export const ServicesPage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        aria-labelledby="services-hero-heading"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services-hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[14, 10, 18, 12].map((size, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                top: `${8 + i * 18}%`,
                left: i % 2 === 0 ? `${5 + i * 5}%` : undefined,
                right: i % 2 !== 0 ? `${5 + i * 4}%` : undefined,
                animationDelay: `${i * 0.5}s`,
              } as React.CSSProperties}
            >
              <StarSVG size={size} color="#fedebe" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white font-body font-700 text-sm px-4 py-1.5 rounded-full mb-5">
              <Star size={12} fill="#fedebe" aria-hidden="true" />
              Programs & Services
            </div>
            <h1
              id="services-hero-heading"
              className="font-display font-semibold text-white leading-tight text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              {servicesPage.heroHeading}
            </h1>
            <p className="font-body text-white/90 text-xl leading-relaxed max-w-2xl mx-auto">
              {servicesPage.heroSubtext}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="#fffdf9" preserveAspectRatio="none" className="w-full block">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-cream-warm" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="programs-heading"
            title="Our Care Programs"
            subtitle="Nurturing environments designed for every stage of early childhood development."
            centered
            className="mb-14"
          />
          <div className="space-y-16">
            {programs.map((program, index) => {
              const pc = programColors[program.id as keyof typeof programColors];
              const Icon = pc.icon;
              const img = programImages[program.id as keyof typeof programImages];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={program.id}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${pc.bg} flex items-center justify-center`}>
                        <Icon size={22} className={program.id === "preschool" ? "text-white" : "text-navy"} aria-hidden="true" />
                      </div>
                      <span className="font-body font-700 text-text-muted text-sm uppercase tracking-wider">
                        {program.ageRange}
                      </span>
                    </div>
                    <h2 className="font-display font-semibold text-navy text-3xl sm:text-4xl mb-3">
                      {program.title}
                    </h2>
                    <p className="font-body text-text-muted text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2.5" role="list">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <div className={`w-5 h-5 rounded-full ${pc.bg} flex items-center justify-center flex-shrink-0`}>
                            <Star size={9} fill={program.id === "preschool" ? "white" : "#183b65"} aria-hidden="true" />
                          </div>
                          <span className="font-body text-text-dark text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <SmartImage
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      rounded="rounded-4xl"
                      animate
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrichment Activities */}
      <section className="py-20 bg-white" aria-labelledby="enrichment-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="enrichment-heading"
            title="Enrichment Experiences"
            subtitle="Beyond basic care — activities that inspire wonder, creativity, and growth every day."
            centered
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichmentActivities.map((activity, i) => {
              const Icon = (enrichIcons[activity.icon] || Star) as LucideIcon;
              return (
                <motion.div
                  key={activity.id}
                  className="bg-cream-warm rounded-3xl p-6 hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-peach rounded-2xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-navy" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-xl mb-2">{activity.title}</h3>
                  <p className="font-body text-text-muted text-base leading-relaxed">{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-cream-warm" aria-labelledby="schedule-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="schedule-heading"
            title="Sample Daily Rhythm"
            centered
            className="mb-4"
          />
          <motion.p
            className="text-center font-body text-text-muted text-sm italic mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {servicesPage.scheduleDisclaimer}
          </motion.p>
          <div className="space-y-3">
            {dailySchedule.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-soft"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-navy" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-body font-700 text-navy text-base">{item.activity}</h3>
                    <span className="font-body text-xs text-text-muted bg-cream-warm px-2 py-0.5 rounded-full">{item.time}</span>
                  </div>
                  <p className="font-body text-text-muted text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Families Can Expect */}
      <section className="py-20 bg-white" aria-labelledby="expectations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="expectations-heading"
            title="What Families Can Expect"
            subtitle="Open communication, warm relationships, and a childcare experience built on trust."
            centered
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Caring Communication", desc: "Regular updates so families feel informed and connected throughout the day." },
              { title: "A Welcoming Environment", desc: "A clean, organized, and safe space where children feel at home." },
              { title: "Developmentally Appropriate Activities", desc: "Every activity is chosen to match each child's stage and individual needs." },
              { title: "Learning Through Play", desc: "Hands-on exploration and play-based learning form the heart of every day." },
              { title: "Supportive Routines", desc: "Consistent daily rhythms that help children feel secure and thrive." },
              { title: "Respect for Every Child", desc: "Each child's unique personality, pace, and background is honored and celebrated." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-cream-warm rounded-3xl p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-peach rounded-full flex items-center justify-center mb-3">
                  <Star size={14} fill="#183b65" className="text-navy" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream-warm" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="faq-heading"
            title="Frequently Asked Questions"
            centered
            className="mb-10"
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white" aria-labelledby="services-cta-heading">
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
              id="services-cta-heading"
              className="font-display font-semibold text-white text-balance mb-4 relative z-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              {servicesPage.ctaHeading}
            </h2>
            <p className="font-body text-sky-light text-lg mb-8 relative z-10">
              Schedule a visit and see our programs in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-peach-dark transition-all hover:-translate-y-0.5 shadow-soft focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Book a Visit
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
