import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import './FAQ.css';

const faqs = [
  {
    q: 'Do you provide free estimates?',
    a: 'Yes, we provide free estimates for homeowners. Contact us by phone, email, or through our booking form and we\'ll assess your needs with no obligation. We want you to feel confident before committing to any service.',
  },
  {
    q: 'How fast do you respond?',
    a: 'We aim to respond quickly and confirm your booking details as soon as possible — typically within a few hours during business hours. We understand your time is valuable and make responsiveness a priority.',
  },
  {
    q: 'Do you have hidden charges?',
    a: 'No. We believe in honest communication and clear pricing. The estimate we provide reflects the actual cost of the service. There are no surprise fees at the end of a job.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Surrey, White Rock, Langley, and surrounding areas. If you\'re not sure whether we cover your location, reach out and we\'ll let you know.',
  },
  {
    q: 'What services do you offer?',
    a: 'We provide house washing, driveway cleaning, patio and deck cleaning, siding cleaning, walkway cleaning, and exterior surface cleaning. Each service is available as a standalone or as part of a combined property clean.',
  },
  {
    q: 'How often should I have my home washed?',
    a: 'For most homes, once a year is a good starting point. If your property is in a shaded area, near trees, or has a history of algae growth, more frequent cleaning may be beneficial. We can advise based on your specific situation.',
  },
  {
    q: 'Is pressure washing safe for my siding?',
    a: 'Yes, when done correctly. We assess your siding type before choosing the technique. For delicate surfaces like vinyl or painted wood, we use a soft wash approach with lower pressure and appropriate cleaning solutions.',
  },
  {
    q: 'What is soft washing?',
    a: 'Soft washing uses low water pressure combined with eco-safe cleaning solutions to remove biological growth, algae, and buildup without the risk of surface damage. It\'s ideal for siding, roofs, and other sensitive surfaces.',
  },
  {
    q: 'Do I need to be home during the service?',
    a: 'Not necessarily. We just need access to the area being cleaned and access to a water source. We\'ll communicate everything you need to know before the appointment.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment details are discussed at the time of booking. We keep the process simple and straightforward. No payment is required upfront — we invoice after the work is completed to your satisfaction.',
  },
  {
    q: 'What if I\'m not satisfied?',
    a: 'Your satisfaction is our priority. If you\'re not happy with any aspect of the work, let us know right away and we\'ll make it right. We don\'t consider a job done until you\'re satisfied.',
  },
  {
    q: 'Do you clean in the rain?',
    a: 'Light rain typically doesn\'t affect pressure washing results. For heavy rain or severe weather, we\'ll reschedule at no cost to ensure we can do the job properly and safely.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item${open ? ' open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question" role="button" aria-expanded={open} tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}>
        {q}
        <div className="faq-icon" aria-hidden="true">+</div>
      </div>
      <div className="faq-answer">{a}</div>
    </div>
  );
}

export default function FAQ() {
  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our pressure washing services."
        bgImage="/images/faq-hero.jpg"
        breadcrumbs={[{ name: 'FAQ' }]}
        badge="Questions & Answers"
        size="small"
      />

      <section className="section section--white">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-sidebar">
              <AnimatedSection animation="reveal-left">
                <div className="section-eyebrow left-align">Quick Info</div>
                <h2 className="section-title left-align" style={{ fontSize: 'var(--text-3xl)' }}>
                  Still Have Questions?
                </h2>
                <div className="divider divider--left" />
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                  Can&apos;t find the answer you&apos;re looking for? Reach out directly and we&apos;ll be happy to help.
                </p>
                <div className="faq-contact-options">
                  <a href="tel:+16723999637" className="faq-contact-option">
                    <span className="faq-contact-option__icon">📞</span>
                    <div>
                      <div className="faq-contact-option__label">Call Us</div>
                      <div className="faq-contact-option__value">(672) 399-9637</div>
                    </div>
                  </a>
                  <a href="mailto:sheoranprince42@gmail.com" className="faq-contact-option">
                    <span className="faq-contact-option__icon">✉️</span>
                    <div>
                      <div className="faq-contact-option__label">Email Us</div>
                      <div className="faq-contact-option__value">sheoranprince42@gmail.com</div>
                    </div>
                  </a>
                </div>
                <Link to="/booking" className="btn btn--primary" style={{ marginTop: '32px', width: '100%', justifyContent: 'center' }}>
                  Book Your Service <span className="btn-icon">→</span>
                </Link>
              </AnimatedSection>
            </div>

            <div className="faq-list">
              <AnimatedSection animation="reveal" className="section-header" style={{ textAlign: 'left', marginLeft: 0 }}>
                <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>All FAQs</div>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Common Questions</h2>
                <div className="divider divider--left" />
              </AnimatedSection>

              {faqs.map((faq, i) => (
                <AnimatedSection key={i} animation="reveal" delay={i * 0.05}>
                  <FAQItem q={faq.q} a={faq.a} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Book your service or contact us for your free estimate today."
      />
    </main>
  );
}
