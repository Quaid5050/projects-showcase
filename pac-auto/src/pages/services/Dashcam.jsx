import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Dashcam.css'

function Dashcam() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/car dashcam installation dashboard view modern car tech.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`dc-service-page ${isLoaded ? 'dc-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="dc-service-hero">
        <div className="dc-hero-background">
          <img src={serviceImage} alt="Dashcam" className="dc-hero-bg-image" />
          <div className="dc-hero-overlay" />
        </div>
        <div className="dc-hero-content">
          <h1 className="hero-heading-generic">Dashcam Installation</h1>
          <p className="hero-subtitle-generic">Safety recording • Advanced security • Expert installation</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="dc-service-description-section">
        <div className="dc-container">
          <div className="dc-service-description-layout">
            {/* Left Side Image */}
            <div className="dc-service-description-image">
              <img src={serviceImage} alt="Dashcam" className="dc-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="dc-service-description-content">
              <h2 className="hero-heading-generic">Dashcam Installation</h2>
              <p className="dc-service-short-description">
                Drive with proof, safety, and peace of mind
              </p>
              <p className="dc-service-detailed-description">
                A dashcam in your car is a reliable way to record everything that happens on road. It gives you clear video proof in case of accidents, making your drive safe, and helps you stay out of trouble. As long as wiring is clean and setup is right, it works perfectly and doesn't affect interior of your car.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="dc-service-three-column-section">
        <div className="dc-container">
          <div className="dc-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="dc-service-content">
              <h3 className="dc-service-title">What's included in the service</h3>
              <ul className="dc-service-list">
                <li className="dc-list-item">Clean wiring setup (no messy cables hanging)</li>
                <li className="dc-list-item">Proper camera placement for the best front & rear view</li>
                <li className="dc-list-item">Secure mounting so it stays firm on every drive</li>
                <li className="dc-list-item">Basic setup & testing so it's ready to record instantly</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="dc-service-content">
              <h3 className="dc-service-title">Benefits of Dashcam</h3>
              <ul className="dc-service-list">
                <li className="dc-list-item">Peace of mind while driving and parking</li>
                <li className="dc-list-item">Clear video proof in case of accidents</li>
                <li className="dc-list-item">Helps protect you from false claims</li>
                <li className="dc-list-item">Keep an extra eye on your car when you're away</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="dc-service-content">
              <h3 className="dc-service-title">It's Ideal if:</h3>
              <ul className="dc-service-list">
                <li className="dc-list-item">You drive daily or spend long hours on the road</li>
                <li className="dc-list-item">You park your car outside or in public areas</li>
                <li className="dc-list-item">You want extra safety and security for your vehicle</li>
                <li className="dc-list-item">You prefer having video proof for insurance or disputes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="dc-luxury-appointment-section">
        <div className="dc-luxury-appointment-container">
          <div className="dc-luxury-appointment-content">
            <h2 className="dc-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="dc-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="dc-luxury-buttons">
              <Link to="/mobile-detailing" className="dc-luxury-btn dc-primary-luxury-btn">
                <span className="dc-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="dc-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="dc-luxury-btn dc-secondary-luxury-btn">
                <span className="dc-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="dc-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashcam
