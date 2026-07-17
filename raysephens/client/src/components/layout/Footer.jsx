import { Link } from 'react-router-dom';
import { PhoneIcon, EmailIcon, WebIcon } from '../ui/Icons';

export default function Footer() {
  const services = [
    'Personal Income Tax Preparation', 'Accounting & Bookkeeping Services', 'Payroll Services',
    'Payroll Remittance', 'HST/GST Tax Filing', 'Charitable Tax Filing', 'Corporate Income Tax Filing',
    'Citizenship Applications', 'Sponsorship Applications', 'PR Renewal'
  ];

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Ray Stephens Tax Services" className="h-16 w-auto mb-4 object-contain" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Remote income tax, payroll, and bookkeeping services for Canadian individuals and businesses. Professional. Reliable. Affordable.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-amber-900 font-semibold mb-4 text-sm tracking-wider uppercase">Our Services</h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map(s => (
                <Link key={s} to="/services" className="text-sm text-gray-500 hover:text-amber-800 transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-900 font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h3>
            <div className="space-y-3">
              <a href="tel:4168249772" className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-800 transition-colors">
                <PhoneIcon className="w-4 h-4 text-forest-600 flex-shrink-0" />
                (416) 824-9772
              </a>
              <a href="mailto:raystephenstax@gmail.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-800 transition-colors">
                <EmailIcon className="w-4 h-4 text-forest-600 flex-shrink-0" />
                raystephenstax@gmail.com
              </a>
              <a href="https://raystephens.ca" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-800 transition-colors">
                <WebIcon className="w-4 h-4 text-forest-600 flex-shrink-0" />
                raystephens.ca
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ray Stephens Tax Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-amber-800 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-amber-800 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
