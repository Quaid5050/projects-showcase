import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './OilChange.css'

function OilChange() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/dieselService.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`oc-service-page ${isLoaded ? 'oc-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="oc-service-hero">
        <div className="oc-hero-background">
          <img src={serviceImage} alt="Oil Change" className="oc-hero-bg-image" />
          <div className="oc-hero-overlay" />
        </div>
        <div className="oc-hero-content">
          <h1 className="hero-heading-generic">Oil Change</h1>
          <p className="hero-subtitle-generic">Premium engine maintenance • Performance optimization • Expert service</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="oc-service-description-section">
        <div className="oc-container">
          <div className="oc-service-description-layout">
            {/* Left Side Image */}
            <div className="oc-service-description-image">
              <img src={serviceImage} alt="Oil Change" className="oc-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="oc-service-description-content">
              <h2 className="oc-service-title">Oil Change</h2>
              <p className="oc-service-short-description">
                Smooth engine performance in every drive
              </p>
              <p className="oc-service-detailed-description">
                Oil changing service involves replacing old engine oil with fresh, high-quality oil to keep your engine running smoothly. It also includes replacing oil filter to remove dirt and metal particles. Clean oil reduces friction, prevents overheating, and improves overall engine performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="oc-service-three-column-section">
        <div className="oc-container">
          <div className="oc-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="oc-service-content">
              <h3 className="oc-service-title">What's included in the service</h3>
              <ul className="oc-service-list">
                <li className="oc-list-item">Draining old engine oil completely</li>
                <li className="oc-list-item">Replacing oil filter with new one</li>
                <li className="oc-list-item">Filling with high-quality fresh oil</li>
                <li className="oc-list-item">Final check for leaks and proper oil level</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="oc-service-content">
              <h3 className="oc-service-title">Benefits of Oil Change</h3>
              <ul className="oc-service-list">
                <li className="oc-list-item">Improves engine performance and efficiency</li>
                <li className="oc-list-item">Reduces friction and wear on engine parts</li>
                <li className="oc-list-item">Helps prevent overheating and engine damage</li>
                <li className="oc-list-item">Extends engine life and reliability</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="oc-service-content">
              <h3 className="oc-service-title">It's Ideal if:</h3>
              <ul className="oc-service-list">
                <li className="oc-list-item">Your engine oil looks dark or dirty</li>
                <li className="oc-list-item">You hear unusual engine noises</li>
                <li className="oc-list-item">Your car has reduced performance or fuel efficiency</li>
                <li className="oc-list-item">It's been more than 5,000 km since last oil change</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="oc-luxury-appointment-section">
        <div className="oc-luxury-appointment-container">
          <div className="oc-luxury-appointment-content">
            <h2 className="oc-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="oc-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="oc-luxury-buttons">
              <Link to="/mobile-detailing" className="oc-luxury-btn oc-primary-luxury-btn">
                <span className="oc-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="oc-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="oc-luxury-btn oc-secondary-luxury-btn">
                <span className="oc-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="oc-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OilChange
