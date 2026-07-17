import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './PaintProtectionFilm.css'

function PaintProtectionFilm() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/paint protection film glossy car surface close up.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`pp-service-page ${isLoaded ? 'pp-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="pp-service-hero">
        <div className="pp-hero-background">
          <img src={serviceImage} alt="Paint Protection Film" className="pp-hero-bg-image" />
          <div className="pp-hero-overlay" />
        </div>
        <div className="pp-hero-content">
          <h1 className="hero-heading-generic">Paint Protection Film</h1>
          <p className="hero-subtitle-generic">Paint protection • Ultimate defense • Expert installation</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="pp-service-description-section">
        <div className="pp-container">
          <div className="pp-service-description-layout">
            {/* Left Side Image */}
            <div className="pp-service-description-image">
              <img src={serviceImage} alt="Paint Protection Film" className="pp-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="pp-service-description-content">
              <h2 className="hero-heading-generic">Paint Protection Film</h2>
              <p className="pp-service-short-description">
                Protect your car's paint with premium film
              </p>
              <p className="pp-service-detailed-description">
                Paint protection film is a transparent layer applied to your car's paintwork to protect it from scratches, UV damage, and environmental factors. Our premium film provides superior clarity and durability while maintaining your car's original appearance. The film acts as a shield against stone chips, bird droppings, and minor abrasions, extending the life of your paint job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="pp-service-three-column-section">
        <div className="pp-container">
          <div className="pp-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="pp-service-content">
              <h3 className="pp-service-title">What's included in the service</h3>
              <ul className="pp-service-list">
                <li className="pp-list-item">Professional film installation</li>
                <li className="pp-list-item">Surface preparation and cleaning</li>
                <li className="pp-list-item">High-quality paint protection film</li>
                <li className="pp-list-item">Edge sealing and finishing</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="pp-service-content">
              <h3 className="pp-service-title">Benefits of Paint Protection Film</h3>
              <ul className="pp-service-list">
                <li className="pp-list-item">Protects against scratches and chips</li>
                <li className="pp-list-item">UV ray protection</li>
                <li className="pp-list-item">Maintains original paint appearance</li>
                <li className="pp-list-item">Easy to clean and maintain</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="pp-service-content">
              <h3 className="pp-service-title">It's Ideal if:</h3>
              <ul className="pp-service-list">
                <li className="pp-list-item">You want to preserve your car's paint</li>
                <li className="pp-list-item">You drive in areas with debris or road hazards</li>
                <li className="pp-list-item">You want to maintain resale value</li>
                <li className="pp-list-item">You want protection without changing appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="pp-luxury-appointment-section">
        <div className="pp-luxury-appointment-container">
          <div className="pp-luxury-appointment-content">
            <h2 className="pp-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="pp-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="pp-luxury-buttons">
              <Link to="/mobile-detailing" className="pp-luxury-btn pp-primary-luxury-btn">
                <span className="pp-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="pp-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="pp-luxury-btn pp-secondary-luxury-btn">
                <span className="pp-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="pp-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaintProtectionFilm
