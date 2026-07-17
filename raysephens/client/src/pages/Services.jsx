import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { TaxIcon, BookkeepingIcon, PayrollIcon, HSTIcon, CharitableIcon, CorporateIcon, CitizenshipIcon, SponsorshipIcon, PRIcon, ArrowRightIcon, CalendarIcon } from "../components/ui/Icons";

const defaultServices = [
  { _id: "1", title: "Personal Income Tax Preparation", shortDescription: "Accurate personal income tax returns filed on time with full CRA compliance.", icon: "tax" },
  { _id: "2", title: "Accounting & Bookkeeping Services", shortDescription: "Complete accounting and bookkeeping management for small businesses and sole proprietors.", icon: "book" },
  { _id: "3", title: "Payroll Services", shortDescription: "Comprehensive payroll processing including deductions, T4 slips, and ROE filing.", icon: "payroll" },
  { _id: "4", title: "Payroll Remittance", shortDescription: "Timely payroll remittance filing and CRA source deduction submissions.", icon: "payroll" },
  { _id: "5", title: "HST/GST Tax Filing", shortDescription: "Accurate HST/GST registration, preparation, and CRA filing for businesses of all sizes.", icon: "hst" },
  { _id: "6", title: "Charitable Tax Filing", shortDescription: "Specialized tax preparation for charitable donations and registered charities.", icon: "charitable" },
  { _id: "7", title: "Corporate Income Tax Filing", shortDescription: "Full corporate income tax return preparation, T2 filing, and year-end financial statement services.", icon: "corporate" },
  { _id: "8", title: "Citizenship Applications", shortDescription: "Document preparation and review support for Canadian citizenship applications.", icon: "citizenship" },
  { _id: "9", title: "Sponsorship Applications", shortDescription: "Family and spousal sponsorship application assistance with document review and submission support.", icon: "sponsorship" },
  { _id: "10", title: "PR Renewal", shortDescription: "Permanent Resident card renewal application preparation and documentation support.", icon: "pr" },
];

const iconMap = { tax: TaxIcon, book: BookkeepingIcon, payroll: PayrollIcon, hst: HSTIcon, charitable: CharitableIcon, corporate: CorporateIcon, citizenship: CitizenshipIcon, sponsorship: SponsorshipIcon, pr: PRIcon };

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/services")
      .then(r => setServices(r.data.services || []))
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  const displayServices = services.length > 0 ? services : defaultServices;

  const getIcon = (icon) => {
    const Icon = iconMap[icon] || TaxIcon;
    return <Icon className="w-7 h-7" />;
  };

  return (
    <div>
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">Services</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Our Services</h1>
          <p className="text-amber-200 text-lg">Professional remote tax, financial, and immigration services for Canadians across all provinces.</p>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayServices.map(service => (
                <div key={service._id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-amber-100">
                  {service.image && (
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-800 mb-4">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="font-bold text-amber-900 text-xl mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDescription || service.description || "Professional remote service delivered with precision."}</p>
                    <div className="border-t border-amber-100 pt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500 italic">Contact for pricing</span>
                      <Link to="/contact" className="inline-flex items-center gap-1 text-amber-800 text-sm font-semibold hover:gap-2 transition-all">
                        Inquire <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">Ready to Get Started?</h2>
          <p className="text-amber-300 mb-8">Book a free consultation or send us a message to discuss your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-amber-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
              <CalendarIcon className="w-4 h-4" /> Book Appointment
            </Link>
            <Link to="/contact" className="border border-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
