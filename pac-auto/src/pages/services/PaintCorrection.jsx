import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './PaintCorrection.css'

function PaintCorrection() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/PaintCorrection.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`pc-service-page ${isLoaded ? 'pc-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="pc-service-hero">
        <div className="pc-hero-background">
          <img src={serviceImage} alt="Paint Correction" className="pc-hero-bg-image" />
          <div className="pc-hero-overlay" />
        </div>
        <div className="pc-hero-content">
          <h1 className="hero-heading-generic">Paint Correction</h1>
          <p className="hero-subtitle-generic">Paint restoration • Surface correction • Expert detailing</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="pc-service-description-section">
        <div className="pc-container">
          <div className="pc-service-description-layout">
            {/* Left Side Image */}
            <div className="pc-service-description-image">
              <img src={serviceImage} alt="Paint Correction" className="pc-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="pc-service-description-content">
              <h2 className="hero-heading-generic">Paint Correction</h2>
              <p className="pc-service-short-description">
                Provides a cleaner and smoother appearance
              </p>
              <p className="pc-service-detailed-description">
                Paint correction is a detailing process that helps the car look like new.
 It removes dull spots, light scratches, and swirl marks that may come from washing or everyday use. 

The surface is carefully polished using professional methods to bring back its shine and look. It doesn't change the paint, but it does make it look much cleaner, smoother, and more even.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="pc-service-three-column-section">
        <div className="pc-container">
          <div className="pc-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="pc-service-content">
              <h3 className="pc-service-title">What's included in the service</h3>
              <ul className="pc-service-list">
                <li className="pc-list-item">Detailed car wash to get it ready</li>
                <li className="pc-list-item"> A check for scratches and marks on the paint</li>
                <li className="pc-list-item">Machine Polishing to get rid of swirls and small scratches</li>
                <li className="pc-list-item">Final touches to make the surface shiny and smooth.</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="pc-service-content">
              <h3 className="pc-service-title">Benefits of paint correction</h3>
              <ul className="pc-service-list">
                <li className="pc-list-item">Helps to remove dull spots, swirl marks, and light scratches.</li>
                <li className="pc-list-item">Restores  a clean, smooth paint surface</li>
                <li className="pc-list-item">Improves the car's shine and gloss </li>
                <li className="pc-list-item">Increases the value of the vehicle</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="pc-service-content">
              <h3 className="pc-service-title">It is ideal if:</h3>
              <ul className="pc-service-list">
                <li className="pc-list-item">Your car has swirl marks, light scratches, or dull paint</li>
                <li className="pc-list-item">You want to improve the shine and overall appearance of your car</li>
                <li className="pc-list-item">The paint looks faded or uneven in some areas</li>
                <li className="pc-list-item">You want your vehicle to look polished without repainting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="pc-luxury-appointment-section">
        <div className="pc-luxury-appointment-container">
          <div className="pc-luxury-appointment-content">
            <h2 className="pc-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="pc-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="pc-luxury-buttons">
              <Link to="/mobile-detailing" className="pc-luxury-btn pc-primary-luxury-btn">
                <span className="pc-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="pc-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="pc-luxury-btn pc-secondary-luxury-btn">
                <span className="pc-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="pc-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaintCorrection
