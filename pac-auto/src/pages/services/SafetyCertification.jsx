import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SafetyCertification.css'

function SafetyCertification() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/safetyService.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`sc-service-page ${isLoaded ? 'sc-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="sc-service-hero">
        <div className="sc-hero-background">
          <img src={serviceImage} alt="Safety Certification Service" className="sc-hero-bg-image" />
          <div className="sc-hero-overlay" />
        </div>
        <div className="sc-hero-content">
          <h1 className="hero-heading-generic">Safety Certification</h1>
          <p className="hero-subtitle-generic">Safety inspection • Certification standards • Expert evaluation</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="sc-service-description-section">
        <div className="sc-container">
          <div className="sc-service-description-layout">
            {/* Left Side Image */}
            <div className="sc-service-description-image">
              <img src={serviceImage} alt="Safety Certification Service" className="sc-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="sc-service-description-content">
              <h2 className="hero-heading-generic">Safety Certification</h2>
              <p className="sc-service-short-description">
                Certified safety you can rely on, every time you drive
              </p>
              <p className="sc-service-detailed-description">
                Safety certification service is a complete vehicle inspection to ensure your car meets all required safety standards. It includes checking key systems like brakes, tyres, lights, steering, suspension, and overall roadworthiness. The goal is to confirm that your vehicle is safe to drive without any hidden risks. After inspection, a safety certificate is issued once the vehicle passes all checks. It ensures peace of mind for both daily use and long journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="sc-service-three-column-section">
        <div className="sc-container">
          <div className="sc-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="sc-service-content">
              <h3 className="sc-service-title">What's Included in the Service</h3>
              <ul className="sc-service-list">
                <li className="sc-list-item">Full vehicle safety inspection</li>
                <li className="sc-list-item">Brake, tire, and steering system check</li>
                <li className="sc-list-item">Lights, indicators, and electrical check</li>
                <li className="sc-list-item">Suspension and structural condition review</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="sc-service-content">
              <h3 className="sc-service-title">Benefits</h3>
              <ul className="sc-service-list">
                <li className="sc-list-item">Ensures your car is safe for road use</li>
                <li className="sc-list-item">Identifies hidden mechanical issues early</li>
                <li className="sc-list-item">Reduces risk of breakdowns or accidents</li>
                <li className="sc-list-item">Provides official proof of vehicle safety</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="sc-service-content">
              <h3 className="sc-service-title">Ideal If</h3>
              <ul className="sc-service-list">
                <li className="sc-list-item">Your vehicle requires an official inspection or compliance</li>
                <li className="sc-list-item">You want to ensure complete driving safety</li>
                <li className="sc-list-item">You are planning long-distance travel</li>
                <li className="sc-list-item">You want peace of mind about your car's condition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="sc-luxury-appointment-section">
        <div className="sc-luxury-appointment-container">
          <div className="sc-luxury-appointment-content">
            <h2 className="sc-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="sc-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="sc-luxury-buttons">
              <Link to="/mobile-detailing" className="sc-luxury-btn sc-primary-luxury-btn">
                <span className="sc-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="sc-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="sc-luxury-btn sc-secondary-luxury-btn">
                <span className="sc-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="sc-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SafetyCertification
