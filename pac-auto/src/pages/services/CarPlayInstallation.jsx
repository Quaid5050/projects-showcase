import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './CarPlayInstallation.css'

function CarPlayInstallation() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/carplay installation touchscreen dashboard modern car interior.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`cp-service-page ${isLoaded ? 'cp-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="cp-service-hero">
        <div className="cp-hero-background">
          <img src={serviceImage} alt="CarPlay Installation" className="cp-hero-bg-image" />
          <div className="cp-hero-overlay" />
        </div>
        <div className="cp-hero-content">
          <h1 className="hero-heading-generic">CarPlay Installation</h1>
          <p className="hero-subtitle-generic">Smart integration • Premium audio • Expert installation</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="cp-service-description-section">
        <div className="cp-container">
          <div className="cp-service-description-layout">
            {/* Left Side Image */}
            <div className="cp-service-description-image">
              <img src={serviceImage} alt="CarPlay Installation" className="cp-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="cp-service-description-content">
              <h2 className="hero-heading-generic">CarPlay Installation</h2>
              <p className="cp-service-short-description">
                Upgrade your car with Apple CarPlay integration
              </p>
              <p className="cp-service-detailed-description">
                CarPlay installation transforms your car's infotainment system into a cutting-edge Apple ecosystem. Our professional technicians seamlessly integrate CarPlay into your existing stereo system, giving you access to navigation, music, calls, and apps through your car's display. The installation maintains your car's original appearance while adding modern functionality and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="cp-service-three-column-section">
        <div className="cp-container">
          <div className="cp-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="cp-service-content">
              <h3 className="cp-service-title">What's included in the service</h3>
              <ul className="cp-service-list">
                <li className="cp-list-item">Professional CarPlay integration</li>
                <li className="cp-list-item">Wiring and setup</li>
                <li className="cp-list-item">Touchscreen calibration</li>
                <li className="cp-list-item">System testing and configuration</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="cp-service-content">
              <h3 className="cp-service-title">Benefits of CarPlay Installation</h3>
              <ul className="cp-service-list">
                <li className="cp-list-item">Access to Apple ecosystem</li>
                <li className="cp-list-item">Enhanced navigation and music</li>
                <li className="cp-list-item">Hands-free calling and messaging</li>
                <li className="cp-list-item">Modern infotainment upgrade</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="cp-service-content">
              <h3 className="cp-service-title">It's Ideal if:</h3>
              <ul className="cp-service-list">
                <li className="cp-list-item">You want Apple CarPlay functionality</li>
                <li className="cp-list-item">You have an iPhone or Apple device</li>
                <li className="cp-list-item">You want modern infotainment</li>
                <li className="cp-list-item">You want to upgrade your car's tech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="cp-luxury-appointment-section">
        <div className="cp-luxury-appointment-container">
          <div className="cp-luxury-appointment-content">
            <h2 className="cp-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="cp-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="cp-luxury-buttons">
              <Link to="/mobile-detailing" className="cp-luxury-btn cp-primary-luxury-btn">
                <span className="cp-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="cp-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="cp-luxury-btn cp-secondary-luxury-btn">
                <span className="cp-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="cp-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CarPlayInstallation
