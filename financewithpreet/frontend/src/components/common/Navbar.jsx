import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
)
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)

// Simple links + dropdown menus per the site map
const simpleLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

const dropdowns = [
  {
    name: 'Home Financing',
    viewAll: '/services#home-financing',
    items: [
      { name: 'Overview', path: '/services#home-financing' },
      { name: 'Buying a Home', path: '/services#home-financing' },
      { name: 'Renewing a Mortgage', path: '/services#home-financing' },
      { name: 'Refinancing', path: '/services#home-financing' },
    ],
  },
  {
    name: 'Wealth Planning',
    viewAll: '/services#wealth-planning',
    items: [
      { name: 'Overview', path: '/services#wealth-planning' },
      { name: 'Retirement Planning', path: '/services#wealth-planning' },
      { name: 'Education Savings', path: '/services#wealth-planning' },
    ],
  },
  {
    name: 'Financial Protection',
    viewAll: '/services#financial-protection',
    items: [
      { name: 'Overview', path: '/services#financial-protection' },
      { name: 'Life Insurance', path: '/services#financial-protection' },
      { name: 'Critical Illness Insurance', path: '/services#financial-protection' },
      { name: 'Visitors Insurance', path: '/services#financial-protection' },
    ],
  },
  {
    name: 'Learning centre',
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Buying Guides', path: '/blog' },
      { name: 'Financial Calculators', path: '/blog' },
      { name: 'Videos', path: '/blog' },
      { name: 'FAQs', path: '/faq' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDrop, setActiveDrop] = useState(null)   // desktop hover
  const [mobileDrop, setMobileDrop] = useState(null)   // mobile accordion
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setMobileDrop(null) }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || open
        ? 'bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/10 shadow-navy'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img src="/Transparent 2.png" alt="Finance With Preet"
              className="h-9 md:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {simpleLinks.map(l => (
              <Link key={l.path} to={l.path}
                className={`relative font-medium text-sm transition-colors duration-200 py-1
                  ${location.pathname === l.path ? 'text-gold-400' : 'text-gray-300 hover:text-gold-300'}`}>
                {l.name}
              </Link>
            ))}

            {dropdowns.map(d => (
              <div key={d.name} className="relative"
                onMouseEnter={() => setActiveDrop(d.name)}
                onMouseLeave={() => setActiveDrop(null)}>
                <button className="flex items-center gap-1.5 font-medium text-sm text-gray-300 hover:text-gold-300 transition-colors duration-200 py-1">
                  {d.name}
                  <span className={`transition-transform duration-200 ${activeDrop === d.name ? 'rotate-180 text-gold-400' : ''}`}><ChevronDown /></span>
                </button>

                <AnimatePresence>
                  {activeDrop === d.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
                    >
                      <div className="bg-navy-900/98 backdrop-blur-xl border border-gold-500/15 rounded-2xl shadow-navy-lg overflow-hidden p-2">
                        {d.items.map(it => (
                          <Link key={it.name} to={it.path}
                            className="block px-4 py-2.5 rounded-xl text-sm text-gray-300 hover:text-gold-300 hover:bg-gold-500/10 transition-colors duration-150">
                            {it.name}
                          </Link>
                        ))}
                        {d.viewAll && (
                          <Link to={d.viewAll}
                            className="flex items-center gap-2 px-4 py-2.5 mt-1 rounded-xl text-sm font-semibold text-gold-400 hover:text-gold-300 hover:bg-gold-500/10 transition-colors duration-150 border-t border-white/5">
                            View All <ArrowRight />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/contact"
              className={`font-medium text-sm transition-colors duration-200 py-1 ${location.pathname === '/contact' ? 'text-gold-400' : 'text-gray-300 hover:text-gold-300'}`}>
              Contact
            </Link>

            <Link to="/booking" className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-300 hover:text-gold-400 transition-colors p-2"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-t border-gold-500/10 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {simpleLinks.map(l => (
                <Link key={l.path} to={l.path}
                  className={`py-3 px-4 rounded-xl font-medium transition-all duration-200
                    ${location.pathname === l.path ? 'text-gold-400 bg-gold-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                  {l.name}
                </Link>
              ))}

              {dropdowns.map(d => (
                <div key={d.name}>
                  <button
                    onClick={() => setMobileDrop(mobileDrop === d.name ? null : d.name)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
                    {d.name}
                    <span className={`transition-transform duration-200 ${mobileDrop === d.name ? 'rotate-180 text-gold-400' : ''}`}><ChevronDown /></span>
                  </button>
                  <AnimatePresence>
                    {mobileDrop === d.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3">
                        {d.items.map(it => (
                          <Link key={it.name} to={it.path}
                            className="block py-2.5 px-4 rounded-lg text-sm text-gray-400 hover:text-gold-300 hover:bg-white/5 transition-colors">
                            {it.name}
                          </Link>
                        ))}
                        {d.viewAll && (
                          <Link to={d.viewAll}
                            className="flex items-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-gold-400">
                            View All <ArrowRight />
                          </Link>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link to="/contact"
                className={`py-3 px-4 rounded-xl font-medium transition-all duration-200
                  ${location.pathname === '/contact' ? 'text-gold-400 bg-gold-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                Contact
              </Link>

              <Link to="/booking" className="btn-primary text-center mt-3">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
