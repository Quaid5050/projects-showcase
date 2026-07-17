import PageHero from '../components/PageHero';
import BookingForm from '../components/BookingForm';
import AnimatedSection from '../components/AnimatedSection';
import './Booking.css';

const benefits = [
  { icon: '💰', text: 'Free Estimates' },
  { icon: '⚡', text: 'Fast Response Times' },
  { icon: '📅', text: 'Flexible Scheduling' },
  { icon: '✅', text: 'No Hidden Charges' },
  { icon: '🏠', text: 'House Washing Starting at $389' },
  { icon: '📞', text: 'Call (672) 399-9637 Anytime' },
];

export default function Booking() {
  return (
    <main>
      <PageHero
        title="Book Your Service"
        subtitle="Choose a date and time that works best for you, and we'll handle the rest."
        bgImage="/images/booking-hero.jpg"
        breadcrumbs={[{ name: 'Booking' }]}
        badge="Easy Online Booking"
        size="small"
      />

      <section className="section section--soft booking-section">
        <div className="container">
          <div className="booking-layout">
            {/* Sidebar */}
            <AnimatedSection animation="reveal-left" className="booking-sidebar">
              <div className="booking-sidebar__inner card--glass-light">
                <h2 className="booking-sidebar__title">Why Book With Us</h2>
                <div className="booking-sidebar__benefits">
                  {benefits.map((b) => (
                    <div key={b.text} className="booking-sidebar__benefit">
                      <span className="booking-sidebar__benefit-icon">{b.icon}</span>
                      <span className="booking-sidebar__benefit-text">{b.text}</span>
                    </div>
                  ))}
                </div>

                <div className="booking-sidebar__contact">
                  <h3 className="booking-sidebar__contact-title">Prefer to Talk?</h3>
                  <a href="tel:+16723999637" className="booking-sidebar__phone">
                    📞 (672) 399-9637
                  </a>
                  <a href="mailto:sheoranprince42@gmail.com" className="booking-sidebar__email">
                    ✉️ sheoranprince42@gmail.com
                  </a>
                </div>

                <div className="booking-sidebar__areas">
                  <h3 className="booking-sidebar__areas-title">Service Areas</h3>
                  <div className="booking-sidebar__areas-list">
                    {['Surrey', 'White Rock', 'Langley', 'Surrounding Areas'].map((a) => (
                      <span key={a} className="booking-sidebar__area-tag">📍 {a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="reveal-right" className="booking-form-wrapper">
              <div className="booking-form-wrapper__inner">
                <div className="booking-form-wrapper__header">
                  <h2 className="booking-form-wrapper__title">Request a Booking</h2>
                  <p className="booking-form-wrapper__sub">
                    Fill in your details below and we&apos;ll get back to you quickly to confirm your appointment.
                  </p>
                </div>
                <BookingForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
