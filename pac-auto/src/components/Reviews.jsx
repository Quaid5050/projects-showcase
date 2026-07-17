import { useState, useEffect, useRef } from 'react'
import './Reviews.css'
import reviews from '../data/reviews'

// Star rating component
function StarRating({ rating }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <svg key={i} className="star star-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <svg key={i} className="star star-half" viewBox="0 0 24 24" fill="currentColor">
          <defs>
            <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    } else {
      stars.push(
        <svg key={i} className="star star-empty" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  }

  return <div className="star-rating">{stars}</div>
}

// Review Card Component
function ReviewCard({ review }) {
  const initials = review.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()

  return (
    <div className="review-card">
      <div className="review-card__glow" />
      <div className="review-card__content">
        <div className="review-header">
          <div className="review-avatar">
            <img src={review.avatar} alt={review.name} onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }} />
            <div className="review-avatar__fallback" style={{ display: 'none' }}>
              {initials}
            </div>
          </div>
          <div className="review-meta">
            <h4 className="review-name">{review.name}</h4>
            <StarRating rating={review.rating} />
          </div>
        </div>
        
        <p className="review-text">"{review.review}"</p>
        
        <div className="review-footer">
          <span className="review-car">{review.car}</span>
          <span className="review-date">{review.date}</span>
        </div>
      </div>
    </div>
  )
}

// Main Reviews Section
function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const intervalRef = useRef(null)
  const touchStartX = useRef(0)

  // Get visible cards based on screen width
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 2
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 2
  }

  const [visibleCards, setVisibleCards] = useState(getVisibleCards())

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play with pause on hover and error handling
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        try {
          setCurrentIndex((prev) => (prev + 1) % reviews.length)
        } catch (error) {
          // Ignore AbortError from animation interruptions
          if (error.name !== 'AbortError') {
            console.error('Reviews auto-play error:', error)
          }
        }
      }, 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPaused, reviews.length])

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

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

  return (
    <section 
      className={`reviews-section ${isLoaded ? 'loaded' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Effects */}
      <div className="reviews-bg-effects">
        <div className="reviews-orb orb-1" />
        <div className="reviews-orb orb-2" />
      </div>

      <div className="reviews-container">
        {/* Section Header */}
        <div className="reviews-header">
          <span className="reviews-badge">Testimonials</span>
          <h2 className="reviews-title">What Our Customers Say</h2>
          <p className="reviews-subtitle">Real feedback from our satisfied clients</p>
        </div>

        {/* Carousel Container */}
        <div className="reviews-carousel">
          <div 
            className="reviews-track"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="reviews-slide"
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="reviews-arrow reviews-arrow-prev"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button 
            className="reviews-arrow reviews-arrow-next"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`reviews-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
            >
              <span className="reviews-dot__fill" />
            </button>
          ))}
        </div>

        {/* Auto-play Progress Bar */}
        <div className="reviews-progress">
          <div 
            className="reviews-progress__bar"
            style={{ 
              animationPlayState: isPaused ? 'paused' : 'running',
              width: `${((currentIndex + 1) / reviews.length) * 100}%`
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Reviews
