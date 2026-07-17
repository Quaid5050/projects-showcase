import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeServicesSection.css'
import { TITLE_TO_ROUTE } from '../utils/routeConstants'

const homeServices = [
  {
    id: 1,
    title: 'Vinyl Wrapping',
    description: 'Premium car transformation with custom vinyl designs for a unique look.',
    image: '/vinnylwrapping.jpg'
  },
  {
    id: 2,
    title: 'Paint Correction',
    description: 'Professional paint restoration and surface correction for showroom finish.',
    image: '/PaintCorrection.jpg'
  },
  {
    id: 3,
    title: 'Car Detailing',
    description: 'Professional interior and exterior detailing service for complete vehicle care.',
    image: '/CarDetailing.jpg'
  },
  {
    id: 4,
    title: 'Ambient Lighting',
    description: 'Custom interior LED lighting solutions for enhanced vehicle aesthetics.',
    image: '/ambientLighting.jpg'
  },
  {
    id: 5,
    title: 'Starlight Headliner',
    description: 'Luxury ceiling starlight installation for premium interior ambiance.',
    image: '/starLight.jpg'
  },
  {
    id: 6,
    title: 'Dashcam Installation',
    description: 'Advanced safety and security recording system for complete driving protection.',
    image: '/car dashcam installation dashboard view modern car tech.jpg'
  }
]

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

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollAnimation(0.15)

  // Map service titles to their respective routes using unified constants
  const getServiceRoute = (title) => {
    return TITLE_TO_ROUTE[title] || '/services'
  }

  return (
    <div
      ref={ref}
      className={`hss-card ${isVisible ? 'hss-animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={getServiceRoute(service.title)} className="hss-card-image-link">
        <div className="hss-card-image-wrap">
          <img
            src={service.image}
            alt={service.title}
            className="hss-card-image"
            loading="lazy"
          />
          <div className="hss-card-overlay" />
        </div>
      </Link>
      <div className="hss-card-content">
        <h3 className="hss-card-title">{service.title}</h3>
        <p className="hss-card-description">{service.description}</p>
        <Link to={getServiceRoute(service.title)} className="hss-view-detail-btn">View Detail</Link>
      </div>
    </div>
  )
}

function HomeServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3)

  return (
    <section className="hss-section" aria-label="Our Services">
      <div className="hss-container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`hss-header ${headerVisible ? 'hss-header-visible' : ''}`}
        >
          <span className="hss-subtitle">What We Offer</span>
          <h2 className="hss-title">Premium Auto Services</h2>
          <p className="hss-intro">
            From routine maintenance to luxury detailing, we provide comprehensive care for your vehicle
          </p>
        </div>

        {/* Services Grid */}
        <div className="hss-grid">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="hss-cta-wrap">
          <Link to="/services" className="hss-cta-btn">
            <span>View All Services</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection
