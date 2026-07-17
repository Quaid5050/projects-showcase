import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './CarDetailing.css'

function CarDetailing() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/CarDetailing.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`cd-service-page ${isLoaded ? 'cd-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="cd-service-hero">
        <div className="cd-hero-background">
          <img src={serviceImage} alt="Car Detailing" className="cd-hero-bg-image" />
          <div className="cd-hero-overlay" />
        </div>
        <div className="cd-hero-content">
          <h1 className="hero-heading-generic">Car Detailing</h1>
          <p className="hero-subtitle-generic">Interior cleaning • Exterior detailing • Professional service</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="cd-service-description-section">
        <div className="cd-container">
          <div className="cd-service-description-layout">
            {/* Left Side Image */}
            <div className="cd-service-description-image">
              <img src={serviceImage} alt="Car Detailing" className="cd-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="cd-service-description-content">
              <h2 className="hero-heading-generic">Car Detailing</h2>
              <p className="cd-service-short-description">
                A deep clean and a new, restored look for your car
              </p>
              <p className="cd-service-detailed-description">
                Car detailing is a thorough, deep-cleaning process that helps your car look and perform better. It cleans all areas of the car more deeply than a regular wash, including dirt and stains. The goal is to keep the car clean and maintained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="cd-service-three-column-section">
        <div className="cd-container">
          <div className="cd-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="cd-service-content">
              <h3 className="cd-service-title">What's Included in the service</h3>
              <ul className="cd-service-list">
                <li className="cd-list-item">Detailed car washing to remove dirt and stains.</li>
                <li className="cd-list-item">Cleaning the car from inside, which includes the floor, dashboard, and seats</li>
                <li className="cd-list-item">Final touch-up to make the car appear tidy, clean, and well-maintained </li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="cd-service-content">
              <h3 className="cd-service-title">Benefits of car detailing</h3>
              <ul className="cd-service-list">
                <li className="cd-list-item">It enhances the appearance of your vehicle </li>
                <li className="cd-list-item">Removes dirt and stains from inside and outside of the car</li>
                <li className="cd-list-item">Helps to maintain the car's condition</li>
                <li className="cd-list-item">Improves the overall appearance and comfort of the car</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="cd-service-content">
              <h3 className="cd-service-title">It's ideal if:</h3>
              <ul className="cd-service-list">
                <li className="cd-list-item">Your car is looking dirty; you haven't cleaned it in a while</li>
                <li className="cd-list-item">You want a fresh and clean feel inside your vehicle</li>
                <li className="cd-list-item">There are dust or stain marks on the seats and surfaces</li>
                <li className="cd-list-item">You want your car to look neat and well-maintained again</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="cd-luxury-appointment-section">
        <div className="cd-luxury-appointment-container">
          <div className="cd-luxury-appointment-content">
            <h2 className="cd-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="cd-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="cd-luxury-buttons">
              <Link to="/mobile-detailing" className="cd-luxury-btn cd-primary-luxury-btn">
                <span className="cd-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="cd-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="cd-luxury-btn cd-secondary-luxury-btn">
                <span className="cd-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="cd-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CarDetailing
