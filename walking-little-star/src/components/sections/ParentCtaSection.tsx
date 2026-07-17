import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Star, ArrowRight } from "lucide-react";
import { parentCta, siteConfig } from "../../data/siteContent";

export const ParentCtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-warm" aria-labelledby="parent-cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="bg-white rounded-4xl p-10 sm:p-14 shadow-card relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-peach-light rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-pale rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none opacity-50" aria-hidden="true" />

          <div className="relative z-10">
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 bg-peach rounded-full flex items-center justify-center">
                <Star size={24} fill="#183b65" className="text-navy" aria-hidden="true" />
              </div>
            </div>

            <h2
              id="parent-cta-heading"
              className="font-display font-semibold text-navy text-balance mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
            >
              {parentCta.heading}
            </h2>

            <p className="font-body text-text-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {parentCta.body}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-navy text-white font-body font-700 px-7 py-3.5 rounded-full hover:bg-navy-light hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <Star size={14} fill="white" aria-hidden="true" />
                Book a Visit
                <ArrowRight size={16} />
              </Link>
              <a
                href={siteConfig.contact.phoneLink}
                className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                aria-label={`Call us at ${siteConfig.contact.phone}`}
              >
                <Phone size={16} aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
