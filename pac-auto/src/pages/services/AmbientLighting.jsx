import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AmbientLighting.css'

function AmbientLighting() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/ambientLighting.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`al-service-page ${isLoaded ? 'al-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="al-service-hero">
        <div className="al-hero-background">
          <img src={serviceImage} alt="Ambient Lighting" className="al-hero-bg-image" />
          <div className="al-hero-overlay" />
        </div>
        <div className="al-hero-content">
          <h1 className="hero-heading-generic">Ambient Lighting</h1>
          <p className="hero-subtitle-generic">Interior lighting • Custom solutions • Premium installation</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="al-service-description-section">
        <div className="al-container">
          <div className="al-service-description-layout">
            {/* Left Side Image */}
            <div className="al-service-description-image">
              <img src={serviceImage} alt="Ambient Lighting" className="al-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="al-service-description-content">
              <h2 className="hero-heading-generic">Ambient Lighting</h2>
              <p className="al-service-short-description">
                Soft lighting that changes inside look of your car
              </p>
              <p className="al-service-detailed-description">
                Ambient lighting is a simple interior upgrade that adds soft lights inside your car. It is fixed around doors, dashboard, and foot areas to create an aesthetic look. These lights can change colours and brightness. It makes night driving more relaxing and enhances your car's interior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="al-service-three-column-section">
        <div className="al-container">
          <div className="al-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="al-service-content">
              <h3 className="al-service-title">What's included in the service</h3>
              <ul className="al-service-list">
                <li className="al-list-item">Installation of tiny lights inside car</li>
                <li className="al-list-item">Connectivity and wiring for a tidy and secure setup</li>
                <li className="al-list-item">Adjustment and testing of colour and brightness of lights</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="al-service-content">
              <h3 className="al-service-title">Benefits of Ambient Lighting</h3>
              <ul className="al-service-list">
                <li className="al-list-item">Makes the interior of your car more contemporary and elegant</li>
                <li className="al-list-item">At night, it gives off a soft, calming light that makes it easier to see things inside car</li>
                <li className="al-list-item">Adds a unique look to interior</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="al-service-content">
              <h3 className="al-service-title">It's Ideal if:</h3>
              <ul className="al-service-list">
                <li className="al-list-item">You want your car to stand out at night</li>
                <li className="al-list-item">You like changing colours with your mood</li>
                <li className="al-list-item">You want a custom interior feeling</li>
                <li className="al-list-item">You want a simple upgrade that gets noticed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="al-luxury-appointment-section">
        <div className="al-luxury-appointment-container">
          <div className="al-luxury-appointment-content">
            <h2 className="al-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="al-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="al-luxury-buttons">
              <Link to="/mobile-detailing" className="al-luxury-btn al-primary-luxury-btn">
                <span className="al-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="al-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="al-luxury-btn al-secondary-luxury-btn">
                <span className="al-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="al-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AmbientLighting
