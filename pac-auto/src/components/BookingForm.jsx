import { useState } from 'react'
import { sendBookingEmail } from './FormspreeConfig'
import './BookingFormWide.css'

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    carModel: '',
    date: '',
    time: '',
    service: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

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

    
    if (String(formData.phone).trim().length < 10) {
      setError('Phone should be at least 10 characters.')
      return
    }

    setLoading(true)

    try {
      const result = await sendBookingEmail(formData)
      if (result.success) {
        setSuccess(result.message)
      } else {
        throw new Error(result.message)
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        carModel: '',
        date: '',
        time: '',
        service: '',
      })
    } catch (apiError) {
      setError(apiError.message || 'Failed to create booking.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="wide-booking-container" aria-label="Booking form">
      <div className="wide-booking-card">
        <header className="wide-booking-header">
          <h2>Booking Details</h2>
          <p>
            Fill in your details to book your mobile detailing service
          </p>
        </header>

        <form className="wide-booking-form" onSubmit={handleSubmit}>
          <div className="wide-booking-row wide-booking-row--two">
            <label className="wide-booking-field">
              <span className="wide-booking-label">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className="wide-booking-input"
              />
            </label>

            <label className="wide-booking-field">
              <span className="wide-booking-label">Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="wide-booking-input"
              />
            </label>
          </div>

          <div className="wide-booking-row">
            <label className="wide-booking-field">
              <span className="wide-booking-label">Phone Number</span>
              <input
                type="tel"
                name="phone"
                placeholder="03xx-xxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
                className="wide-booking-input"
              />
            </label>
          </div>

          <label className="wide-booking-field">
            <span className="wide-booking-label">Address</span>
            <input
              type="text"
              name="address"
              placeholder="Your full address (for mobile service)"
              value={formData.address}
              onChange={handleChange}
              required
              disabled={loading}
              className="wide-booking-input"
            />
          </label>

          <label className="wide-booking-field">
            <span className="wide-booking-label">Car Model</span>
            <input
              type="text"
              name="carModel"
              placeholder="e.g. Audi A4, BMW 3 Series"
              value={formData.carModel}
              onChange={handleChange}
              required
              disabled={loading}
              className="wide-booking-input"
            />
          </label>

          <label className="wide-booking-field">
            <span className="wide-booking-label">Service Type</span>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={loading}
              className="wide-booking-select"
            >
              <option value="">Select a service</option>
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
          </label>

          <div className="wide-booking-row wide-booking-row--two">
            <label className="wide-booking-field">
              <span className="wide-booking-label">Date</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                disabled={loading}
                className="wide-booking-input"
              />
            </label>

            <label className="wide-booking-field">
              <span className="wide-booking-label">Time</span>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                disabled={loading}
                className="wide-booking-input"
              />
            </label>
          </div>

          {error ? <div className="wide-booking-alert wide-booking-alert--error">{error}</div> : null}
          {success ? (
            <div className="wide-booking-alert wide-booking-alert--success">{success}</div>
          ) : null}

          <button
            type="submit"
            className="wide-booking-submit"
            disabled={loading}
          >
            {loading ? 'Submitting…' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingForm
