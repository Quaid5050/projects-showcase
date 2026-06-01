import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiLogOut, FiUser } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/resources', label: 'Resources' },
    { path: '/pastor-stories', label: 'Pastor Stories' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div className="nav-backdrop" onClick={() => setIsOpen(false)} />
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
  <img src="/images/logo2.png" alt="Cobb Church Network Logo" className="logo-img" />
</Link>

          <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive && link.path !== '/' ? 'active' : ''
                  }
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile-only auth buttons inside drawer */}
            <li className="mobile-auth">
              {user ? (
                <>
                  <Link
                    to={isAdmin ? '/admin' : '/dashboard'}
                    className="nav-btn primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser size={14} />
                    {isAdmin ? 'Admin' : 'Dashboard'}
                  </Link>
                  <button onClick={handleLogout} className="nav-btn outline">
                    <FiLogOut size={14} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/request-access" className="nav-btn primary" onClick={() => setIsOpen(false)}>
                    Join the Network
                  </Link>
                  <Link to="/login" className="nav-btn outline" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </>
              )}
            </li>
          </ul>

          <div className="navbar-actions">
            {user ? (
              <>
                <Link
                  to={isAdmin ? '/admin' : '/dashboard'}
                  className="nav-btn primary"
                >
                  <FiUser size={14} />
                  {isAdmin ? 'Admin' : 'Dashboard'}
                </Link>
                <button onClick={handleLogout} className="nav-btn outline icon-only" title="Logout">
                  <FiLogOut size={18} />
                </button>
              </>
            ) : (
              <>
                <Link to="/request-access" className="nav-btn primary">Join the Network</Link>
                <Link to="/login" className="nav-btn outline">Login</Link>
              </>
            )}

            <button
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;