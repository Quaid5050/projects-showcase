"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { toast } from "sonner";

export default function AdminCategoriesPage() {
  const [cats, setCats] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [sortOrder, setSortOrder] = useState("0");

  const fetchCats = () => fetch("/api/admin/categories").then(r => r.json()).then(setCats);
  useEffect(() => { fetchCats(); }, []);

  const add = async () => {
    if (!name.trim()) return;
    const res = await fetch("/api/admin/categories", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, sortOrder: parseInt(sortOrder) }) });
    if (res.ok) { toast.success("Category added"); setName(""); setSortOrder("0"); fetchCats(); }
  };

  const toggle = async (cat: any) => {
    await fetch(`/api/admin/categories/${cat._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isActive: !cat.isActive }) });
    fetchCats();
  };

  const del = async (id: string) => {
    if (!confirm("Delete category?")) return;
    await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
    toast.success("Deleted"); fetchCats();
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-black text-[#1a1a1a] mb-6">Categories</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="font-bold mb-4">Add Category</h2>
        <div className="flex gap-3">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Category name"
            className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          <input type="number" value={sortOrder} onChange={e => setSortOrder(e.target.value)} placeholder="Sort order"
            className="w-28 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          <button onClick={add} className="bg-[#c8102e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors">Add</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{["Name", "Slug", "Sort", "Active", "Actions"].map(h => <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>)}</tr>
          </thead>
          <tbody>
            {cats.map(cat => (
              <tr key={cat._id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{cat.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-gray-400">{cat.slug}</td>
                <td className="px-4 py-3 text-gray-600">{cat.sortOrder}</td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${cat.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{cat.isActive ? "Active" : "Inactive"}</span></td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => toggle(cat)} className="text-yellow-600 hover:text-yellow-800 text-xs font-semibold">{cat.isActive ? "Deactivate" : "Activate"}</button>
                  <button onClick={() => del(cat._id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
