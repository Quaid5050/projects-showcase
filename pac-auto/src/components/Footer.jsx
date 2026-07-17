import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import './Footer.css'
import logo from '/Logo.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="lux-footer" aria-label="Site footer">
      <div className="lux-footer__topline" aria-hidden="true" />

      <div className="lux-footer__inner">
        <div className="lux-footer__grid">
          <section className="lux-footer__brand" aria-label="Brand">
            <Link to="/" className="lux-footer__logo">
              <img src={logo} alt="PHANTOM" className="logo-img" />
            </Link>
            <p className="lux-footer__tagline">
              PHANTOM AUTO CENTER 
            </p>
            <p className="lux-footer__description">
              Your premier destination for luxury car care and customization.. We provide exceptional automotive services with attention to detail and quality craftsmanship.
            </p>
          </section>

          <nav className="lux-footer__col" aria-label="Quick links">
            <div className="lux-footer__title">Quick Links</div>
            <ul className="lux-footer__list">
              <li>
                <Link className="lux-footer__link" to="/">
                  <FiArrowUpRight aria-hidden="true" /> Home
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/about">
                  <FiArrowUpRight aria-hidden="true" /> About
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services">
                  <FiArrowUpRight aria-hidden="true" /> Services
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/customizations">
                  <FiArrowUpRight aria-hidden="true" /> Customizations
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/faq">
                  <FiArrowUpRight aria-hidden="true" /> FAQ
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/mobile-detailing">
                  <FiArrowUpRight aria-hidden="true" /> Book Now
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/contact">
                  <FiArrowUpRight aria-hidden="true" /> Contact
                </Link>
              </li>
            </ul>
          </nav>

          <section className="lux-footer__col" aria-label="Services list">
            <div className="lux-footer__title">Services</div>
            <ul className="lux-footer__list">
              <li>
                <Link className="lux-footer__link" to="/services/vinyl-wrapping">
                  <FiArrowUpRight aria-hidden="true" /> Vinyl Wrap
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/paint-correction">
                  <FiArrowUpRight aria-hidden="true" /> Paint Correction
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/detailing">
                  <FiArrowUpRight aria-hidden="true" /> Detailing
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/ambient-lighting">
                  <FiArrowUpRight aria-hidden="true" /> Ambient Light
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/starlight-headliner">
                  <FiArrowUpRight aria-hidden="true" /> Starlight
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/dashcam">
                  <FiArrowUpRight aria-hidden="true" /> Dashcam
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/carplay-installation">
                  <FiArrowUpRight aria-hidden="true" /> CarPlay
                </Link>
              </li>
            </ul>
          </section>

          <section className="lux-footer__col" aria-label="More Services">
            <div className="lux-footer__title">More Services</div>
            <ul className="lux-footer__list">
              <li>
                <Link className="lux-footer__link" to="/services/paint-protection-film">
                  <FiArrowUpRight aria-hidden="true" /> Paint Film
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/ceramic-coating">
                  <FiArrowUpRight aria-hidden="true" /> Ceramic Coating
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/tire-repairing">
                  <FiArrowUpRight aria-hidden="true" /> Tire Repair
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/brake-repair">
                  <FiArrowUpRight aria-hidden="true" /> Brake Repair
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/oil-change">
                  <FiArrowUpRight aria-hidden="true" /> Oil Change
                </Link>
              </li>
              <li>
                <Link className="lux-footer__link" to="/services/safety-certification">
                  <FiArrowUpRight aria-hidden="true" /> Safety Cert
                </Link>
              </li>
            </ul>
          </section>

          <section className="lux-footer__col" aria-label="Contact">
            <div className="lux-footer__title">Contact Info</div>
            <div className="lux-footer__contact-details">
              <p><strong>Phone:</strong> <a href="tel:905-299-9267">905-299-9267</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@phantomautocenter.com">info@phantomautocenter.com</a></p>
              <p><strong>Address:</strong> 345 Wyecroft Road Unit 5 & 6</p>
            </div>
          </section>
        </div>
      </div>

      <div className="lux-footer__bottom">
        <div className="lux-footer__bottom-inner">
          <div>© {year} PAC</div>
          <div className="lux-footer__dot" aria-hidden="true" />
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
