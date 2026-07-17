import './MobileDetailing.css'
import '../styles/hero-headings.css'
import BookingForm from '../components/BookingForm'

function MobileDetailing() {
  return (
    <main className="booking-page">
      <section className="booking-hero" aria-label="Booking hero">
        <div className="booking-hero__bg" aria-hidden="true" />
        <div className="booking-hero__overlay" aria-hidden="true" />
        <div className="booking-hero__inner">
          <h1 className="booking-hero__title">Book Now</h1>
          <p className="booking-hero__subtitle">Mobile detailing • On-site service • Professional care</p>
        </div>
      </section>

      <section className="booking-content" aria-label="Booking content">
        <div className="booking-content__inner">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}

export default MobileDetailing
