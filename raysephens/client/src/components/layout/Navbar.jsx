import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, CloseIcon, PhoneIcon } from '../ui/Icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
  { name: 'Submit Documents', path: '/tax-intake' },
  { name: 'Book Appointment', path: '/booking' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
      {/* Top bar */}
      <div className="bg-brown-700 text-brown-100 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center">
          <span className="hidden sm:inline truncate">Remote Tax & Bookkeeping Services — Serving All of Canada</span>
          <a href="tel:4168249772" className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">
            <PhoneIcon className="w-3.5 h-3.5" />
            (416) 824-9772
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="Ray Stephens Tax Services" className="h-14 sm:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, -1).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-brown-700 bg-brown-50'
                    : 'text-gray-700 hover:text-brown-700 hover:bg-brown-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="ml-2 px-5 py-2 bg-brown-700 text-white rounded-md text-sm font-semibold hover:bg-brown-800 transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-brown-700 hover:bg-brown-50"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-brown-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  link.path === '/booking'
                    ? 'bg-brown-700 text-white text-center mt-2'
                    : pathname === link.path
                      ? 'text-brown-700 bg-brown-50'
                      : 'text-gray-700 hover:text-brown-700 hover:bg-brown-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
