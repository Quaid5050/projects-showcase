import { useState } from "react";
import api from "../utils/api";
import { PhoneIcon, EmailIcon, WebIcon, MapPinIcon, CheckIcon } from "../components/ui/Icons";

const services = [
  "Personal Income Tax Preparation", "Accounting & Bookkeeping Services", "Payroll Services", "Payroll Remittance",
  "HST/GST Tax Filing", "Charitable Tax Filing", "Corporate Income Tax Filing",
  "Citizenship Applications", "Sponsorship Applications", "PR Renewal", "Other"
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/contact", form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Get In Touch</h1>
          <p className="text-amber-200 text-lg">We respond to all inquiries within 1 business day. Contact us by phone, email, or the form below.</p>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-amber-900 font-serif mb-6">Contact Information</h2>
              <div className="space-y-5">
                <a href="tel:4168249772" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Phone</div>
                    <div className="text-amber-900 font-semibold group-hover:text-amber-700 transition-colors">(416) 824-9772</div>
                  </div>
                </a>
                <a href="mailto:raystephenstax@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EmailIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email</div>
                    <div className="text-amber-900 font-semibold group-hover:text-amber-700 transition-colors text-sm">raystephenstax@gmail.com</div>
                  </div>
                </a>
                <a href="https://raystephens.ca" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <WebIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Website</div>
                    <div className="text-amber-900 font-semibold group-hover:text-amber-700 transition-colors">raystephens.ca</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Service Area</div>
                    <div className="text-amber-900 font-semibold">All Canadian Provinces</div>
                    <div className="text-gray-500 text-sm">100% Remote Service</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-900 rounded-xl p-5 text-white">
                <div className="font-semibold mb-2">Social Media</div>
                <div className="text-amber-300 text-sm">@raystephenstax</div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-amber-100 p-8">
              <h2 className="text-xl font-bold text-amber-900 font-serif mb-6">Send Us a Message</h2>

              {success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We will get back to you within 1 business day. You should also receive a confirmation email shortly.</p>
                  <button onClick={() => setSuccess(false)} className="mt-6 text-amber-700 underline text-sm">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="(416) 555-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us what you need help with..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none" />
                  </div>
                  {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>}
                  <button type="submit" disabled={loading} className="w-full bg-amber-800 hover:bg-amber-900 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-xs text-gray-500 text-center">We respond within 1 business day. Your information is kept strictly confidential.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
