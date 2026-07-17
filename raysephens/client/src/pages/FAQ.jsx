import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, CalendarIcon } from "../components/ui/Icons";

const faqs = [
  { q: "What services do you offer?", a: "We offer income tax preparation, bookkeeping, payroll processing, HST/GST filing, charitable tax filing, corporate filing, citizenship applications, family sponsorship applications, and PR card renewal. All services are delivered 100% remotely." },
  { q: "How do I send you my documents?", a: "You can securely send documents via email, or we will provide you with a secure upload link. We accept scanned copies, photos, or digital files of all required documents." },
  { q: "Do I need to come into an office?", a: "No. Our entire service is remote. We serve clients across all Canadian provinces without requiring an in-person visit. Everything is handled via email, phone, and secure file transfer." },
  { q: "How long does it take to file my taxes?", a: "Most personal returns are completed within 2–5 business days of receiving all required documents. Corporate returns and more complex files may take longer. We will always give you an accurate timeline upfront." },
  { q: "What is your pricing?", a: "Pricing varies based on the complexity of the service. We do not publish fixed rates because each client has unique needs. Contact us for a personalized quote — we are committed to affordable, transparent pricing with no hidden fees." },
  { q: "Is my financial information secure?", a: "Absolutely. We treat all client information with strict confidentiality. Documents are handled securely and are never shared with third parties without your explicit consent." },
  { q: "Can you file for clients in any province?", a: "Yes. We provide services to Canadian taxpayers in all provinces and territories, including Ontario, British Columbia, Alberta, Quebec, and beyond." },
  { q: "Do you handle late or missed filings?", a: "Yes. We can assist with late returns and filing situations where deadlines have been missed. We will work with you to minimize any penalties and get you back in compliance with the CRA." },
  { q: "What documents do I need for income tax preparation?", a: "Common documents include your T4 slips, T5 slips, RRSP contribution receipts, medical receipts, charitable donation receipts, prior year NOA, and any other relevant income or deduction documents. We will provide you with a personalized checklist." },
  { q: "How do I send my logo or branding materials?", a: "If you are a business client working with us on bookkeeping or corporate services, you can send any files directly to raystephenstax@gmail.com. We accept all common file formats." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Frequently Asked Questions</h1>
          <p className="text-amber-200 text-lg">Everything you need to know about our services. Can not find your answer? Contact us directly.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-amber-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-amber-50 transition-colors"
                >
                  <span className="font-semibold text-amber-900 pr-4">{faq.q}</span>
                  <ChevronDownIcon className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 bg-amber-50 border-t border-amber-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 font-serif mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Our team is happy to help. Reach out by phone, email, or book a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors">Send Us a Message</Link>
              <Link to="/booking" className="flex items-center justify-center gap-2 border border-amber-600 text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors">
                <CalendarIcon className="w-4 h-4" /> Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
