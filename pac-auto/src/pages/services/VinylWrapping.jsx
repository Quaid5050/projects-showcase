import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './VinylWrapping.css'

function VinylWrapping() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/vinnylwrapping.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`vw-service-page ${isLoaded ? 'vw-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="vw-service-hero">
        <div className="vw-hero-background">
          <img src={serviceImage} alt="Vinyl Wrapping" className="vw-hero-bg-image" />
          <div className="vw-hero-overlay" />
        </div>
        <div className="vw-hero-content">
          <h1 className="hero-heading-generic">Vinyl Wrapping</h1>
          <p className="hero-subtitle-generic">Car transformation • Premium vinyl • Custom design</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="vw-service-description-section">
        <div className="vw-container">
          <div className="vw-service-description-layout">
            {/* Left Side Image */}
            <div className="vw-service-description-image">
              <img src={serviceImage} alt="Vinyl Wrapping" className="vw-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="vw-service-description-content">
              <h2 className="hero-heading-generic">Vinyl Wrapping</h2>
              <p className="vw-service-short-description">
                Unique design that is formal and resilient to damage
              </p>
              <p className="vw-service-detailed-description">
                Vinyl wrapping is a perfect solution to improve the appearance of your vehicle without requiring permanent paint modifications. This high-quality wrapping or film is applied professionally to the outer surface of your vehicle, which provides a protective layer against minor damage like sun damage and scratches. It also modifies the colour, finishing and design without affecting the original paint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="vw-service-three-column-section">
        <div className="vw-container">
          <div className="vw-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="vw-service-content">
              <h3 className="vw-service-title">What's included in the service</h3>
              <ul className="vw-service-list">
                <li className="vw-list-item">Car wash, to get rid of dirt and dust</li>
                <li className="vw-list-item">Careful vinyl wrapping on the surface</li>
                <li className="vw-list-item">Cutting and fitting to get smooth, clean edges</li>
                <li className="vw-list-item">Proper examination to make sure the finishing is perfect and even</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="vw-service-content">
              <h3 className="vw-service-title">Benefits of Vinyl Wrapping</h3>
              <ul className="vw-service-list">
                <li className="vw-list-item">It changes your car's look</li>
                <li className="vw-list-item">Helps protect the original paint from scratches</li>
                <li className="vw-list-item">You can easily remove it later without damage to the paint</li>
                <li className="vw-list-item">It is cheaper than a full repainting</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="vw-service-content">
              <h3 className="vw-service-title">It's Ideal if:</h3>
              <ul className="vw-service-list">
                <li className="vw-list-item">You drive your car every day and want to keep it clean</li>
                <li className="vw-list-item">It's a display car or custom model that needs a good polish</li>
                <li className="vw-list-item">People who want their car to look new and shiny every time</li>
                <li className="vw-list-item">It's a new car that needs to be protected immediately</li>
                <li className="vw-list-item">It's a luxury car that needs more care and attention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="vw-luxury-appointment-section">
        <div className="vw-luxury-appointment-container">
          <div className="vw-luxury-appointment-content">
            <h2 className="vw-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="vw-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="vw-luxury-buttons">
              <Link to="/mobile-detailing" className="vw-luxury-btn vw-primary-luxury-btn">
                <span className="vw-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="vw-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="vw-luxury-btn vw-secondary-luxury-btn">
                <span className="vw-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="vw-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VinylWrapping
