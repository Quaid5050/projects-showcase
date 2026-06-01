"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { toast } from "sonner";

export default function AdminPromotionsPage() {
  const [promos, setPromos] = useState<any[]>([]);
  const [form, setForm] = useState({ code: "", discountType: "percentage", value: "", minOrder: "", maxUses: "", active: true });

  const fetchPromos = () => fetch("/api/admin/promotions").then(r => r.json()).then(setPromos);
  useEffect(() => { fetchPromos(); }, []);

  const add = async () => {
    if (!form.code || !form.value) return;
    const res = await fetch("/api/admin/promotions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, value: parseFloat(form.value), minOrder: form.minOrder ? parseFloat(form.minOrder) : undefined, maxUses: form.maxUses ? parseInt(form.maxUses) : undefined }) });
    if (res.ok) { toast.success("Promo added"); setForm({ code: "", discountType: "percentage", value: "", minOrder: "", maxUses: "", active: true }); fetchPromos(); }
  };

  const toggle = async (p: any) => {
    await fetch(`/api/admin/promotions/${p._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !p.active }) });
    fetchPromos();
  };

  const del = async (id: string) => {
    if (!confirm("Delete promo?")) return;
    await fetch(`/api/admin/promotions/${id}`, { method: "DELETE" });
    toast.success("Deleted"); fetchPromos();
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-black text-[#1a1a1a] mb-6">Promotions</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="font-bold mb-4">Add Promo Code</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <input value={form.code} onChange={e => setForm(p => ({ ...p, code: e.target.value.toUpperCase() }))} placeholder="Code (e.g. SAVE10)"
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] uppercase" />
          <select value={form.discountType} onChange={e => setForm(p => ({ ...p, discountType: e.target.value }))}
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]">
            <option value="percentage">Percentage %</option>
            <option value="fixed">Fixed $</option>
          </select>
          <input type="number" value={form.value} onChange={e => setForm(p => ({ ...p, value: e.target.value }))} placeholder="Value"
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          <input type="number" value={form.minOrder} onChange={e => setForm(p => ({ ...p, minOrder: e.target.value }))} placeholder="Min order $"
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          <input type="number" value={form.maxUses} onChange={e => setForm(p => ({ ...p, maxUses: e.target.value }))} placeholder="Max uses"
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          <button onClick={add} className="bg-[#c8102e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors">Add</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{["Code", "Type", "Value", "Min Order", "Uses", "Active", "Actions"].map(h => <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>)}</tr>
          </thead>
          <tbody>
            {promos.map(p => (
              <tr key={p._id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3 font-mono font-bold">{p.code}</td>
                <td className="px-4 py-3 text-gray-600">{p.discountType}</td>
                <td className="px-4 py-3 font-bold text-[#c8102e]">{p.discountType === "percentage" ? `${p.value}%` : `$${p.value}`}</td>
                <td className="px-4 py-3 text-gray-600">{p.minOrder ? `$${p.minOrder}` : "—"}</td>
                <td className="px-4 py-3 text-gray-600">{p.usedCount}{p.maxUses ? `/${p.maxUses}` : ""}</td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${p.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{p.active ? "Active" : "Inactive"}</span></td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => toggle(p)} className="text-yellow-600 hover:text-yellow-800 text-xs font-semibold">{p.active ? "Disable" : "Enable"}</button>
                  <button onClick={() => del(p._id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
