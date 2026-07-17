import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  const phoneNumber = '19052999267' // Phone number from Contact.jsx
  const message = encodeURIComponent('Hi! I\'d like to inquire about your car services.')
  
  const handleClick = () => {
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="whatsapp-container">
      <button
        className={`whatsapp-float-btn ${isHovered ? 'hovered' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact on WhatsApp"
      >
        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>
        <div className="whatsapp-tooltip">
          <span>Chat with us on WhatsApp</span>
        </div>
      </button>
      
      {/* Pulse animation ring */}
      <div className="whatsapp-pulse-ring" />
    </div>
  )
}

export default WhatsAppButton
