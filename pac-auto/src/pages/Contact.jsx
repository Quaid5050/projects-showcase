import { useState, useEffect, useRef } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'
import './Contact.css'
import '../styles/hero-headings.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    // Smooth scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSuccess('')
    setError('')

    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === '',
    )

    if (hasEmptyField) {
      setError('All fields are required.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xojrnqez', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.service_type,
          message: formData.message,
          _subject: `New Contact Message - ${formData.name}`,
          _template: 'table'
        }),
      })
      
      if (response.ok) {
        setSuccess('Message sent successfully! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service_type: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (apiError) {
      setError(apiError.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: '905-299-9267',
      href: 'tel:905-299-9267'
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'info@phantomautocenter.com',
      href: 'mailto:info@phantomautocenter.com'
    },
    {
      icon: FiMapPin,
      label: 'Address',
      value: '345 Wyecroft Road Unit 5 & 6',
      href: '#'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay" />
        <div className="contact-hero__content">
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__subtitle">Get in touch • Schedule service • Expert advice</p>
          </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="contact-section" ref={sectionRef}>
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info-section">
              <div className="contact-info-header">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels</p>
              </div>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">
                      <info.icon />
                    </div>
                    <div className="contact-info-content">
                      <h4>{info.label}</h4>
                      {info.href.startsWith('#') ? (
                        <span>{info.value}</span>
                      ) : (
                        <a href={info.href} className="contact-info-link">
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-hours">
                <h3>Available days</h3>
                <p>Mon - Sat</p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you soon</p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
              >
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <FiPhone />
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="service_type">
                    Service Type
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    className="form-input"
                    value={formData.service_type}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Select a service...</option>
                    <option value="tires">Tires</option>
                    <option value="brakes">Brakes</option>
                    <option value="oil-changes">Oil Changes</option>
                    <option value="safety-certification">Safety Certification</option>
                    <option value="vinyl-wrapping">Vinyl Wrapping</option>
                    <option value="detailing">Detailing</option>
                    <option value="paint-correction">Paint Correction</option>
                    <option value="ambient-lighting">Ambient Lighting</option>
                    <option value="starlights">Starlights</option>
                    <option value="dashcams">Dashcams</option>
                    <option value="carplay-installs">CarPlay Installs</option>
                    <option value="paint-protection-film">Paint Protection Film (PPF)</option>
                    <option value="ceramic-coating">Ceramic Coating</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">
                    <FiMessageSquare />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your automotive needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                {error ? <div className="form-error">{error}</div> : null}
                {success ? <div className="form-success">{success}</div> : null}

                <button type="submit" className="submit-btn" disabled={loading}>
                  <FiSend />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
