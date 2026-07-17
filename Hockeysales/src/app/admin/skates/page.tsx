"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

interface Skate {
  id: string;
  name: string;
  price: string;
  desc: string;
  status: string;
  image: string;
  sizes: string[];
}

const empty = { name: "", price: "", desc: "", status: "In Stock", image: "", sizes: "" };
const STATUSES = ["In Stock", "Coming Soon", "Sold Out"];
const inputClass = "w-full px-3 py-2 bg-[#f8f9fa] border border-[#c5c6cd] rounded font-inter text-sm outline-none focus:border-[#006399]";

export default function AdminSkatesPage() {
  const [skates, setSkates] = useState<Skate[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<typeof empty>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    const res = await fetch("/api/admin/skates");
    if (res.ok) setSkates((await res.json()).skates || []);
    setLoading(false);
  };
  useEffect(() => {
    load();
  }, []);

  const resetForm = () => {
    setForm(empty);
    setEditingId(null);
    setError("");
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      setForm((f) => ({ ...f, image: data.url }));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Skate name is required.");
      return;
    }
    setSaving(true);
    setError("");
    const url = editingId ? `/api/admin/skates/${editingId}` : "/api/admin/skates";
    const method = editingId ? "PATCH" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSaving(false);
    if (!res.ok) {
      setError((await res.json()).error || "Failed to save.");
      return;
    }
    resetForm();
    setLoading(true);
    load();
  };

  const edit = (s: Skate) => {
    setEditingId(s.id);
    setForm({ name: s.name, price: s.price, desc: s.desc, status: s.status || "In Stock", image: s.image, sizes: (s.sizes || []).join(", ") });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this skate?")) return;
    await fetch(`/api/admin/skates/${id}`, { method: "DELETE" });
    setSkates((prev) => prev.filter((s) => s.id !== id));
    if (editingId === id) resetForm();
  };

  const seed = async () => {
    setSeeding(true);
    await fetch("/api/admin/seed", { method: "POST" });
    setSeeding(false);
    setLoading(true);
    load();
  };

  return (
    <AdminShell title="Skates">
      <form onSubmit={save} className="bg-white border border-[#c5c6cd] rounded-xl p-6 mb-8">
        <h2 className="font-montserrat text-lg font-bold text-black mb-4">{editingId ? "Edit Skate" : "Add New Skate"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Bauer Supreme Skates" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Price</label>
            <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className={inputClass} placeholder="$650 or Coming in July" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Status</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={inputClass}>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Image</label>
            <div className="flex items-center gap-3">
              {form.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={form.image} alt="preview" className="w-14 h-14 object-cover rounded border border-[#c5c6cd]" />
              )}
              <label className={`inline-flex items-center gap-2 px-4 py-2 rounded font-inter text-sm font-semibold cursor-pointer transition-colors ${uploading ? "bg-[#e7e8e9] text-[#75777e]" : "bg-[#006399] text-white hover:bg-[#004972]"}`}>
                <span className="material-symbols-outlined text-lg">upload</span>
                {uploading ? "Uploading..." : form.image ? "Change" : "Upload"}
                <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} className="hidden" />
              </label>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Description</label>
            <textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} rows={2} className={`${inputClass} resize-none`} placeholder="Short description..." />
          </div>
          <div className="md:col-span-2">
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Available Sizes (comma-separated)</label>
            <input value={form.sizes} onChange={(e) => setForm({ ...form, sizes: e.target.value })} className={inputClass} placeholder="6.0 Fit 2, 6.5 Fit 2, 7.0 Fit 2" />
          </div>
        </div>
        {error && <p className="text-red-500 font-inter text-sm mt-3">{error}</p>}
        <div className="flex gap-3 mt-4">
          <button type="submit" disabled={saving} className="bg-black text-white px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors disabled:opacity-70">
            {saving ? "Saving..." : editingId ? "Update Skate" : "Add Skate"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="bg-[#e7e8e9] text-black px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#d9dadb]">Cancel</button>
          )}
        </div>
      </form>

      {loading ? (
        <p className="font-inter text-[#44474d]">Loading...</p>
      ) : skates.length === 0 ? (
        <div className="bg-white border border-dashed border-[#c5c6cd] rounded-xl p-8 text-center">
          <p className="font-inter text-[#44474d] mb-4">No skates yet. Import your current website skates to get started.</p>
          <button onClick={seed} disabled={seeding} className="bg-black text-white px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] disabled:opacity-70">
            {seeding ? "Importing..." : "Import Current Inventory"}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {skates.map((s) => (
            <div key={s.id} className="bg-white border border-[#c5c6cd] rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-montserrat font-bold text-black">{s.name}</span>
                  {s.status && <span className="font-inter text-xs bg-[#f8f9fa] border border-[#c5c6cd] px-2 py-0.5 rounded">{s.status}</span>}
                </div>
                <p className="font-inter text-sm text-[#44474d] truncate">{s.price} {s.sizes.length > 0 && `· ${s.sizes.length} sizes`}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => edit(s)} className="bg-[#006399] text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-[#004972]">Edit</button>
                <button onClick={() => remove(s.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
