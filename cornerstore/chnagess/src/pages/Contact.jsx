import { useState } from 'react'
import './Contact.css'

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="contact-page">
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="container page-header-content">
          <span className="section-tag">Get In Touch</span>
          <h1 className="page-header-title">Contact <span>Us</span></h1>
          <p className="page-header-sub">Have a question, need directions, or want to place an order? We're here to help!</p>
        </div>
      </div>

      {/* CONTACT INFO CARDS */}
      <section className="contact-cards-section">
        <div className="container contact-cards-grid">
          <a href="tel:5196982600" className="contact-card hoverable">
            <div className="contact-card-icon phone-icon">
              <PhoneIcon />
            </div>
            <div className="contact-card-label">Call Us</div>
            <div className="contact-card-value">(519) 698-2600</div>
            <div className="contact-card-hint">Tap to call now</div>
          </a>

          <a href="mailto:cornerstoreatlinwood@gmail.com" className="contact-card hoverable">
            <div className="contact-card-icon mail-icon">
              <MailIcon />
            </div>
            <div className="contact-card-label">Email</div>
            <div className="contact-card-value small">cornerstoreatlinwood@gmail.com</div>
            <div className="contact-card-hint">Tap to send email</div>
          </a>

          <a href="https://maps.google.com/?q=5190+Ament+Line+A,+Linwood,+ON" target="_blank" rel="noreferrer" className="contact-card hoverable">
            <div className="contact-card-icon map-icon">
              <MapPinIcon />
            </div>
            <div className="contact-card-label">Find Us</div>
            <div className="contact-card-value">5190 Ament Line A,<br />Linwood, ON N0B 2A0</div>
            <div className="contact-card-hint">Open in Maps</div>
          </a>

          <div className="contact-card">
            <div className="contact-card-icon clock-icon">
              <ClockIcon />
            </div>
            <div className="contact-card-label">Store Hours</div>
            <div className="hours-compact">
              <div><span>Mon – Fri</span><span>7AM – 10PM</span></div>
              <div><span>Saturday</span><span>8AM – 10PM</span></div>
              <div><span>Sunday</span><span>9AM – 9PM</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="map-form-section">
        <div className="container map-form-grid">
          {/* MAP */}
          <div className="map-wrapper">
            <div className="map-header">
              <MapPinIcon />
              <div>
                <div className="map-title">Corner Store at Linwood</div>
                <div className="map-sub">5190 Ament Line A, Linwood, ON</div>
              </div>
              <a href="https://maps.google.com/?q=5190+Ament+Line+A,+Linwood,+ON" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                Get Directions
              </a>
            </div>
            <div className="map-embed">
              <iframe
                title="Corner Store at Linwood Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5!2d-80.65!3d43.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM2JzAwLjAiTiA4MMKwMzknMDAuMCJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca&q=5190+Ament+Line+A,+Linwood,+ON+N0B+2A0,+Canada"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-directions">
              <div className="directions-item">
                <div className="dir-bullet"></div>
                <span>From Elmira: Head south on Arthur St S, turn right on Ament Line</span>
              </div>
              <div className="directions-item">
                <div className="dir-bullet"></div>
                <span>From Kitchener: Take Hwy 85 N, then Hwy 86 W toward Elmira area</span>
              </div>
              <div className="directions-item">
                <div className="dir-bullet"></div>
                <span>Free parking available in front of the store</span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-sub">We'll get back to you as soon as possible.</p>
            </div>

            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly at {formData.email}.</p>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(519) 000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">Select a topic...</option>
                    <option>Product Availability</option>
                    <option>Store Hours</option>
                    <option>Delivery Inquiry</option>
                    <option>Purolator Services</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you today?" rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                  {loading ? (
                    <span className="loading-dots">Sending<span>.</span><span>.</span><span>.</span></span>
                  ) : (
                    <><SendIcon /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
