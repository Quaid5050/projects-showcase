import React from "react";
import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";
import { siteConfig, privacyPage } from "../data/siteContent";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div
    className="mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="font-display font-semibold text-navy text-2xl mb-4">{title}</h2>
    <div className="font-body text-text-muted text-base leading-relaxed space-y-3">{children}</div>
  </motion.div>
);

export const PrivacyPage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden" aria-labelledby="privacy-hero-heading">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/privacy-hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <Shield size={28} className="text-peach" aria-hidden="true" />
              </div>
            </div>
            <h1
              id="privacy-hero-heading"
              className="font-display font-semibold text-white text-3xl sm:text-4xl mb-4"
            >
              {privacyPage.heading}
            </h1>
            <p className="font-body text-sky-light text-lg">
              {privacyPage.subtext} &mdash; Last updated {privacyPage.lastUpdated}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="#fffdf9" preserveAspectRatio="none" className="w-full block">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer banner */}
          <div className="bg-peach-light border-2 border-peach rounded-2xl p-5 mb-10 flex gap-4 items-start">
            <Star size={20} fill="#183b65" className="text-navy flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="font-body text-navy text-sm leading-relaxed">
              <strong>Notice:</strong> {privacyPage.disclaimer}
            </p>
          </div>

          <div className="bg-white rounded-4xl p-8 sm:p-12 shadow-card">
            <Section title="Introduction">
              <p>
                Walking Little Star Daycare LLC ("we," "our," or "us") values the privacy of the families
                who visit our website at {siteConfig.domain}. This page explains how we collect,
                use, and protect the information you provide through our inquiry forms.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>When you use our contact or booking inquiry forms, we may collect:</p>
              <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                <li>Your name and contact information (phone number, email address)</li>
                <li>General information about your childcare needs (child's age group, preferred schedule)</li>
                <li>Your preferred method and timing for a visit</li>
                <li>Any general questions or notes you choose to share</li>
              </ul>
              <p>
                We do not request your child's full legal name, social security number, medical records,
                or other highly sensitive personal or health information through our website forms.
              </p>
            </Section>

            <Section title="How We Use Your Information">
              <p>Information collected through our inquiry forms is used to:</p>
              <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                <li>Respond to your childcare inquiry</li>
                <li>Arrange a visit or tour at our daycare</li>
                <li>Discuss availability and answer your questions</li>
                <li>Communicate about next steps in the enrollment process</li>
              </ul>
              <p>
                We will not sell, share, or distribute your personal information to third parties for
                marketing purposes.
              </p>
            </Section>

            <Section title="Third-Party Form Processing">
              <p>
                Our website inquiry forms may be processed by third-party services (such as email
                delivery providers or form platforms). These services are used solely to deliver
                your message to us. They are not authorized to use your information for any other purpose.
              </p>
            </Section>

            <Section title="Cookies and Website Analytics">
              <p>
                Our website may use standard web technologies that collect anonymous usage data to help
                us improve the site experience. This data does not identify you personally.
              </p>
            </Section>

            <Section title="Data Retention and Deletion Requests">
              <p>
                If you would like to request that information you submitted through our website forms
                be deleted, please contact us at:
              </p>
              <p className="mt-2">
                <a
                  href={siteConfig.contact.emailLink}
                  className="text-navy font-700 hover:text-sky-brand transition-colors underline underline-offset-2"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>We will respond to deletion requests within a reasonable timeframe.</p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                Our website is intended for use by parents and guardians. We do not knowingly collect
                personal information directly from children. All inquiries are handled through adult
                caregivers.
              </p>
            </Section>

            <Section title="Contact">
              <p>For privacy questions or concerns, please reach out to us:</p>
              <div className="mt-3 space-y-1.5">
                <p>
                  <strong className="text-navy">Walking Little Star Daycare LLC</strong>
                </p>
                <p>
                  Phone:{" "}
                  <a href={siteConfig.contact.phoneLink} className="text-navy hover:text-sky-brand transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href={siteConfig.contact.emailLink} className="text-navy hover:text-sky-brand transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>Location: {siteConfig.contact.location}</p>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
};
