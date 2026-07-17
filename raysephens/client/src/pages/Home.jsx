import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import {
  ArrowRightIcon, CheckIcon, ShieldIcon, PhoneIcon, CalendarIcon,
  TaxIcon, BookkeepingIcon, PayrollIcon, StarIcon, EmailIcon, ChevronDownIcon
} from '../components/ui/Icons';

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Remote Service' },
  { value: 'All', label: 'Provinces Served' },
];

const testimonials = [
  { name: 'Sarah M.', location: 'Toronto, ON', rating: 5, text: 'Ray Stephens made my tax filing completely stress-free. Professional, thorough, and done on time every year.' },
  { name: 'James T.', location: 'Vancouver, BC', rating: 5, text: 'I switched all my bookkeeping to this firm. The remote service is seamless and the team is always responsive.' },
  { name: 'Priya K.', location: 'Calgary, AB', rating: 5, text: 'Got help with my citizenship application documents and tax filing simultaneously. Saved me so much time.' },
];

const processSteps = [
  { icon: CalendarIcon, title: 'Book a Free Consultation', desc: 'Pick a date and time that works for you — no office visit required.' },
  { icon: EmailIcon, title: 'Send Your Documents', desc: 'Share your tax slips and paperwork securely by email or upload link.' },
  { icon: TaxIcon, title: 'We Prepare & Review', desc: 'Our team prepares your return and walks you through it before filing.' },
  { icon: CheckIcon, title: 'Sign & Relax', desc: 'Approve electronically and we handle the rest — CRA-compliant, every time.' },
];

const homeFaqs = [
  { q: 'Do I need to come into an office?', a: 'No. Our entire service is remote. We serve clients across all Canadian provinces without requiring an in-person visit.' },
  { q: 'How long does it take to file my taxes?', a: 'Most personal returns are completed within 2–5 business days of receiving all required documents.' },
  { q: 'Is my financial information secure?', a: 'Absolutely. We treat all client information with strict confidentiality and never share it with third parties.' },
];

const defaultServices = [
  { _id: '1', title: 'Personal Income Tax Preparation', shortDescription: 'Accurate personal income tax returns filed on time with full CRA compliance.' },
  { _id: '2', title: 'Accounting & Bookkeeping Services', shortDescription: 'Complete accounting and bookkeeping management for small businesses and sole proprietors.' },
  { _id: '3', title: 'Payroll Services', shortDescription: 'Streamlined payroll processing for businesses of all sizes.' },
  { _id: '4', title: 'Payroll Remittance', shortDescription: 'Timely payroll remittance filing and CRA source deduction submissions.' },
  { _id: '5', title: 'HST/GST Tax Filing', shortDescription: 'Accurate HST/GST registration, preparation, and CRA filing.' },
  { _id: '6', title: 'Corporate Income Tax Filing', shortDescription: 'Full corporate income tax return preparation and compliance services.' },
];

export default function Home() {
  const [services, setServices] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    api.get('/services').then(r => setServices(r.data.services?.slice(0, 6) || [])).catch(() => {});
    api.get('/slots').then(r => setAvailableDates([...new Set((r.data.slots || []).map(s => s.date))])).catch(() => {});
  }, []);

  const displayServices = services.length > 0 ? services : defaultServices;

  const calendarMonth = availableDates.length > 0
    ? new Date(`${availableDates[0]}T00:00:00`)
    : new Date();
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const monthLabel = calendarMonth.toLocaleDateString('en-CA', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const availableDaySet = new Set(
    availableDates
      .filter(d => {
        const dt = new Date(`${d}T00:00:00`);
        return dt.getFullYear() === year && dt.getMonth() === month;
      })
      .map(d => parseInt(d.split('-')[2], 10))
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
            alt="Tax professional working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 via-brown-800/75 to-brown-700/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 text-forest-300 text-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
              Serving All of Canada — 100% Remote
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight mb-6">
              Professional Tax &<br />
              <span className="text-yellow-400">Financial Services</span><br />
              You Can Trust
            </h1>
            <p className="text-lg text-brown-200 mb-8 leading-relaxed">
              Remote income tax preparation, bookkeeping, payroll, and immigration services for Canadian individuals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-brown-600 hover:bg-brown-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                <CalendarIcon className="w-5 h-5" /> Book Free Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
                View Services <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {["CRA Registered", "Secure & Confidential", "All Provinces"].map(b => (
                <div key={b} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckIcon className="w-4 h-4 text-green-400" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white font-serif">{s.value}</div>
                <div className="text-green-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">What We Offer</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif mb-4">Comprehensive Tax & Financial Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From personal tax returns to corporate filing, bookkeeping, payroll, and immigration — all handled remotely.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map(service => (
              <div key={service._id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-amber-100 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-800 mb-4 group-hover:bg-amber-800 group-hover:text-white transition-all">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-8 h-8 object-cover rounded" />
                  ) : (
                    <TaxIcon className="w-7 h-7" />
                  )}
                </div>
                <h3 className="font-bold text-amber-900 mb-2 text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.shortDescription || "Professional remote service delivered with precision and care."}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-amber-700 text-sm font-medium mt-4 hover:gap-2 transition-all">
                  Contact for pricing <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors">
              View All Services <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">How It Works</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif mb-4">Getting Started Is Simple</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From booking to filing, our remote process takes the hassle out of tax season.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative bg-amber-50 rounded-xl p-6 border border-amber-100">
                <div className="w-12 h-12 bg-amber-800 text-white rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-amber-300 text-4xl font-bold font-serif absolute top-4 right-5 select-none">{i + 1}</div>
                <h3 className="font-bold text-amber-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule / Calendar */}
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-green-300 text-sm font-semibold tracking-widest uppercase mb-2">Schedule Online</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-6">Pick a Time That Works for You</h2>
              <p className="text-green-200 mb-8 leading-relaxed">
                Book your free consultation directly through our online calendar. Choose a date and time, and we will send you a confirmation with a video call link — no phone tag, no waiting.
              </p>
              <div className="space-y-4 mb-8">
                {["Instant confirmation by email", "30-minute free consultation", "Reschedule anytime, no fees"].map(b => (
                  <div key={b} className="flex items-center gap-3 text-white">
                    <CheckIcon className="w-5 h-5 text-green-300 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
              <Link to="/booking" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-amber-900 font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105">
                <CalendarIcon className="w-5 h-5" /> Check Available Times
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-amber-900 font-serif text-lg">{monthLabel}</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <div key={i}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {Array.from({ length: firstWeekday }, (_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const isAvailable = availableDaySet.has(day);
                  const cell = (
                    <div
                      className={`aspect-square flex items-center justify-center rounded-lg ${
                        isAvailable
                          ? "bg-amber-800 text-white font-semibold cursor-pointer hover:bg-amber-900"
                          : "text-gray-400"
                      }`}
                    >
                      {day}
                    </div>
                  );
                  return isAvailable
                    ? <Link key={day} to="/booking">{cell}</Link>
                    : <div key={day}>{cell}</div>;
                })}
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <div className="w-3 h-3 bg-amber-800 rounded" />
                {availableDaySet.size > 0 ? "Available consultation slots" : "No open slots yet — check back soon or call us"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">Why Choose Us</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif mb-6">Remote Service. Real Expertise.</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We provide the same quality of service you would expect from a high-end tax firm — delivered entirely online. No waiting rooms. No travel. Just results.
              </p>
              <div className="space-y-4">
                {[
                  { title: "CRA-Compliant Filing", desc: "Every return and submission meets Canada Revenue Agency standards." },
                  { title: "Secure Document Handling", desc: "Your financial data is treated with strict confidentiality at all times." },
                  { title: "All-Province Service", desc: "We serve clients across all Canadian provinces and territories." },
                  { title: "Fast Turnaround", desc: "Returns processed efficiently, with deadlines always respected." },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80"
                alt="Professional tax services"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-800 text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldIcon className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">Trusted Service</span>
                </div>
                <div className="text-amber-200 text-sm">500+ satisfied clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">Client Reviews</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-yellow-500" filled />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="border-t border-amber-100 pt-3">
                  <div className="font-semibold text-amber-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">Common Questions</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {homeFaqs.map((faq, i) => (
              <div key={i} className="border border-amber-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-amber-50 transition-colors"
                >
                  <span className="font-semibold text-amber-900 pr-4">{faq.q}</span>
                  <ChevronDownIcon className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 bg-amber-50 border-t border-amber-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="inline-flex items-center gap-1 text-amber-700 font-semibold hover:gap-2 transition-all">
              View All FAQs <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">Ready to File? Let Us Handle It.</h2>
          <p className="text-amber-300 text-lg mb-8">Book a free consultation and let us handle your taxes, bookkeeping, or immigration paperwork — all remotely.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-amber-900 font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105">
              <CalendarIcon className="w-5 h-5" /> Book Free Consultation
            </Link>
            <a href="tel:4168249772" className="inline-flex items-center justify-center gap-2 border border-amber-600 text-white hover:bg-amber-800 px-8 py-4 rounded-lg text-lg transition-all">
              <PhoneIcon className="w-5 h-5" /> Call (416) 824-9772
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
