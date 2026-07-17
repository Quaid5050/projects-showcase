import { useState } from "react";
import api from "../utils/api";
import { PhoneIcon, CheckIcon } from "../components/ui/Icons";

const maritalOptions = ["Single", "Married", "Divorced", "Common Law", "Separated", "Widowed"];
const statusOptions = ["Permanent Resident", "Canadian Citizen", "Refugee", "Other"];

const initialForm = {
  firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "", gender: "",
  sin: "", maritalStatus: "", statusInCanada: "", dependants: "",
  street: "", street2: "", city: "", province: "", postalCode: "",
};

export default function TaxIntake() {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [certified, setCertified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleFiles = e => setFiles(Array.from(e.target.files));

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    if (!certified) {
      setError("Please check the certification box to submit.");
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append("certified", "true");
      files.forEach(f => data.append("documents", f));

      await api.post("/tax-intake", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
          <div className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">Tax Intake Form</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Submit Your Tax Documents</h1>
          <p className="text-amber-200 text-lg">Fill in your details and securely upload your tax documents below.</p>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-8">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Submission Received!</h3>
                <p className="text-gray-600 mb-2">Your information and documents have been securely received. We will review and contact you shortly.</p>
                <p className="text-gray-500 text-sm">Questions? Call us at (416) 824-9772</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-amber-900 font-serif mb-2">(416) 824-9772 | raystephenstax@gmail.com</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="example@example.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(000) 000-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select name="gender" value={form.gender} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="">Please Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Social Insurance Number *</label>
                  <input name="sin" value={form.sin} onChange={handleChange} required placeholder="XXX-XXX-XXX" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {maritalOptions.map(o => (
                      <label key={o} className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="radio" name="maritalStatus" value={o} checked={form.maritalStatus === o} onChange={handleChange} className="accent-amber-800" />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status in Canada</label>
                  <div className="grid grid-cols-2 gap-2">
                    {statusOptions.map(o => (
                      <label key={o} className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="radio" name="statusInCanada" value={o} checked={form.statusInCanada === o} onChange={handleChange} className="accent-amber-800" />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Please list your Dependants (Name, Date of Birth & Gender)</label>
                  <textarea name="dependants" value={form.dependants} onChange={handleChange} rows={3} placeholder="Example: John Doe, January 01st 2022 & Male" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input name="street" value={form.street} onChange={handleChange} placeholder="Street Address" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <input name="street2" value={form.street2} onChange={handleChange} placeholder="Street Address Line 2" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    <input name="province" value={form.province} onChange={handleChange} placeholder="State / Province" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="Postal / Zip Code" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Please upload your Tax Forms</label>
                  <input type="file" multiple onChange={handleFiles} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="w-full border border-dashed border-gray-300 rounded-lg px-4 py-6 text-sm text-gray-500" />
                  <p className="text-xs text-gray-500 mt-1">List of Forms: T3, T4, T5, Donation Receipts & RSP</p>
                  {files.length > 0 && (
                    <ul className="text-xs text-gray-600 mt-2 space-y-1">
                      {files.map((f, i) => <li key={i}>{f.name}</li>)}
                    </ul>
                  )}
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input type="checkbox" checked={certified} onChange={e => setCertified(e.target.checked)} className="mt-1 accent-amber-800" />
                  <span>I, the above name, hereby certify that I am the tax payer or authorized by the tax payer to grant access to Ray Stephens and Associates to view and make changes to my Canada Revenue Agency information. I declare that the above information is accurate to the best of my knowledge.</span>
                </label>

                {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>}

                <button type="submit" disabled={loading} className="w-full bg-amber-800 hover:bg-amber-900 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors">
                  {loading ? "Submitting..." : "Submit"}
                </button>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                  <PhoneIcon className="w-3 h-3" /> Prefer to call? (416) 824-9772
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
