import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BrakeRepair.css'

function BrakeRepair() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/BrakeSysytemService.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`br-service-page ${isLoaded ? 'br-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="br-service-hero">
        <div className="br-hero-background">
          <img src={serviceImage} alt="Brake Repair" className="br-hero-bg-image" />
          <div className="br-hero-overlay" />
        </div>
        <div className="br-hero-content">
          <h1 className="hero-heading-generic">Brake Repair</h1>
          <p className="hero-subtitle-generic">Brake safety • Stopping power • Expert service</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="br-service-description-section">
        <div className="br-container">
          <div className="br-service-description-layout">
            {/* Left Side Image */}
            <div className="br-service-description-image">
              <img src={serviceImage} alt="Brake Repair" className="br-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="br-service-description-content">
              <h2 className="hero-heading-generic">Brake Repair</h2>
              <p className="br-service-short-description">
                Safe stopping power you can trust, every time you drive
              </p>
              <p className="br-service-detailed-description">
                Brake repair service focuses on inspecting and fixing your vehicle's braking system to ensure maximum safety and control. It includes checking brake pads, discs, fluid levels, and overall braking performance. Any worn or damaged parts are repaired or replaced to restore proper stopping power. The service ensures your brakes respond quickly and smoothly in all driving conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="br-service-three-column-section">
        <div className="br-container">
          <div className="br-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="br-service-content">
              <h3 className="br-service-title">What's included in the service</h3>
              <ul className="br-service-list">
                <li className="br-list-item">Full brake system inspection (pads, discs, callipers)</li>
                <li className="br-list-item">Brake pad cleaning or replacement if needed</li>
                <li className="br-list-item">Brake fluid level check and top-up</li>
                <li className="br-list-item">Testing braking performance for safety</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="br-service-content">
              <h3 className="br-service-title">Benefits of Brake Repair</h3>
              <ul className="br-service-list">
                <li className="br-list-item">Ensures quick and safe stopping response</li>
                <li className="br-list-item">Improves overall driving safety</li>
                <li className="br-list-item">Reduces risk of brake failure</li>
                <li className="br-list-item">Enhances control in emergencies</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="br-service-content">
              <h3 className="br-service-title">It's Ideal if:</h3>
              <ul className="br-service-list">
                <li className="br-list-item">You hear squeaking or grinding noises while braking</li>
                <li className="br-list-item">Your brakes feel weak or delayed</li>
                <li className="br-list-item">Your car vibrates when stopping</li>
                <li className="br-list-item">You want to ensure maximum road safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="br-luxury-appointment-section">
        <div className="br-luxury-appointment-container">
          <div className="br-luxury-appointment-content">
            <h2 className="br-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="br-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="br-luxury-buttons">
              <Link to="/mobile-detailing" className="br-luxury-btn br-primary-luxury-btn">
                <span className="br-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="br-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="br-luxury-btn br-secondary-luxury-btn">
                <span className="br-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="br-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BrakeRepair
