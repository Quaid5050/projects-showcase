import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiClock, FiAward, FiUsers, FiTarget, FiEye, FiCheckCircle } from 'react-icons/fi'
import './About.css'
import './Services.css'
import '../styles/hero-headings.css'

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

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Master Detailer",
    image: "/CarServiceMan1.jpg",
    expertise: "Paint Correction & Ceramic Coating"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Lead Technician",
    image: "/CarServiceMan2.jpg",
    expertise: "Mechanical Repairs & Diagnostics"
  },
  {
    id: 3,
    name: "James Chen",
    role: "Customization Specialist",
    image: "/CarServiceMan3.jpg",
    expertise: "Vehicle Customization & Performance"
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Senior Detailer",
    image: "/CarServiceMan4.jpg",
    expertise: "Interior Deep Cleaning & Restoration"
  },
  {
    id: 5,
    name: "Robert Williams",
    role: "Service Manager",
    image: "/CarServiceMan5.jpg",
    expertise: "Customer Service & Quality Control"
  }
]

// Gallery images
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

function About() {
  const [activeGalleryImage, setActiveGalleryImage] = useState(null)
  const [activeServiceMan, setActiveServiceMan] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  // Auto-slide service men (only on desktop)
  useEffect(() => {
    if (!isAutoSliding) return
    
    const interval = setInterval(() => {
      setActiveServiceMan((prev) => (prev + 1) % teamMembers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoSliding])

  // Handle user interaction to pause auto-slide
  const handleServiceManClick = (index) => {
    setActiveServiceMan(index)
    setIsAutoSliding(false)
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => setIsAutoSliding(true), 10000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
            <h1 className="about-hero__title">About Phantom Auto Centre</h1>
            <p className="about-hero__subtitle">Premium automotive care where precision meets passion</p>
          </div>
      </section>

      {/* About Intro Section */}
      <section className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__grid">
            <div className="about-intro__image">
              <div className="image-wrapper">
                <img src="/AboutUsService.jpg" alt="Premium Car Detailing" />
                <div className="image-overlay" />
              </div>
            </div>
            <div className="about-intro__content">
              <h2 className="section-title">Crafting Automotive Excellence</h2>
              <p className="section-text">
                At Phantom Auto Centre, we transform vehicles into works of art. 
                With over two decades of expertise in luxury automotive care, 
                our team delivers unparalleled detailing, customization, and 
                mechanical services that exceed expectations.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <FiAward className="stat-icon" />
                  <div className="stat-content">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FiUsers className="stat-icon" />
                  <div className="stat-content">
                    <div className="stat-number">5000+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Image Gallery Section */}
      <section className="about-gallery">
        <div className="about-gallery__container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="gallery-item"
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

      {/* Vision & Mission Section */}
      <section className="about-vision-mission">
        <div className="about-vision-mission__container">
          {/* Vision Section */}
          <div className="vision-section">
            <h2 className="section-heading">Our Vision</h2>
            <div className="vision-content">
              <p className="vision-text">
                At Phantom Auto Centre, we don't see car care as just cleaning or polishing: it's about how a vehicle is maintained over time and how it represents its owner every day.
              </p>
              <p className="vision-text">
                Our vision is to set a higher standard in detailing by focusing on work that actually makes a difference: cleaner surfaces that last, protection that holds up, and results that stay noticeable long after service is done.
              </p>
              <p className="vision-text">
                We want car owners to feel confident every time they look at their vehicle, not because it looks new for a day, but because it stays well cared for in the long run.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission-section">
            <h2 className="section-heading">Our Mission</h2>
            <div className="mission-content">
              <div className="mission-item">
                <h3 className="mission-title">1. Quality Car Care You Can Trust</h3>
                <p className="mission-text">
                  We provide professional detailing services that keep your car clean, well-maintained, and protected. Every job is done with care to ensure a proper and lasting finish.
                </p>
              </div>
              <div className="mission-item">
                <h3 className="mission-title">2. Smarter, Responsible Methods</h3>
                <p className="mission-text">
                  We use safe products and careful water usage practices to reduce waste while still delivering strong, effective results for your vehicle.
                </p>
              </div>
              <div className="mission-item">
                <h3 className="mission-title">3. Service You Can Rely On</h3>
                <p className="mission-text">
                  We focus on honest communication, consistent quality, and making sure every customer gets exactly what their car needs: nothing unnecessary, just professional car care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Premium Process Section */}
      <section className="services-process loaded">
        <div className="process-container">
          <div className="process-header">
            <h2>Our Premium Process</h2>
            <p>Every service follows our meticulous 5-step process for perfection</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>Personalized assessment of your vehicle's needs</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Preparation</h3>
                <p>Careful preparation and protection of all surfaces</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Execution</h3>
                <p>Precision application of premium products and techniques</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Quality Check</h3>
                <p>Thorough inspection to ensure perfection</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Delivery</h3>
                <p>Final presentation and customer satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="about-cta">
        <div className="about-cta__container">
          <div className="cta-content">
            <h2>Ready to Experience Premium Automotive Care?</h2>
            <p>Join thousands of satisfied customers who trust Phantom Auto Centre</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">
                Get In Touch
              </Link>
              <Link to="/services" className="cta-btn secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Animated Card Component
function AnimatedCard({ children, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.15)
  return (
    <div
      ref={ref}
      className={`animated-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}

export default About
