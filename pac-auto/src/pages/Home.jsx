import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiClock, FiUsers, FiTool, FiCalendar, FiPhone, FiMail, FiMapPin, FiChevronRight, FiStar, FiShield, FiAward, FiCheckCircle, FiEye } from 'react-icons/fi'
import './Home.css'
import './HomeGallery.css'
import '../styles/hero-headings.css'
import services from '../data/services'
import customizations from '../data/customizations'

import Reviews from '../components/Reviews'
import BeforeAfterSection from '../components/BeforeAfterSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HomeServicesSection from '../components/HomeServicesSection'

const galleryImages = [
  "/HomePic1.jpg",
  "/HomePic2.jpg", 
  "/HomePic3.jpg",
  "/HomePic4.jpg",
  "/HomePic5.jpg",
  "/HeroPic2.jpg",
  "/HeroPic3.jpg",
  "/After.jpg"
]

// Hook for scroll-triggered animations
function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// Animated service card component (outside Home to maintain hook consistency)
function AnimatedServiceCard({ service, direction, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.15)
  return (
    <article
      ref={ref}
      className={`service-card ${direction} ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="service-image-wrap">
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
      <div className="service-body">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </article>
  )
}

const heroImages = ['/H3.jpg', '/H2.jpg', '/H1.jpg']

const statsData = [
  { icon: FiClock, target: 65250, suffix: '+', label: 'Hours of Works' },
  { icon: FiUsers, target: 23160, suffix: '+', label: 'Happy Customers' },
  { icon: FiTool, target: 1500, suffix: '+', label: 'Experienced Workers' },
  { icon: FiCalendar, target: 20, suffix: '+', label: 'Years of Experience' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ icon: Icon, target, suffix, label, start }) {
  const count = useCountUp(target, 2000, start)
  return (
    <div className="stat-item">
      <div className="stats-icon">
        <Icon size={24} />
      </div>
      <div className="stats-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stats-label">{label}</div>
    </div>
  )
}

function StatsSection() {
  const [start, setStart] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref} aria-label="Statistics">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            start={start}
          />
        ))}
      </div>
    </section>
  )
}

function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(true)
  const [activeGalleryImage, setActiveGalleryImage] = useState(null)
  const [galleryVisible, setGalleryVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const galleryRef = useRef(null)

  // Page load animations for customization gallery
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll detection for gallery animation
    const handleScroll = () => {
      const galleryElement = galleryRef.current
      if (galleryElement) {
        const rect = galleryElement.getBoundingClientRect()
        const isGalleryVisible = rect.top < window.innerHeight && rect.bottom > 0
        setGalleryVisible(isGalleryVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Preload hero images
    const preloadImages = () => {
      const imagePromises = heroImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          console.log('Loading image:', src)
          img.onload = () => {
            console.log('Image loaded successfully:', src)
            resolve(img)
          }
          img.onerror = (err) => {
            console.error('Error loading image:', src, err)
            reject(err)
          }
        })
      })

      Promise.all(imagePromises)
        .then(() => {
          console.log('All images loaded successfully')
          setImagesLoaded(true)
        })
        .catch(err => console.error('Error preloading images:', err))
    }

    preloadImages()

    const intervalId = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(intervalId)
  }, [])

  const previewServices = services.slice(0, 3)

  // Animation directions for each card - all slide from left
  const slideDirections = ['slide-left', 'slide-left', 'slide-left']

  return (
    <>
      <section className="hero-section">
        
        {/* Enhanced Hero Slider */}
        <div className="hero-slider" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`hero-slide ${index === activeImageIndex ? 'active' : ''} ${!imagesLoaded ? 'loading' : ''}`}
            >
              <img
                src={image}
                alt={`Hero slide ${index + 1}`}
                className="hero-slide-img"
                onLoad={() => console.log('Hero image loaded:', image)}
                onError={(e) => {
                  console.error('Hero slide image failed to load:', image)
                  // Fallback to a working image
                  e.target.src = '/HeroPic2.jpg'
                }}
              />
            </div>
          ))}
        </div>

        {/* Premium Overlay with Animation */}
        <div className="hero-overlay">
          <div className="overlay-gradient" />
          <div className="overlay-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{ '--delay': `${i * 0.3}s` }} />
            ))}
          </div>
        </div>

        {/* Enhanced Hero Content with Premium Animations */}
        <div className="hero-content-phantom-main-wrapper">
          <div className="hero-text-container-phantom-2024">
            <h1 className="hero-title-premium-main">Premium Car Care & Mobile Detailing</h1>
            <p className="hero-subtitle-premium-services">Mechanical Repairs • Customization • Professional Mobile Detailing</p>
          </div>

          <div className="hero-buttons-container-phantom-actions">
            <Link to="/mobile-detailing" className="hero-button-phantom-primary-cta">
              <span className="hero-button-content-phantom-primary">
                <span className="hero-button-text-phantom-primary">Book Mobile Detailing</span>
                <svg className="hero-button-icon-phantom-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <div className="hero-button-glow-phantom-primary" />
            </Link>
            <Link to="/services" className="hero-button-phantom-secondary-cta">
              <span className="hero-button-content-phantom-secondary">
                <span className="hero-button-text-phantom-secondary">Explore Services</span>
                <svg className="hero-button-icon-phantom-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div className="hero-button-glow-phantom-secondary" />
            </Link>
          </div>
        </div>

        {/* Premium Indicators */}
        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeImageIndex ? 'active' : ''}`}
              onClick={() => setActiveImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="indicator-dot" />
            </button>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-content">
            <h2 className="home-about-title">About Phantom Auto Centre</h2>
            <p className="home-about-text">
              At Phantom Auto Centre, we transform vehicles into works of art with over two decades of expertise in luxury automotive care. Our team delivers unparalleled detailing, customization, and mechanical services that exceed expectations.
            </p>
            <p className="home-about-text">
              We combine cutting-edge technology with traditional craftsmanship to provide premium automotive solutions. Your satisfaction is our priority, and we stand behind our work with quality guarantees.
            </p>
          </div>
          <div className="home-about-image">
            <img src="/AboutUsService.jpg" alt="About Phantom Auto Centre" />
          </div>
        </div>
      </section>

      <HomeServicesSection />

      {/* Luxury Appointment Section */}
      
      <section className="booking-cta" aria-label="Book mobile detailing">
        <div className="booking-cta__inner">
          <div className="booking-cta__left">
            <div className="booking-cta__glow" aria-hidden="true" />
            <h2>Book Your Mobile Detailing Service Today</h2>
            <p>We come to your location. Premium car care at your doorstep.</p>

            <ul className="booking-cta__bullets">
              <li>On-site convenience for home or office</li>
              <li>Showroom-grade wash, interior, and finishing</li>
              <li>Trusted care for luxury and performance vehicles</li>
            </ul>

            <div className="booking-cta__actions">
              <Link to="/mobile-detailing" className="booking-cta__btn booking-cta__btn--primary">
                Book Now
              </Link>
            </div>
          </div>

          <div className="booking-cta__right">
            <div className="booking-cta-card">
              <div className="booking-cta-card__top">
                <div className="booking-cta-card__badge">Mobile Detailing</div>
                <div className="booking-cta-card__title">Booking Preview</div>
              </div>

              <div className="booking-cta-card__form" aria-hidden="true">
                <div className="booking-cta-card__row">
                  <div className="booking-cta-card__field">
                    <div className="booking-cta-card__label">Package</div>
                    <div className="booking-cta-card__input">Premium Interior + Exterior</div>
                  </div>
                </div>
                <div className="booking-cta-card__row booking-cta-card__row--two">
                  <div className="booking-cta-card__field">
                    <div className="booking-cta-card__label">Date</div>
                    <div className="booking-cta-card__input">Select</div>
                  </div>
                  <div className="booking-cta-card__field">
                    <div className="booking-cta-card__label">Time</div>
                    <div className="booking-cta-card__input">Select</div>
                  </div>
                </div>
                <div className="booking-cta-card__row">
                  <div className="booking-cta-card__field">
                    <div className="booking-cta-card__label">Location</div>
                    <div className="booking-cta-card__input">Your address</div>
                  </div>
                </div>
              </div>

              <div className="booking-cta-card__bottom">
                <Link to="/mobile-detailing" className="booking-cta-card__cta">
                  Continue to Booking
                </Link>
                <div className="booking-cta-card__note">No payment required to request a slot.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Customization Image Gallery with Unique Animations */}
      <section className={`customization-gallery ${isLoaded ? 'loaded' : ''}`}>
        <div className="gallery-header-cinematic">
          <div className="header-badge">
            <span className="badge-glow" />
            <span>Gallery Showcase</span>
          </div>
          <h2 className="gallery-title-cinematic">Our Customization Portfolio</h2>
          <p className="gallery-subtitle-cinematic">Explore our stunning transformations and premium upgrades</p>
        </div>
        
        <div className="gallery-grid-cinematic">
          {customizations.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item-cinematic"
              style={{ '--item-index': index }}
            >
              <div className="gallery-frame">
                <div className="gallery-shimmer-wrapper">
                  <div className="gallery-shimmer-line" />
                  <div className="gallery-shimmer-line" />
                  <div className="gallery-shimmer-line" />
                </div>
                
                <img
                  src={item.image.replace(/ /g, '%20')}
                  alt={item.title}
                  className="gallery-image-cinematic"
                  loading="lazy"
                  style={{ '--image-delay': `${index * 0.15}s` }}
                  onLoad={(e) => {
                    setTimeout(() => {
                      e.target.classList.add('loaded')
                    }, index * 150)
                  }}
                  onError={(e) => {
                    e.target.src = '/ShineService.jpg'
                    setTimeout(() => {
                      e.target.classList.add('loaded')
                    }, index * 150)
                  }}
                />
                
                {/* View Detail Button Overlay */}
                <div className="gallery-view-detail-overlay">
                  <Link 
                    to={`/services/${item.id}`}
                    className="gallery-view-detail-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Detail</span>
                  </Link>
                </div>
                
                <div className="gallery-frame-border" />
                <div className="gallery-corner-decoration gallery-corner-tl" />
                <div className="gallery-corner-decoration gallery-corner-tr" />
                <div className="gallery-corner-decoration gallery-corner-bl" />
                <div className="gallery-corner-decoration gallery-corner-br" />
              </div>
              
              <div className="gallery-info">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Car Brand Logo Strip Slider */}
      <section className="brand-logo-strip">
        <div className="brand-logo-container">
          <div className="brand-logo-track">
            {/* First set of logos */}
            <div className="brand-logo-item">
              <img src="/BMW.png" alt="BMW" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Merceds.png" alt="Mercedes" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Audi.png" alt="Audi" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Tesla.png" alt="Tesla" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Honda.png" alt="Toyota" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/wolksWagan.png" alt="Volkswagen" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Mitsubishi.png" alt="Mitsubishi" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Audi.png" alt="Porsche" className="brand-logo" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="brand-logo-item">
              <img src="/BMW.png" alt="BMW" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Merceds.png" alt="Mercedes" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Audi.png" alt="Audi" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Tesla.png" alt="Tesla" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Honda.png" alt="Toyota" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/wolksWagan.png" alt="Volkswagen" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Mitsubishi.png" alt="Mitsubishi" className="brand-logo" />
            </div>
            <div className="brand-logo-item">
              <img src="/Audi.png" alt="Porsche" className="brand-logo" />
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <BeforeAfterSection />
      
      {/* Gallery Section */}
      <section className="home-gallery" ref={galleryRef}>
        <div className="home-gallery__container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`gallery-item ${galleryVisible ? 'slide-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveGalleryImage(image)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <FiEye className="gallery-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeGalleryImage && (
        <div className="lightbox" onClick={() => setActiveGalleryImage(null)}>
          <div className="lightbox-content">
            <img src={activeGalleryImage} alt="Gallery" />
            <button className="lightbox-close" onClick={() => setActiveGalleryImage(null)}>
              ×
            </button>
          </div>
        </div>
      )}
      
      <Reviews />

      {/* Luxury Appointment Section */}
      <section className="luxury-appointment-section">
        <div className="luxury-appointment-container">
          <div className="luxury-appointment-content">
            <h2 className="luxury-title">Want Your Car to Shine Like New Again?</h2>
            <p className="luxury-subtitle">Experience premium detailing services that bring back the showroom shine</p>
            <div className="luxury-buttons">
              <Link to="/mobile-detailing" className="luxury-btn primary-luxury-btn">
                <span className="luxury-btn-content">
                  <span>Book Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                <div className="luxury-btn-glow" />
              </Link>
              <Link to="/contact" className="luxury-btn secondary-luxury-btn">
                <span className="luxury-btn-content">
                  <span>Make Appointment</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="luxury-btn-glow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
