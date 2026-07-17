import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Star } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { ContactForm } from "../components/forms/ContactForm";
import { StarSVG } from "../components/common/StarSVG";
import { siteConfig, contactPage } from "../data/siteContent";

export const ContactPage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact-hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[12, 16, 10].map((size, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                top: `${12 + i * 18}%`,
                left: i % 2 === 0 ? `${6 + i * 5}%` : undefined,
                right: i % 2 !== 0 ? `${6 + i * 4}%` : undefined,
                animationDelay: `${i * 0.4}s`,
              } as React.CSSProperties}
            >
              <StarSVG size={size} color="#fedebe" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white font-body font-700 text-sm px-4 py-1.5 rounded-full mb-5">
              <Star size={12} fill="#fedebe" aria-hidden="true" />
              Contact Us
            </div>
            <h1
              id="contact-hero-heading"
              className="font-display font-semibold text-white leading-tight text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              {contactPage.heroHeading}
            </h1>
            <p className="font-body text-white/90 text-xl leading-relaxed max-w-2xl mx-auto">
              {contactPage.heroSubtext}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="#fffdf9" preserveAspectRatio="none" className="w-full block">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 bg-cream-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-4xl p-7 sm:p-10 shadow-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h2 className="font-display font-semibold text-navy text-2xl mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </motion.div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              {/* Contact details */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-soft"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="font-display font-semibold text-navy text-xl mb-5">
                  Get in Touch
                </h2>
                <p className="font-body text-text-muted text-sm mb-5">
                  Contact <strong className="text-navy">{siteConfig.contact.providerName}</strong> at Walking Little Star Daycare.
                </p>
                <ul className="space-y-4" role="list">
                  <li>
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="flex items-center gap-3 group"
                      aria-label={`Call ${siteConfig.contact.phone}`}
                    >
                      <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-peach-dark transition-colors">
                        <Phone size={16} className="text-navy" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-body font-700 text-navy text-sm group-hover:text-sky-brand transition-colors">
                          {siteConfig.contact.phone}
                        </p>
                        <p className="font-body text-text-muted text-xs">Call or text</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contact.emailLink}
                      className="flex items-center gap-3 group"
                      aria-label={`Email ${siteConfig.contact.email}`}
                    >
                      <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-peach-dark transition-colors">
                        <Mail size={16} className="text-navy" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-body font-700 text-navy text-sm break-all group-hover:text-sky-brand transition-colors">
                          {siteConfig.contact.email}
                        </p>
                        <p className="font-body text-text-muted text-xs">Email us anytime</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-navy" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-body font-700 text-navy text-sm">{siteConfig.contact.location}</p>
                        <p className="font-body text-text-muted text-xs">Visit details shared on confirmation</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Social media */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-soft"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="font-display font-semibold text-navy text-base mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a
                    href={siteConfig.social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    aria-label="Visit our Instagram page"
                  >
                    <div className="w-9 h-9 bg-peach rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-peach-dark transition-colors">
                      <Instagram size={15} className="text-navy" aria-hidden="true" />
                    </div>
                    <span className="font-body text-text-dark text-sm group-hover:text-navy transition-colors">
                      {siteConfig.social.instagramHandle}
                    </span>
                  </a>
                  <a
                    href={siteConfig.social.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    aria-label="Visit our Facebook page"
                  >
                    <div className="w-9 h-9 bg-peach rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-peach-dark transition-colors">
                      <Facebook size={15} className="text-navy" aria-hidden="true" />
                    </div>
                    <span className="font-body text-text-dark text-sm group-hover:text-navy transition-colors">
                      {siteConfig.social.facebookName}
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="bg-navy rounded-3xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="absolute top-3 right-3 opacity-15 pointer-events-none" aria-hidden="true">
                  <StarSVG size={36} color="#fedebe" />
                </div>

                {/* Service area map illustration */}
                <div className="bg-navy-light/50 rounded-2xl p-6 mb-4 text-center relative z-10">
                  <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin size={28} className="text-peach" aria-hidden="true" />
                  </div>
                  <p className="font-display font-semibold text-white text-base">Westfield, MA</p>
                  <p className="font-body text-sky-light text-xs mt-1">Western Massachusetts</p>
                </div>

                <p className="font-body text-sky-light text-sm leading-relaxed relative z-10">
                  {contactPage.locationNote}
                </p>
              </motion.div>

              {/* Business hours (hidden until confirmed) */}
              {contactPage.showHours && siteConfig.businessHours && (
                <motion.div
                  className="bg-white rounded-3xl p-6 shadow-soft"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <h3 className="font-display font-semibold text-navy text-base mb-3">Business Hours</h3>
                  <p className="font-body text-text-muted text-sm">{siteConfig.businessHours}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="py-14 bg-white" aria-label="Quick contact actions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-semibold text-navy text-xl mb-6">
            Ready to take the next step?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.contact.phoneLink}
              className="inline-flex items-center gap-2 bg-navy text-white font-body font-700 px-7 py-3.5 rounded-full hover:bg-navy-light hover:-translate-y-0.5 transition-all shadow-soft focus-visible:ring-2 focus-visible:ring-navy"
              aria-label={`Call us at ${siteConfig.contact.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
              Call Now
            </a>
            <a
              href={siteConfig.contact.emailLink}
              className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft focus-visible:ring-2 focus-visible:ring-navy"
              aria-label={`Email ${siteConfig.contact.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              Send an Email
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-white text-navy border-2 border-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-cream-warm hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-navy"
            >
              <Star size={14} fill="#183b65" aria-hidden="true" />
              Book a Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
