import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './StarlightHeadliner.css'

function StarlightHeadliner() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [serviceImage, setServiceImage] = useState('/starLight.jpg')

  useEffect(() => {
    setIsLoaded(true)
    const stateImage = location.state?.image
    if (stateImage) {
      setServiceImage(stateImage)
    }
  }, [location.state])

  return (
    <main className={`sh-service-page ${isLoaded ? 'sh-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="sh-service-hero">
        <div className="sh-hero-background">
          <img src={serviceImage} alt="Starlight Headliner" className="sh-hero-bg-image" />
          <div className="sh-hero-overlay" />
        </div>
        <div className="sh-hero-content">
          <h1 className="hero-heading-generic">Starlight Headliner</h1>
          <p className="hero-subtitle-generic">Luxury lighting • Star installation • Premium design</p>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="sh-service-description-section">
        <div className="sh-container">
          <div className="sh-service-description-layout">
            {/* Left Side Image */}
            <div className="sh-service-description-image">
              <img src={serviceImage} alt="Starlight Headliner" className="sh-description-main-image" />
            </div>

            {/* Right Side Content */}
            <div className="sh-service-description-content">
              <h2 className="hero-heading-generic">Starlight Headliner</h2>
              <p className="sh-service-short-description">
                Add a starry night sky to your car's ceiling
              </p>
              <p className="sh-service-detailed-description">
                Starlight headliner is a premium interior upgrade that adds hundreds of tiny LED lights to your car's ceiling, creating a stunning starry night sky effect. These fiber optic lights can be customized to different colors and brightness levels, giving your car a unique and luxurious atmosphere. It's perfect for creating a romantic ambiance or making your car stand out at night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section - Direct on Background */}
      <section className="sh-service-three-column-section">
        <div className="sh-container">
          <div className="sh-three-column-layout">
            {/* Column 1: What's Included */}
            <div className="sh-service-content">
              <h3 className="sh-service-title">What's included in the service</h3>
              <ul className="sh-service-list">
                <li className="sh-list-item">Premium fiber optic starlight installation</li>
                <li className="sh-list-item">Custom color and brightness options</li>
                <li className="sh-list-item">Professional wiring and setup</li>
                <li className="sh-list-item">Remote control for easy operation</li>
              </ul>
            </div>

            {/* Column 2: Benefits */}
            <div className="sh-service-content">
              <h3 className="sh-service-title">Benefits of Starlight Headliner</h3>
              <ul className="sh-service-list">
                <li className="sh-list-item">Creates stunning starry night sky effect</li>
                <li className="sh-list-item">Customizable colors and brightness</li>
                <li className="sh-list-item">Adds luxury and unique ambiance</li>
                <li className="sh-list-item">Perfect for romantic or show car look</li>
              </ul>
            </div>

            {/* Column 3: Ideal For */}
            <div className="sh-service-content">
              <h3 className="sh-service-title">It's Ideal if:</h3>
              <ul className="sh-service-list">
                <li className="sh-list-item">You want a unique interior upgrade</li>
                <li className="sh-list-item">You love customizing your car's look</li>
                <li className="sh-list-item">You want to stand out at car shows</li>
                <li className="sh-list-item">You enjoy premium interior features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Appointment Section */}
      <section className="sh-luxury-appointment-section">
        <div className="sh-luxury-appointment-container">
          <div className="sh-luxury-appointment-content">
            <h2 className="sh-luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="sh-luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="sh-luxury-buttons">
              <Link to="/mobile-detailing" className="sh-luxury-btn sh-primary-luxury-btn">
                <span className="sh-luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="sh-luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="sh-luxury-btn sh-secondary-luxury-btn">
                <span className="sh-luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="sh-luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StarlightHeadliner
