import { useState, useEffect, useCallback } from 'react'
import './CustomizationCarousel.css'
import customizations from '../data/customizations'

function CustomizationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const itemsPerView = isMobile ? 1 : 3
  const maxIndex = Math.max(0, customizations.length - itemsPerView)

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset index when mobile state changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0)
    }
  }, [isMobile, maxIndex, currentIndex])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
  }, [maxIndex])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    
    if (distance > minSwipeDistance) {
      goToNext()
    } else if (distance < -minSwipeDistance) {
      goToPrev()
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }

  const visibleItems = customizations.slice(currentIndex, currentIndex + itemsPerView)
  // Fill remaining slots if at the end
  const displayItems = visibleItems.length < itemsPerView 
    ? [...visibleItems, ...customizations.slice(0, itemsPerView - visibleItems.length)]
    : visibleItems

  return (
    <section className="customization-carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-title">Our Customization Gallery</h2>
        <p className="carousel-subtitle">Explore our premium transformation services</p>
      </div>

      <div 
        className="carousel-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-prev"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Carousel Track */}
        <div className="carousel-track-wrapper">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {customizations.map((item, index) => (
              <div 
                key={item.id}
                className={`carousel-slide ${
                  index >= currentIndex && index < currentIndex + itemsPerView ? 'active' : ''
                }`}
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <div className="carousel-card">
                  <div className="carousel-image-wrapper">
                    <img
                      src={item.image.replace(/ /g, '%20')}
                      alt={item.title}
                      className="carousel-image"
                      loading="eager"
                      onError={(e) => {
                        console.error('Failed to load image:', item.image)
                        e.target.src = '/ShineService.jpg'
                      }}
                    />
                    <div className="carousel-image-overlay" />
                    <div className="carousel-card-glow" />
                  </div>
                  <div className="carousel-card-content">
                    <h3 className="carousel-card-title">{item.title}</h3>
                    <p className="carousel-card-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="carousel-pagination">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      {isMobile && (
        <div className="swipe-hint">
          <span>Swipe to explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      )}
    </section>
  )
}

export default CustomizationCarousel
