import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      alert('There was a problem sending your message. Please call us at (672) 399-9637 or email Pranvueservices@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <PageHero
        title="Get In Touch"
        subtitle="Have a question or need help choosing a service? We're here and happy to help."
        bgImage="/images/contact-hero.jpg"
        breadcrumbs={[{ name: 'Contact' }]}
        badge="Let's Connect"
        size="small"
      />

      <section className="section section--soft contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Info Column */}
            <AnimatedSection animation="reveal-left" className="contact-info">
              <div className="section-eyebrow left-align">Contact Details</div>
              <h2 className="section-title left-align">We&apos;d Love to Hear From You</h2>
              <div className="divider divider--left" />
              <p className="contact-info__text">
                Need help choosing a service? Contact us and we&apos;ll be happy to assist.
                Whether it&apos;s a quick question or a full property assessment, we&apos;re ready to help.
              </p>

              <div className="contact-details">
                <a href="tel:+16723999637" className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-value">(672) 399-9637</div>
                  </div>
                </a>
                <a href="mailto:Pranvueservices@gmail.com" className="contact-detail-item">
                  <div className="contact-detail-icon">✉️</div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">Pranvueservices@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://instagram.com/Pranvue_services.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail-item"
                >
                  <div className="contact-detail-icon">📸</div>
                  <div>
                    <div className="contact-detail-label">Instagram</div>
                    <div className="contact-detail-value">@Pranvue_services.ca</div>
                  </div>
                </a>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <div className="contact-detail-label">Service Areas</div>
                    <div className="contact-detail-value">Surrey · White Rock · Langley · Surrounding Areas</div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-hours">
                <h3 className="contact-hours__title">Response Time</h3>
                <p className="contact-hours__text">
                  We aim to respond to all inquiries quickly — typically within a few hours
                  during business hours. Send us a message and we&apos;ll get back to you shortly.
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="reveal-right" className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="contact-form__title">Send Us a Message</h3>

                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="form-input"
                      placeholder="(672) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your property and what you're looking for..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn--primary btn--lg contact-form__btn${loading ? ' loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? <span className="booking-form__spinner" /> : <>Send Message <span className="btn-icon">→</span></>}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
