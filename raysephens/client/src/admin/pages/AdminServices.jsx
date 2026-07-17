import { useState, useEffect, useRef } from "react";
import api from "../../utils/api";

const emptyForm = { title: "", description: "", shortDescription: "", icon: "tax", order: 0, isActive: true };

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef();

  useEffect(() => {
    api.get("/services").then(r => setServices(r.data.services || [])).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const openNew = () => { setForm(emptyForm); setEditId(null); setShowForm(true); setError(""); };
  const openEdit = s => { setForm({ title: s.title, description: s.description || "", shortDescription: s.shortDescription || "", icon: s.icon || "tax", order: s.order || 0, isActive: s.isActive }); setEditId(s._id); setShowForm(true); setError(""); };

  const handleSubmit = async e => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (fileRef.current?.files[0]) fd.append("image", fileRef.current.files[0]);
      if (editId) {
        const r = await api.put(`/services/${editId}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
        setServices(s => s.map(x => x._id === editId ? r.data.service : x));
      } else {
        const r = await api.post("/services", fd, { headers: { "Content-Type": "multipart/form-data" } });
        setServices(s => [...s, r.data.service]);
      }
      setShowForm(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async id => {
    if (!confirm("Delete this service?")) return;
    try {
      await api.delete(`/services/${id}`);
      setServices(s => s.filter(x => x._id !== id));
    } catch { alert("Failed to delete."); }
  };

  if (loading) return <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Services ({services.length})</h2>
        <button onClick={openNew} className="bg-amber-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-900 transition-colors">+ Add Service</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900">{editId ? "Edit Service" : "Add New Service"}</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                <input value={form.shortDescription} onChange={e => setForm(f => ({ ...f, shortDescription: e.target.value }))} placeholder="Shown on cards" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Description *</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                  <select value={form.icon} onChange={e => setForm(f => ({ ...f, icon: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                    {["tax", "book", "payroll", "hst", "charitable", "corporate", "citizenship", "sponsorship", "pr"].map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                  <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: parseInt(e.target.value) || 0 }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Image (Cloudinary upload)</label>
                <input ref={fileRef} type="file" accept="image/*" className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-100 file:text-amber-800 file:font-medium hover:file:bg-amber-200" />
                <p className="text-xs text-gray-400 mt-1">Recommended: 1200×800px, JPG or PNG</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} className="accent-amber-700" />
                <label htmlFor="isActive" className="text-sm text-gray-700">Active (visible on website)</label>
              </div>
              {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</button>
                <button type="submit" disabled={saving} className="flex-1 bg-amber-800 hover:bg-amber-900 disabled:opacity-60 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors">
                  {saving ? "Saving..." : editId ? "Save Changes" : "Add Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.length === 0 ? (
          <div className="col-span-3 text-center py-12 text-gray-400 bg-white rounded-xl border border-gray-100">No services yet. Add your first service.</div>
        ) : services.map(s => (
          <div key={s._id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {s.image && <img src={s.image} alt={s.title} className="w-full h-40 object-cover" />}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${s.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{s.isActive ? "Active" : "Hidden"}</span>
              </div>
              {s.shortDescription && <p className="text-gray-500 text-xs mb-3">{s.shortDescription}</p>}
              <div className="flex gap-2 pt-2 border-t border-gray-50">
                <button onClick={() => openEdit(s)} className="flex-1 text-center text-amber-700 border border-amber-200 text-xs py-1.5 rounded-lg hover:bg-amber-50 transition-colors">Edit</button>
                <button onClick={() => handleDelete(s._id)} className="flex-1 text-center text-red-600 border border-red-200 text-xs py-1.5 rounded-lg hover:bg-red-50 transition-colors">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
