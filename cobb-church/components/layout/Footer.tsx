import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy-dark text-sm font-bold">⛪</span>
              </div>
              <div>
                <div className="font-bold text-sm">COBB CHURCH</div>
                <div className="text-xs text-gold font-semibold">NETWORK</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Stronger Churches. Stronger Community. Unity in Action. One Community. One Mission.
            </p>
            <p className="text-xs text-gray-400">
              An initiative of Cobb Pastors Alliance Powered by The Shepherds Table
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-gold transition-colors">Resources</Link></li>
              <li><Link href="/directory" className="text-gray-300 hover:text-gold transition-colors">Directory</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-gold transition-colors">Events</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Stay Connected */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">STAY CONNECTED</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@cobbchurchnetwork.org" className="text-gray-300 hover:text-gold transition-colors">
                  info@cobbchurchnetwork.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:(470) 773-1234" className="text-gray-300 hover:text-gold transition-colors">
                  (470) 773-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span className="text-gray-300">Serving Cobb County, Georgia</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gold hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">NEWSLETTER</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to stay up to date with what&apos;s happening across the network.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-navy-dark border-0 placeholder-gray-400"
              />
              <Button className="bg-gold hover:bg-gold-light text-navy-dark font-semibold w-full">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2026 Cobb Church Network. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
