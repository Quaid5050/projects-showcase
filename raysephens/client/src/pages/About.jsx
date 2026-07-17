import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, PhoneIcon } from '../components/ui/Icons';

const values = [
  { title: 'Accuracy', desc: 'Every filing is reviewed for completeness and CRA compliance before submission.' },
  { title: 'Confidentiality', desc: 'Your financial information is handled with the highest level of privacy and security.' },
  { title: 'Accessibility', desc: 'All services are fully remote, available to Canadians across every province.' },
  { title: 'Affordability', desc: 'Transparent, competitive pricing with no hidden fees. Contact us for a quote.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">About Us</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Who We Are</h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">A remote tax and financial services firm dedicated to making professional accounting accessible to every Canadian.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">Our Story</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif mb-6">Serving Canadian Taxpayers Remotely</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ray Stephens Tax Services was founded with a simple mission: to provide every Canadian with access to professional tax and financial services — regardless of where they live.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand that visiting a tax office is not always convenient or possible. That is why we built a fully remote operation that delivers the same quality, accuracy, and personal attention you would expect from an in-person firm.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From income tax returns and bookkeeping to payroll, HST filing, charitable tax, corporate filing, and immigration applications — we handle it all. Securely. Efficiently. On time.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors">
                Get In Touch <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
                alt="Professional service"
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-2">Our Principles</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 font-serif">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-bold text-amber-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">Have Questions? We Are Here to Help.</h2>
          <p className="text-green-200 mb-8">Reach out by phone, email, or our contact form. We respond within 1 business day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-800 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">Contact Us</Link>
            <a href="tel:4168249772" className="flex items-center justify-center gap-2 border border-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <PhoneIcon className="w-4 h-4" /> (416) 824-9772
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
