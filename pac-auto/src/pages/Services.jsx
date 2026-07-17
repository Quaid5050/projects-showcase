import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import '../styles/hero-headings.css'
import { TITLE_TO_ROUTE } from '../utils/routeConstants'

const CAROUSEL_SERVICES = [
  {
    id: 1,
    title: 'Vinyl Wrapping',
    description: 'Premium car transformation with custom vinyl designs for a unique and protected finish.',
    image: '/vinnylwrapping.jpg',
    tag: 'Most Popular',
    features: ['Custom Designs', 'Paint Protection', 'Color Change', 'Professional Installation']
  },
  {
    id: 2,
    title: 'Paint Correction',
    description: 'Professional paint restoration and surface correction for showroom-quality finish.',
    image: '/PaintCorrection.jpg',
    tag: 'Expert Service',
    features: ['Swirl Removal', 'Scratch Correction', 'Gloss Enhancement', 'Surface Restoration']
  },
  {
    id: 3,
    title: 'Car Detailing',
    description: 'Complete interior and exterior detailing service for showroom-level perfection.',
    image: '/CarDetailing.jpg',
    tag: 'Premium Service',
    features: ['Interior Deep Clean', 'Exterior Polish', 'Leather Treatment', 'Showroom Finish']
  },
  {
    id: 4,
    title: 'Paint Protection Film',
    description: 'Ultimate paint protection with transparent film against chips and environmental damage.',
    image: '/paint protection film glossy car surface close up.jpg',
    tag: 'Protection',
    features: ['PPF Installation', 'Self-Healing Film', 'Invisible Protection', 'Long-term Durability']
  },
  {
    id: 5,
    title: 'Ceramic Coating',
    description: 'Advanced paint protection and shine with hydrophobic ceramic coating technology.',
    image: '/ceramicCoating.jpg',
    tag: 'High Performance',
    features: ['Hydrophobic Protection', 'Gloss Enhancement', 'Chemical Resistance', 'Easy Maintenance']
  },
  {
    id: 6,
    title: 'Ambient Lighting',
    description: 'Custom interior LED lighting solutions for enhanced vehicle aesthetics and ambiance.',
    image: '/ambientLighting.jpg',
    tag: 'Customization',
    features: ['LED Installation', 'Color Options', 'Remote Control', 'Professional Setup']
  },
]

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const intervalRef = useRef(null)
  const touchStartX = useRef(0)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SERVICES.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SERVICES.length) % CAROUSEL_SERVICES.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 800)
  }

  // Auto-play with error handling
  useEffect(() => {
    if (!isHovered && !isAnimating) {
      intervalRef.current = setInterval(() => {
        try {
          nextSlide()
        } catch (error) {
          // Ignore AbortError from animation interruptions
          if (error.name !== 'AbortError') {
            console.error('Auto-play error:', error)
          }
        }
      }, 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isHovered, isAnimating, nextSlide])

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
  }

  const getSlidePosition = (index) => {
    const diff = index - currentIndex
    if (diff === 0) return 'active'
    if (diff === 1 || diff === -(CAROUSEL_SERVICES.length - 1)) return 'next'
    if (diff === -1 || diff === CAROUSEL_SERVICES.length - 1) return 'prev'
    return 'hidden'
  }

  return (
    <main className="services-page">
      {/* Animated Background */}
      <div className="services-bg-effects">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      {/* Hero Section */}
      <section className={`services-hero ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-background">
          <img src="/CarServiceMan1.jpg" alt="Premium Car Services" className="hero-bg-image" />
          <div className="hero-overlay" />
        </div>
        <div className="services-hero__content">
            <h1 className="services-hero__title">Our Premium Services</h1>
            <p className="services-hero__subtitle">Professional automotive care • Expert solutions • Exceptional quality</p>
          </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel" />
          </div>
        </div>
      </section>

      
      {/* Feature Grid Below Carousel */}
      <section className={`services-features ${isLoaded ? 'loaded' : ''}`}>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4>24/7 Service</h4>
            <p>Round the clock availability</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4>Premium Quality</h4>
            <p>Best products and techniques</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
              </svg>
            </div>
            <h4>Certified Experts</h4>
            <p>Trained professionals</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h4>Secure Service</h4>
            <p>Your vehicle is protected</p>
          </div>
        </div>
      </section>
      {/* Service Image Gallery with Loading Effects */}
      <section className={`service-image-gallery ${isLoaded ? 'loaded' : ''}`}>
        <div className="gallery-header">
          <h2>Our Services</h2>
          <p>Explore our premium services and transformations</p>
        </div>
        <div className="service-gallery-grid">
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/vinnylwrapping.jpg" alt="Vinyl Wrapping" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Vinyl Wrapping</h3>
                <p className="service-gallery-description">Premium car transformation with custom vinyl designs</p>
                <Link to={TITLE_TO_ROUTE['Vinyl Wrapping']} state={{ image: '/vinnylwrapping.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/PaintCorrection.jpg" alt="Paint Correction" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Paint Correction</h3>
                <p className="service-gallery-description">Professional paint restoration and surface correction</p>
                <Link to={TITLE_TO_ROUTE['Paint Correction']} state={{ image: '/PaintCorrection.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/CarDetailing.jpg" alt="Car Detailing" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Car Detailing</h3>
                <p className="service-gallery-description">Professional interior and exterior detailing service</p>
                <Link to={TITLE_TO_ROUTE['Car Detailing']} state={{ image: '/CarDetailing.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/ambientLighting.jpg" alt="Ambient Lighting" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Ambient Lighting</h3>
                <p className="service-gallery-description">Custom interior LED lighting solutions</p>
                <Link to={TITLE_TO_ROUTE['Ambient Lighting']} state={{ image: '/ambientLighting.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/starLight.jpg" alt="Starlight Headliner" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Starlight Headliner</h3>
                <p className="service-gallery-description">Luxury ceiling starlight installation</p>
                <Link to={TITLE_TO_ROUTE['Starlight Headliner']} state={{ image: '/starLight.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/car dashcam installation dashboard view modern car tech.jpg" alt="Dashcam Installation" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Dashcam Installation</h3>
                <p className="service-gallery-description">Advanced safety and security recording system</p>
                <Link to={TITLE_TO_ROUTE['Dashcam Installation']} state={{ image: '/car dashcam installation dashboard view modern car tech.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/carplay installation touchscreen dashboard modern car interior.jpg" alt="CarPlay Installation" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">CarPlay Installation</h3>
                <p className="service-gallery-description">Seamless smartphone integration in your car</p>
                <Link to={TITLE_TO_ROUTE['CarPlay Installation']} state={{ image: '/carplay installation touchscreen dashboard modern car interior.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/BrakeSysytemService.jpg" alt="Brake System Service" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Brake System Service</h3>
                <p className="service-gallery-description">Professional brake system inspection and service</p>
                <Link to="/services/brake-repair" state={{ image: '/BrakeSysytemService.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/TyreService.jpg" alt="Tire Repairing" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Tire Repairing</h3>
                <p className="service-gallery-description">Expert tyre services and maintenance</p>
                <Link to="/services/tire-repairing" state={{ image: '/TyreService.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/dieselService.jpg" alt="Oil Change" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Oil Change</h3>
                <p className="service-gallery-description">Smooth engine performance in every drive</p>
                <Link to="/services/oil-change" state={{ image: '/dieselService.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/ceramicCoating.jpg" alt="Ceramic Coating" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Ceramic Coating</h3>
                <p className="service-gallery-description">Advanced paint protection and shine</p>
                <Link to={TITLE_TO_ROUTE['Ceramic Coating']} state={{ image: '/ceramicCoating.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/paint protection film glossy car surface close up.jpg" alt="Paint Protection Film" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Paint Protection Film</h3>
                <p className="service-gallery-description">Ultimate paint protection solution</p>
                <Link to={TITLE_TO_ROUTE['Paint Protection Film']} state={{ image: '/paint protection film glossy car surface close up.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/Interior deep cleaning.jpg" alt="Interior Cleaning" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Interior Cleaning</h3>
                <p className="service-gallery-description">Deep interior cleaning and sanitization service</p>
                <Link to="/services/detailing" state={{ image: '/Interior deep cleaning.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/mobile car detailing driveway luxury car wash foam.jpg" alt="Mobile Detailing" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Mobile Detailing</h3>
                <p className="service-gallery-description">Mobile detailing service at your location</p>
                <Link to="/services/detailing" state={{ image: '/mobile car detailing driveway luxury car wash foam.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
          <div className="service-gallery-item">
            <div className="service-gallery-image-wrapper">
              <img src="/safetyService.jpg" alt="Safety Certification" className="service-gallery-image" />
              <div className="service-gallery-content">
                <h3 className="service-gallery-title">Safety Certification</h3>
                <p className="service-gallery-description">Complete vehicle safety inspection and certification</p>
                <Link to="/services/safety-certification" state={{ image: '/safetyService.jpg' }} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <section className={`services-testimonials ${isLoaded ? 'loaded' : ''}`}>
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2>Client Testimonials</h2>
            <p>What our valued clients say about our premium services</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Exceptional service! My car looks better than when I bought it. The attention to detail is unmatched."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <h4>John Davidson</h4>
                  <span>Porsche 911 Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Professional, reliable, and outstanding results. They transformed my BMW's interior completely."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SC</div>
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <span>BMW M4 Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The ceramic coating they applied has protected my Mercedes perfectly. Worth every penny!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <h4>Michael Roberts</h4>
                  <span>Mercedes AMG Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
