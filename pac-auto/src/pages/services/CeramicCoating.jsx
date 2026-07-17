import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './CeramicCoating.css'

function CeramicCoating() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/ceramicCoating.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`cc-service-page ${isLoaded ? 'cc-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="cc-service-hero">
        <div className="cc-hero-background">
          <img src={serviceImage} alt="Ceramic Coating" className="cc-hero-bg-image" />
          <div className="cc-hero-overlay" />
        </div>
        <div className="cc-hero-content">
          <h1 className="hero-heading-generic">Ceramic Coating</h1>
          <p className="hero-subtitle-generic">Paint protection • Ceramic shine • Expert application</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="cc-service-description-section">
        <div className="cc-container">
          <div className="cc-service-description-layout">
            {/* Left Side Image */}
            <div className="cc-service-description-image">
              <img src={serviceImage} alt="Ceramic Coating" className="cc-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="cc-service-description-content">
              <h2 className="hero-heading-generic">Ceramic Coating</h2>
              <p className="cc-service-short-description">
                Long-lasting shine and protection, every time you drive
              </p>
              <p className="cc-service-detailed-description">
                Ceramic coating is a liquid protective layer applied to your car's paint that bonds with the surface. It creates a strong, glossy shield that protects against dirt, UV rays, water spots, and light scratches.
 The coating makes your car easier to clean and keeps it looking freshly polished for much longer. It enhances shine while reducing damage from daily driving. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="cc-service-three-column-section">
        <div className="cc-container">
          <div className="cc-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="cc-service-content">
              <h3 className="cc-service-title">What's Included in the Service</h3>
              <ul className="cc-service-list">
                <li className="cc-list-item">Full exterior wash and surface preparation</li>
                <li className="cc-list-item">Professional ceramic coating application</li>
                <li className="cc-list-item">Even layering for a smooth, glossy finish</li>
                <li className="cc-list-item">Final curing and quality inspection</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="cc-service-content">
              <h3 className="cc-service-title">Benefits</h3>
              <ul className="cc-service-list">
                <li className="cc-list-item">Deep, long-lasting glossy shine</li>
                <li className="cc-list-item">Protects against UV rays, dirt, and stains</li>
                <li className="cc-list-item">Water and dust slide off easily (easy cleaning)</li>
                <li className="cc-list-item">Preserves paint and improves resale value</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="cc-service-content">
              <h3 className="cc-service-title">Ideal If</h3>
              <ul className="cc-service-list">
                <li className="cc-list-item">You want a long-lasting glossy finish</li>
                <li className="cc-list-item">You prefer low-maintenance car cleaning</li>
                <li className="cc-list-item">Your car is new or recently repainted</li>
                <li className="cc-list-item">You want protection against daily environmental damage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="cc-luxury-appointment-section">
        <div className="cc-luxury-appointment-container">
          <div className="cc-luxury-appointment-content">
            <h2 className="cc-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="cc-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="cc-luxury-buttons">
              <Link to="/mobile-detailing" className="cc-luxury-btn cc-primary-luxury-btn">
                <span className="cc-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="cc-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="cc-luxury-btn cc-secondary-luxury-btn">
                <span className="cc-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="cc-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CeramicCoating
