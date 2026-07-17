import { useEffect, useState, useRef } from 'react'
import { FiAward, FiShield, FiZap, FiStar } from 'react-icons/fi'
import './WhyChooseUs.css'

const premiumFeatures = [
  {
    icon: FiAward,
    title: 'Premium Quality',
    description: 'High-end compounds and coatings for deep, lasting gloss'
  },
  {
    icon: FiShield,
    title: 'Trusted Process',
    description: 'Careful prep, controlled finishing, clean delivery'
  },
  {
    icon: FiZap,
    title: 'Mobile Convenience',
    description: 'We come to you—home or office—time protected'
  },
  {
    icon: FiStar,
    title: 'Expert Care',
    description: 'Trusted care for luxury and performance vehicles'
  }
]

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % premiumFeatures.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section 
      ref={sectionRef}
      className="premium-why-choose-section" 
      aria-label="Why Choose Us"
    >
      <div className="premium-why-choose-container">
        <div className="premium-why-choose-content">
          <div className="premium-why-choose-text">
            <h2 className="premium-why-choose-title">
              <span className="premium-title-line">Why Choose</span>
              <span className="premium-title-line premium-title-highlight">Phantom</span>
            </h2>
            <p className="premium-why-choose-subtitle">
              Luxury-grade care, delivered with precision
            </p>

            <div className="premium-features-slider">
              {premiumFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`premium-feature-item ${
                    index === activeIndex ? 'premium-feature-active' : ''
                  }`}
                >
                  <div className="premium-feature-icon">
                    <feature.icon size={28} />
                  </div>
                  <div className="premium-feature-text">
                    <h3 className="premium-feature-title">{feature.title}</h3>
                    <p className="premium-feature-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="premium-why-choose-indicators">
              {premiumFeatures.map((_, index) => (
                <button
                  key={index}
                  className={`premium-indicator ${
                    index === activeIndex ? 'premium-indicator-active' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="premium-why-choose-visual">
            <div className="premium-image-wrapper">
              <img 
                src="/AboutUs.jpg" 
                alt="Premium Car Detailing" 
                className="premium-why-choose-image"
              />
              <div className="premium-image-overlay" />
              <div className="premium-image-glow" />
            </div>
            
            <div className="premium-floating-elements">
              <div className="premium-float-card premium-float-1">
                <FiAward size={20} />
                <span>Premium</span>
              </div>
              <div className="premium-float-card premium-float-2">
                <FiShield size={20} />
                <span>Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
