"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { toast } from "sonner";

export default function AdminSettingsPage() {
  const [form, setForm] = useState({ restaurantName: "", address: "", phone: "", email: "", openingHours: "", pickupPrepareTimeMinutes: 20, logo: "" });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings").then(r => r.json()).then(d => {
      if (d) setForm({ restaurantName: d.restaurantName || "", address: d.address || "", phone: d.phone || "", email: d.email || "", openingHours: d.openingHours || "", pickupPrepareTimeMinutes: d.pickupPrepareTimeMinutes || 20, logo: d.logo || "" });
    });
  }, []);

  const save = async () => {
    setSaving(true);
    const res = await fetch("/api/admin/settings", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) toast.success("Settings saved"); else toast.error("Failed to save");
  };

  const uploadLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/settings/logo", { method: "POST", body: fd });
    const data = await res.json();
    setUploading(false);
    if (data.logo) { setForm(p => ({ ...p, logo: data.logo })); toast.success("Logo uploaded"); }
    else toast.error("Upload failed");
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-black text-[#1a1a1a] mb-6">Settings</h1>
      <div className="max-w-2xl bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        {[
          { label: "Restaurant Name", key: "restaurantName" },
          { label: "Address", key: "address" },
          { label: "Phone", key: "phone" },
          { label: "Email", key: "email" },
        ].map(f => (
          <div key={f.key}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
            <input value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          </div>
        ))}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Opening Hours</label>
          <textarea value={form.openingHours} onChange={e => setForm(p => ({ ...p, openingHours: e.target.value }))} rows={3}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] resize-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Pickup Prep Time (minutes)</label>
          <input type="number" value={form.pickupPrepareTimeMinutes} onChange={e => setForm(p => ({ ...p, pickupPrepareTimeMinutes: parseInt(e.target.value) }))}
            className="w-32 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Logo URL</label>
          <input value={form.logo} onChange={e => setForm(p => ({ ...p, logo: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] mb-2" placeholder="https://... or /uploads/logo.png" />
          <div className="flex items-center gap-3">
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
              {uploading ? "Uploading..." : "Upload Logo"}
              <input type="file" accept="image/*" onChange={uploadLogo} className="hidden" />
            </label>
            {form.logo && <img src={form.logo} alt="Logo preview" className="h-12 rounded-lg border border-gray-200" />}
          </div>
          <p className="text-xs text-gray-400 mt-1">Note: Email clients need a public https:// URL when deployed.</p>
        </div>
        <button onClick={save} disabled={saving}
          className="bg-[#c8102e] hover:bg-red-700 disabled:opacity-60 text-white font-bold px-8 py-3 rounded-xl transition-colors">
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </AdminLayout>
  );
}
