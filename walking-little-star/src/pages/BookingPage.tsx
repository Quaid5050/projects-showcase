import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star, Info } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { SmartImage } from "../components/common/SmartImage";
import { BookingForm } from "../components/forms/BookingForm";
import { StarSVG } from "../components/common/StarSVG";
import { siteConfig, bookingPage } from "../data/siteContent";
import { images } from "../data/images";

export const BookingPage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        aria-labelledby="booking-hero-heading"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Booking-hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[14, 10, 18].map((size, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                top: `${10 + i * 20}%`,
                left: i % 2 === 0 ? `${5 + i * 5}%` : undefined,
                right: i % 2 !== 0 ? `${5 + i * 4}%` : undefined,
                animationDelay: `${i * 0.4}s`,
              } as React.CSSProperties}
            >
              <StarSVG size={size} color="#fedebe" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white font-body font-700 text-sm px-4 py-1.5 rounded-full mb-5">
              <Star size={12} fill="#fedebe" aria-hidden="true" />
              Book a Visit
            </div>
            <h1
              id="booking-hero-heading"
              className="font-display font-semibold text-white leading-tight text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              {bookingPage.heroHeading}
            </h1>
            <p className="font-body text-white/90 text-xl leading-relaxed max-w-2xl mx-auto">
              {bookingPage.heroSubtext}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="#fffdf9" preserveAspectRatio="none" className="w-full block">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Main content */}
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
                <BookingForm />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <SmartImage
                  src={images.booking.sidebar.src}
                  alt={images.booking.sidebar.alt}
                  width={images.booking.sidebar.width}
                  height={images.booking.sidebar.height}
                  rounded="rounded-3xl"
                />
              </motion.div>

              {/* Contact info */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-soft"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h2 className="font-display font-semibold text-navy text-xl mb-4">Contact Us Directly</h2>
                <ul className="space-y-3" role="list">
                  <li>
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="flex items-center gap-3 text-text-dark hover:text-navy transition-colors group font-body text-base"
                      aria-label={`Call ${siteConfig.contact.phone}`}
                    >
                      <div className="w-9 h-9 bg-peach rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={15} className="text-navy" aria-hidden="true" />
                      </div>
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contact.emailLink}
                      className="flex items-center gap-3 text-text-dark hover:text-navy transition-colors group font-body text-sm break-all"
                      aria-label={`Email ${siteConfig.contact.email}`}
                    >
                      <div className="w-9 h-9 bg-peach rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={15} className="text-navy" aria-hidden="true" />
                      </div>
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-3 text-text-muted font-body text-base">
                      <div className="w-9 h-9 bg-peach rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={15} className="text-navy" aria-hidden="true" />
                      </div>
                      {siteConfig.contact.location}
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* What to expect */}
              <motion.div
                className="bg-navy rounded-3xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="absolute top-3 right-3 opacity-15 pointer-events-none" aria-hidden="true">
                  <StarSVG size={36} color="#fedebe" />
                </div>
                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <Info size={18} className="text-sky-brand" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-white text-base">What to Expect</h3>
                </div>
                <ul className="space-y-2.5 relative z-10" role="list">
                  {[
                    "We'll review your request within 1–2 business days",
                    "You'll hear from Angélica directly",
                    "We'll discuss availability and arrange your visit",
                    "Visit details and location are shared when confirmed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Star size={11} fill="#fedebe" className="text-peach flex-shrink-0 mt-1" aria-hidden="true" />
                      <span className="font-body text-sky-light text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sky-light/60 text-xs mt-4 italic relative z-10">
                  {bookingPage.sidebarNote}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
