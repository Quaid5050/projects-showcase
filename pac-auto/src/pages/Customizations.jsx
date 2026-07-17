import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Customizations.css'
import '../styles/hero-headings.css'
import customizations from '../data/customizations'
import { SERVICE_ROUTES } from '../utils/routeConstants'

function Customizations() {
  const [activeId, setActiveId] = useState(customizations[0]?.id)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const active = customizations.find((item) => item.id === activeId) || customizations[0]
  const activeImage = active?.image || ''

  // Page load animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

const handleItemClick = (id) => {
    if (id === activeId || isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveId(id)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 400)
  }

return (
    <main className="customizations-page">
      {/* Animated Background Effects */}
      <div className="customizations-bg-effects">
        <div className="bg-gradient-orb orb-1" />
        <div className="bg-gradient-orb orb-2" />
        <div className="bg-gradient-orb orb-3" />
        <div className="bg-grid-pattern" />
      </div>

      {/* Cinematic Hero Section */}
      <section className={`customizations-hero ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-background">
          <img src="/car interior ambient lighting neon luxury night.jpg" alt="Luxury Car Customizations" className="hero-bg-image" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Premium Studio</span>
          </div>
          
          <h1 className="hero-title-customization">Vehicle Customization</h1>
          <p className="hero-subtitle-customization">Premium modifications • Expert installation • Custom designs</p>
                    
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Custom Options</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Premium Quality</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">5★</span>
              <span className="stat-label">Rated Service</span>
            </div>
          </div>
        </div>
        
        <div className="scroll-prompt">
          <div className="mouse-icon">
            <div className="mouse-wheel" />
          </div>
          <span>Explore Below</span>
        </div>
      </section>

      {/* Interactive Transformation Showcase */}
      <section className={`transformation-showcase ${isLoaded ? 'loaded' : ''}`}>
        <div className="showcase-header">
          <h2 className="showcase-title">Transformation Studio</h2>
          <p className="showcase-subtitle">Select a customization to preview</p>
        </div>

        <div className="showcase-layout">
          {/* Left Side - Featured Image Display */}
          <div className="featured-display">
            <div className={`display-frame ${isTransitioning ? 'transitioning' : ''}`}>
              {/* Main Image */}
              <div className="image-container">
                <img
                  src={activeImage.replace(/ /g, '%20')}
                  alt={active.title}
                  className="featured-image"
                  onError={(e) => {
                    console.error('Failed to load image:', activeImage)
                    e.target.src = '/ShineService.jpg'
                  }}
                />
                {/* Shimmer Loading Effect */}
                <div className="image-shimmer-effect" />
                
                {/* Gradient Overlays */}
                <div className="overlay-vignette" />
                <div className="overlay-gradient" />
                
                {/* Before/After Badge */}
                <div className="transformation-badge">
                  <span className="badge-icon">✦</span>
                  <span>Transformation</span>
                </div>
                
                {/* Price Tag */}
                <div className="price-tag">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">Custom Quote</span>
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="display-content">
                <div className="content-glass-panel">
                  <h3 className="display-title">{active.title}</h3>
                  <p className="display-description">{active.description}</p>
                  
                  <Link to={`/services/${activeId}`} className="cta-button">
                    <span>Book Consultation</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="frame-glow" />
            </div>
            
            {/* Navigation Dots */}
            <div className="display-dots">
              {customizations.map((item, index) => (
                <button
                  key={item.id}
                  className={`display-dot ${item.id === activeId ? 'active' : ''}`}
                  onClick={() => handleItemClick(item.id)}
                  aria-label={`View ${item.title}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Customization List */}
          <div className="customization-list-panel">
            <h3 className="list-title">Available Services</h3>
            
            <div className="list-container">
              {customizations.map((item, index) => {
                const isActive = item.id === activeId
                
                return (
                  <Link
                    key={item.id}
                    to={`/services/${item.id}`}
                    className={`list-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(item.id)}
                    style={{ '--item-index': index }}
                  >
                    {/* Thumbnail */}
                    <div className="item-thumbnail">
                      <img src={item.image.replace(/ /g, '%20')} alt="" loading="lazy" onError={(e) => { e.target.src = '/ShineService.jpg' }} />
                      <div className="thumbnail-glow" />
                    </div>
                    
                    {/* Content */}
                    <div className="item-content">
                      <h4 className="item-title">{item.title}</h4>
                      <p className="item-description">{item.description}</p>
                    </div>
                    
                    {/* Active Indicator */}
                    <div className="active-indicator">
                      <div className="indicator-pulse" />
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="item-glow" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className={`feature-highlights ${isLoaded ? 'loaded' : ''}`}>
        <div className="wave-transition wave-top">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="#ffffff"/>
          </svg>
        </div>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4>Premium Materials</h4>
            <p>Only the highest quality products and finishes</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4>Fast Turnaround</h4>
            <p>Quick service without compromising quality</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h4>Warranty Protected</h4>
            <p>All work backed by comprehensive warranty</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <h4>Expert Craftsmen</h4>
            <p>Certified professionals with years of experience</p>
          </div>
        </div>
        <div className="wave-transition wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,0 720,120 1080,60 C1260,30 1380,90 1440,60 L1440,0 L0,0 Z" fill="#080808"/>
          </svg>
        </div>
      </section>

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
          {customizations.map((item, index) => {
            // Map customization IDs to service routes using unified constants
            const getServiceRoute = (id) => {
              return SERVICE_ROUTES[id] || '/services'
            }

            return (
              <Link 
                key={item.id}
                to={getServiceRoute(item.id)}
                className="gallery-item-link-cinematic"
              >
                <div 
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
                    
                    <div className="gallery-overlay-cinematic">
                      {/* Removed hover text overlay */}
                    </div>
                    
                    <div className="gallery-frame-border" />
                    <div className="gallery-corner-decoration gallery-corner-tl" />
                    <div className="gallery-corner-decoration gallery-corner-tr" />
                    <div className="gallery-corner-decoration gallery-corner-bl" />
                    <div className="gallery-corner-decoration gallery-corner-br" />
                  </div>
                  
                  <div className="gallery-content">
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-description">{item.description}</p>
                    <div className="gallery-item-btn-wrapper">
                      <span className="gallery-view-detail-btn">View Detail</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

    </main>
  )
}

export default Customizations
