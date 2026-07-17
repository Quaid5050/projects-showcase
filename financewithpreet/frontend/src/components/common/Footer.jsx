import { useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.64 4.75 6.07V24h-4v-7.1c0-1.7-.03-3.87-2.36-3.87-2.36 0-2.72 1.85-2.72 3.75V24h-4V8z"/></svg>
)
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const quickLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Learning Centre', '/blog'],
  ['FAQs', '/faq'],
  ['Financial Calculators', '/blog'],
]
const serviceLinks = [
  ['Home Financing', '/services#home-financing'],
  ['Wealth Planning', '/services#wealth-planning'],
  ['Financial Protection', '/services#financial-protection'],
  ['Visitor to Canada Insurance', '/services#financial-protection'],
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await API.post('/newsletter', { email })
      toast.success('Subscribed! Thank you.')
      setEmail('')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-navy-950 text-white border-t border-gold-500/10">
      {/* Top decorative gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/Transparent 2.png" alt="Finance With Preet" className="h-11 w-auto object-contain" />
            </Link>
            <p className="text-gold-400 font-serif text-sm italic mb-4">
              Securing Your Today. Building Your Tomorrow.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Helping Canadian families buy homes, build wealth, and protect their future — through honest, personalized guidance across mortgages, investments and insurance.
            </p>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Follow Me</p>
              <div className="flex items-center gap-3">
                {[
                  ['https://instagram.com/financewithpreet', <InstagramIcon key="i" />, 'Instagram'],
                  ['https://facebook.com/financewithpreet', <FacebookIcon key="f" />, 'Facebook'],
                  ['https://linkedin.com/in/financewithpreet', <LinkedInIcon key="l" />, 'LinkedIn'],
                  ['https://wa.me/18732882055', <WhatsAppIcon key="w" />, 'WhatsApp'],
                ].map(([href, icon, label]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                    className="w-9 h-9 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500 hover:text-navy-900 hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(([n, p]) => (
                <li key={n}>
                  <Link to={p} className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500/50 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(([n, p]) => (
                <li key={n}>
                  <Link to={p} className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500/40 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="tel:8732882055" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                  <div className="w-8 h-8 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500 shrink-0"><PhoneIcon /></div>
                  (873) 288-2055
                </a>
              </li>
              <li>
                <a href="mailto:financewithpreet@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm break-all">
                  <div className="w-8 h-8 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500 shrink-0"><MailIcon /></div>
                  financewithpreet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500 shrink-0"><MapPinIcon /></div>
                Ottawa, Kanata &amp; Surrounding Areas
              </li>
            </ul>

            <h4 className="font-semibold text-gold-400 mb-3 uppercase tracking-wider text-xs">Newsletter</h4>
            <form onSubmit={subscribe} className="flex flex-col gap-2">
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-navy-800 border border-navy-600/50 focus:border-gold-500/60 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition-colors"
              />
              <button type="submit" disabled={loading}
                className="bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-gold hover:shadow-gold-lg disabled:opacity-60">
                {loading ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Finance With Preet. All rights reserved.</p>
          <Link to="/booking" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </footer>
  )
}
