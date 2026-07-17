import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './TireRepairing.css'

function TireRepairing() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/TyreService.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`tr-service-page ${isLoaded ? 'tr-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="tr-service-hero">
        <div className="tr-hero-background">
          <img src={serviceImage} alt="Tire Repairing" className="tr-hero-bg-image" />
          <div className="tr-hero-overlay" />
        </div>
        <div className="tr-hero-content">
          <h1 className="hero-heading-generic">Tire Repairing</h1>
          <p className="hero-subtitle-generic">Tyre maintenance • Expert repair • Quality service</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="tr-service-description-section">
        <div className="tr-container">
          <div className="tr-service-description-layout">
            {/* Left Side Image */}
            <div className="tr-service-description-image">
              <img src={serviceImage} alt="Tire Repairing" className="tr-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="tr-service-description-content">
              <h2 className="hero-heading-generic">Tire Repairing</h2>
              <p className="tr-service-short-description">
                Safe and reliable tire repair services
              </p>
              <p className="tr-service-detailed-description">
                Tire repair service involves fixing punctures, replacing damaged tires, and ensuring proper wheel alignment. Our expert technicians handle everything from patching small holes to complete tire replacement. We check tire pressure, balance wheels, and ensure your vehicle is safe for driving. Regular tire maintenance is crucial for your safety and fuel efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="tr-service-three-column-section">
        <div className="tr-container">
          <div className="tr-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="tr-service-content">
              <h3 className="tr-service-title">What's included in the service</h3>
              <ul className="tr-service-list">
                <li className="tr-list-item">Complete tire inspection and assessment</li>
                <li className="tr-list-item">Puncture repair and patching services</li>
                <li className="tr-list-item">Tire replacement and balancing</li>
                <li className="tr-list-item">Wheel alignment and pressure check</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="tr-service-content">
              <h3 className="tr-service-title">Benefits of Tire Repair</h3>
              <ul className="tr-service-list">
                <li className="tr-list-item">Ensures safe driving conditions</li>
                <li className="tr-list-item">Improves fuel efficiency</li>
                <li className="tr-list-item">Extends tire lifespan</li>
                <li className="tr-list-item">Prevents blowouts and accidents</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="tr-service-content">
              <h3 className="tr-service-title">It's Ideal if:</h3>
              <ul className="tr-service-list">
                <li className="tr-list-item">You have a flat tire or puncture</li>
                <li className="tr-list-item">Your tires are worn or damaged</li>
                <li className="tr-list-item">You notice vibration while driving</li>
                <li className="tr-list-item">Your tire pressure warning light is on</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="tr-luxury-appointment-section">
        <div className="tr-luxury-appointment-container">
          <div className="tr-luxury-appointment-content">
            <h2 className="tr-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="tr-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="tr-luxury-buttons">
              <Link to="/mobile-detailing" className="tr-luxury-btn tr-primary-luxury-btn">
                <span className="tr-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="tr-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="tr-luxury-btn tr-secondary-luxury-btn">
                <span className="tr-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="tr-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TireRepairing
