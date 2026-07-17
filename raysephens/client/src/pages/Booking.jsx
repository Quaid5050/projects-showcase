import { useState, useEffect } from "react";
import api from "../utils/api";
import { CalendarIcon, PhoneIcon, CheckIcon } from "../components/ui/Icons";

const services = [
  "Personal Income Tax Preparation", "Accounting & Bookkeeping Services", "Payroll Services", "Payroll Remittance",
  "HST/GST Tax Filing", "Charitable Tax Filing", "Corporate Income Tax Filing",
  "Citizenship Applications", "Sponsorship Applications", "PR Renewal", "Other"
];

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", preferredDate: "", preferredTime: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    api.get("/slots").then(r => setAvailableSlots(r.data.slots || [])).catch(() => {});
  }, []);

  const availableDates = [...new Set(availableSlots.map(s => s.date))].sort();
  const timesForDate = availableSlots.filter(s => s.date === form.preferredDate).map(s => s.time);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value, ...(e.target.name === "preferredDate" ? { preferredTime: "" } : {}) }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/booking", form);
      setSuccess(true);
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
          <div className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">Book Appointment</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Book a Free Consultation</h1>
          <p className="text-amber-200 text-lg">Select your preferred date and service. We will confirm your appointment within 1 business day.</p>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-sm">
                <h3 className="font-bold text-amber-900 mb-4 font-serif">How It Works</h3>
                {[
                  { step: "1", text: "Fill out the booking form with your details and preferred time." },
                  { step: "2", text: "We confirm your appointment via email within 1 business day." },
                  { step: "3", text: "We connect by phone or video call — no office visit required." },
                ].map(item => (
                  <div key={item.step} className="flex gap-3 mb-4">
                    <div className="w-7 h-7 bg-amber-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-800 rounded-xl p-6 text-white">
                <CalendarIcon className="w-8 h-8 text-green-300 mb-3" />
                <h3 className="font-bold mb-2">Free Consultation</h3>
                <p className="text-green-200 text-sm">Your initial consultation is completely free. We will review your needs and provide a clear quote before any work begins.</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-amber-100">
                <div className="font-semibold text-amber-900 mb-3">Prefer to Call?</div>
                <a href="tel:4168249772" className="flex items-center gap-2 text-amber-800 font-semibold hover:text-amber-900 transition-colors">
                  <PhoneIcon className="w-4 h-4" /> (416) 824-9772
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-amber-100 p-8">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Booking Request Received!</h3>
                  <p className="text-gray-600 mb-2">We will confirm your appointment within 1 business day. A confirmation has been sent to your email.</p>
                  <p className="text-gray-500 text-sm">Questions? Call us at (416) 824-9772</p>
                  <button onClick={() => setSuccess(false)} className="mt-6 text-amber-700 underline text-sm">Book another appointment</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-amber-900 font-serif mb-2">Appointment Details</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(416) 555-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
                      <select name="service" value={form.service} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <select name="preferredDate" value={form.preferredDate} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <option value="">Select a date</option>
                        {availableDates.map(d => (
                          <option key={d} value={d}>
                            {new Date(`${d}T00:00:00`).toLocaleDateString("en-CA", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
                          </option>
                        ))}
                      </select>
                      {availableDates.length === 0 && <p className="text-xs text-gray-400 mt-1">No open dates right now — please call us instead.</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <select name="preferredTime" value={form.preferredTime} onChange={handleChange} required disabled={!form.preferredDate} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-50">
                        <option value="">{form.preferredDate ? "Select a time" : "Choose a date first"}</option>
                        {timesForDate.map(t => <option key={t} value={t}>{t} EST</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any additional information about your tax situation or what you need help with..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" />
                  </div>
                  {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>}
                  <button type="submit" disabled={loading} className="w-full bg-amber-800 hover:bg-amber-900 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors">
                    {loading ? "Submitting..." : "Request Appointment"}
                  </button>
                  <p className="text-xs text-gray-500 text-center">Free consultation. No commitment required. We will confirm within 1 business day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
