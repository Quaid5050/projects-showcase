import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import './BookingForm.css';

const services = [
  'House Washing',
  'Driveway Cleaning',
  'Patio & Deck Cleaning',
  'Siding Cleaning',
  'Walkway Cleaning',
  'Exterior Surface Cleaning',
  'Multiple Services',
];

const timeSlots = [
  '8:00 AM – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '',
    address: '', date: '', time: '', message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      alert('There was a problem sending your booking. Please call us at (672) 399-9637 or email Pranvueservices@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="success-icon">✓</div>
        <h2 className="booking-success__title">Booking Request Received!</h2>
        <p className="booking-success__text">
          Thank you! Your booking request has been received. We&apos;ll confirm the details shortly.
        </p>
        <div className="booking-success__details">
          <div className="booking-success__detail">
            <span className="booking-success__label">Name</span>
            <span className="booking-success__value">{form.name}</span>
          </div>
          <div className="booking-success__detail">
            <span className="booking-success__label">Service</span>
            <span className="booking-success__value">{form.service}</span>
          </div>
          <div className="booking-success__detail">
            <span className="booking-success__label">Date</span>
            <span className="booking-success__value">{form.date}</span>
          </div>
        </div>
        <p className="booking-success__contact">
          Questions? Call us at{' '}
          <a href="tel:+16723999637" className="booking-success__phone">(672) 399-9637</a>
        </p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-form__grid">
        {/* Row 1 */}
        <AnimatedSection animation="reveal" delay={0.1} className="form-group">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </AnimatedSection>

        <AnimatedSection animation="reveal" delay={0.15} className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="(672) 000-0000"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </AnimatedSection>

        {/* Row 2 */}
        <AnimatedSection animation="reveal" delay={0.2} className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </AnimatedSection>

        <AnimatedSection animation="reveal" delay={0.25} className="form-group">
          <label htmlFor="service" className="form-label">Service Needed *</label>
          <select
            id="service"
            name="service"
            className="form-select"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </AnimatedSection>

        {/* Row 3 - Full width */}
        <AnimatedSection animation="reveal" delay={0.3} className="form-group booking-form__full">
          <label htmlFor="address" className="form-label">Property Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            placeholder="123 Main Street, Surrey, BC"
            value={form.address}
            onChange={handleChange}
            required
            autoComplete="street-address"
          />
        </AnimatedSection>

        {/* Row 4 */}
        <AnimatedSection animation="reveal" delay={0.35} className="form-group">
          <label htmlFor="date" className="form-label">Preferred Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-input"
            value={form.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </AnimatedSection>

        <AnimatedSection animation="reveal" delay={0.4} className="form-group">
          <label htmlFor="time" className="form-label">Preferred Time</label>
          <select
            id="time"
            name="time"
            className="form-select"
            value={form.time}
            onChange={handleChange}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </AnimatedSection>

        {/* Row 5 - Full width */}
        <AnimatedSection animation="reveal" delay={0.45} className="form-group booking-form__full">
          <label htmlFor="message" className="form-label">Message / Notes</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Any special requests or notes about your property..."
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
        </AnimatedSection>
      </div>

      <AnimatedSection animation="reveal" delay={0.5} className="booking-form__submit">
        <button
          type="submit"
          className={`btn btn--primary btn--lg booking-form__btn${loading ? ' loading' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <span className="booking-form__spinner" />
          ) : (
            <>Book My Service <span className="btn-icon">→</span></>
          )}
        </button>
        <p className="booking-form__note">
          ✓ Free Estimates &nbsp;·&nbsp; ✓ Fast Response &nbsp;·&nbsp; ✓ No Hidden Charges
        </p>
      </AnimatedSection>
    </form>
  );
}
