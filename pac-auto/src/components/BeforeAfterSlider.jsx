import { useState, useRef, useCallback, useEffect } from 'react'
import './BeforeAfterSlider.css'

function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  // Calculate position from mouse/touch event
  const calculatePosition = useCallback((clientX) => {
    if (!containerRef.current) return 50
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // Clamp between 0 and 100
    return Math.min(Math.max(percentage, 0), 100)
  }, [])

  // Mouse handlers
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setSliderPosition(calculatePosition(e.clientX))
  }

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return
    setSliderPosition(calculatePosition(e.clientX))
  }, [isDragging, calculatePosition])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setSliderPosition(calculatePosition(e.touches[0].clientX))
  }

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return
    e.preventDefault() // Prevent scrolling while dragging
    setSliderPosition(calculatePosition(e.touches[0].clientX))
  }, [isDragging, calculatePosition])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add/remove global event listeners
  useEffect(() => {
    if (!isDragging) return

    const handleMouseMoveGlobal = (e) => setSliderPosition(calculatePosition(e.clientX))
    const handleMouseUpGlobal = () => setIsDragging(false)
    const handleTouchMoveGlobal = (e) => {
      e.preventDefault()
      setSliderPosition(calculatePosition(e.touches[0].clientX))
    }
    const handleTouchEndGlobal = () => setIsDragging(false)

    window.addEventListener('mousemove', handleMouseMoveGlobal)
    window.addEventListener('mouseup', handleMouseUpGlobal)
    window.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false })
    window.addEventListener('touchend', handleTouchEndGlobal)

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveGlobal)
      window.removeEventListener('mouseup', handleMouseUpGlobal)
      window.removeEventListener('touchmove', handleTouchMoveGlobal)
      window.removeEventListener('touchend', handleTouchEndGlobal)
    }
  }, [isDragging, calculatePosition])

  return (
    <div className="before-after-wrapper">
      <div
        ref={containerRef}
        className={`before-after-container ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Base Layer) */}
        <div className="before-image-wrapper">
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="before-after-image"
            onError={(e) => {
              e.target.src = '/HomePic1.jpg'
            }}
          />
          <span className="image-label before-label">{beforeLabel}</span>
        </div>

        {/* After Image (Clipped Layer) */}
        <div
          className="after-image-wrapper"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={afterLabel}
            className="before-after-image"
            onError={(e) => {
              e.target.src = '/HomePic4.jpg'
            }}
          />
          <span className="image-label after-label">{afterLabel}</span>
        </div>

        {/* Slider Handle */}
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="slider-line" />
          <div className="slider-knob">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <div className="slider-glow" />
        </div>

        {/* Instructions */}
        <div className="slider-instructions">
          <span>Drag to compare</span>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
