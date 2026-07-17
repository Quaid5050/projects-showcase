"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  status: string;
  description: string;
  image: string;
}

const empty = { name: "", brand: "", category: "", price: "", status: "In Stock", description: "", image: "" };
const STATUSES = ["In Stock", "Coming Soon", "Sold Out"];
const inputClass = "w-full px-3 py-2 bg-[#f8f9fa] border border-[#c5c6cd] rounded font-inter text-sm outline-none focus:border-[#006399]";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<typeof empty>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    const res = await fetch("/api/admin/products");
    if (res.ok) {
      const data = await res.json();
      setProducts(data.products || []);
    }
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

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Product name is required.");
      return;
    }
    setSaving(true);
    setError("");
    const url = editingId ? `/api/admin/products/${editingId}` : "/api/admin/products";
    const method = editingId ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to save.");
      return;
    }
    resetForm();
    setLoading(true);
    load();
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

  const edit = (p: Product) => {
    setEditingId(p.id);
    setForm({ name: p.name, brand: p.brand, category: p.category, price: p.price, status: p.status || "In Stock", description: p.description, image: p.image });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
    if (editingId === id) resetForm();
  };

  return (
    <AdminShell title="Products">
      {/* Add / Edit form */}
      <form onSubmit={save} className="bg-white border border-[#c5c6cd] rounded-xl p-6 mb-8">
        <h2 className="font-montserrat text-lg font-bold text-black mb-4">{editingId ? "Edit Product" : "Add New Product"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="e.g. Bauer Vapor Hyperlite Stick" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Brand</label>
            <input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className={inputClass} placeholder="Bauer / CCM / Knapper" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Category</label>
            <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass} placeholder="Stick / Skate / Protective" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Price</label>
            <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className={inputClass} placeholder="$220 or Contact for Pricing" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Status</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={inputClass}>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Product Image</label>
            <div className="flex items-center gap-3">
              {form.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={form.image} alt="preview" className="w-16 h-16 object-cover rounded border border-[#c5c6cd]" />
              )}
              <label className={`inline-flex items-center gap-2 px-4 py-2 rounded font-inter text-sm font-semibold cursor-pointer transition-colors ${uploading ? "bg-[#e7e8e9] text-[#75777e]" : "bg-[#006399] text-white hover:bg-[#004972]"}`}>
                <span className="material-symbols-outlined text-lg">upload</span>
                {uploading ? "Uploading..." : form.image ? "Change Image" : "Upload Image"}
                <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} className="hidden" />
              </label>
              {form.image && !uploading && (
                <button type="button" onClick={() => setForm({ ...form, image: "" })} className="font-inter text-xs text-red-600 hover:underline">Remove</button>
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className={`${inputClass} resize-none`} placeholder="Short product description..." />
          </div>
        </div>
        {error && <p className="text-red-500 font-inter text-sm mt-3">{error}</p>}
        <div className="flex gap-3 mt-4">
          <button type="submit" disabled={saving} className="bg-black text-white px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors disabled:opacity-70">
            {saving ? "Saving..." : editingId ? "Update Product" : "Add Product"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="bg-[#e7e8e9] text-black px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#d9dadb] transition-colors">
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Product list */}
      {loading ? (
        <p className="font-inter text-[#44474d]">Loading...</p>
      ) : products.length === 0 ? (
        <p className="font-inter text-[#44474d]">No products added yet.</p>
      ) : (
        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-[#c5c6cd] rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-montserrat font-bold text-black">{p.name}</span>
                  {p.brand && <span className="font-inter text-xs text-[#44474d]">{p.brand}</span>}
                  {p.status && <span className="font-inter text-xs bg-[#f8f9fa] border border-[#c5c6cd] px-2 py-0.5 rounded">{p.status}</span>}
                </div>
                <p className="font-inter text-sm text-[#44474d] truncate">{p.price} {p.category && `· ${p.category}`}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => edit(p)} className="bg-[#006399] text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-[#004972] transition-colors">Edit</button>
                <button onClick={() => remove(p.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700 transition-colors">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
