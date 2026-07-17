import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
      <div className="site-nav-top">
        <Link to="/" className="site-logo" onClick={handleHomeClick}>
          <img src="/navbar-logo.png" alt="Phantom Auto Center" className="logo-img" />
          <span className="logo-text">Phantom Auto Center</span>
        </Link>

        <div className="nav-actions">

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="site-nav-links" data-open={open ? 'true' : 'false'}>
        <Link to="/" onClick={handleHomeClick}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/customizations">Customizations</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/mobile-detailing" className="nav-book-btn">Book Now</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
