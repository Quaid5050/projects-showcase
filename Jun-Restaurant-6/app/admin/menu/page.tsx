"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { toast } from "sonner";

export default function AdminMenuPage() {
  const [items, setItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ name: "", price: "", description: "", category: "", image: "", isAvailable: true, isPopular: false, isSpicy: false, isVegetarian: false });

  const fetchAll = async () => {
    const [itemsRes, catsRes] = await Promise.all([
      fetch("/api/admin/menu"),
      fetch("/api/admin/categories"),
    ]);
    setItems(await itemsRes.json());
    setCategories(await catsRes.json());
    setLoading(false);
  };

  useEffect(() => { fetchAll(); }, []);

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", price: "", description: "", category: categories[0]?._id || "", image: "", isAvailable: true, isPopular: false, isSpicy: false, isVegetarian: false });
    setShowForm(true);
  };

  const openEdit = (item: any) => {
    setEditing(item);
    setForm({ name: item.name, price: String(item.price), description: item.description || "", category: item.category?._id || item.category || "", image: item.image || "", isAvailable: item.isAvailable, isPopular: item.isPopular, isSpicy: item.isSpicy, isVegetarian: item.isVegetarian });
    setShowForm(true);
  };

  const handleSave = async () => {
    const payload = { ...form, price: parseFloat(form.price) };
    const url = editing ? `/api/admin/menu/${editing._id}` : "/api/admin/menu";
    const method = editing ? "PATCH" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (res.ok) { toast.success(editing ? "Item updated" : "Item added"); setShowForm(false); fetchAll(); }
    else toast.error("Failed to save");
  };

  const toggleAvailable = async (item: any) => {
    await fetch(`/api/admin/menu/${item._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isAvailable: !item.isAvailable }) });
    fetchAll();
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/admin/menu/${id}`, { method: "DELETE" });
    toast.success("Deleted"); fetchAll();
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-[#1a1a1a]">Menu Items</h1>
        <button onClick={openAdd} className="bg-[#c8102e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors">
          + Add Item
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="font-black text-xl mb-4">{editing ? "Edit Item" : "Add Item"}</h2>
            <div className="space-y-3">
              {[
                { label: "Name *", key: "name", type: "text" },
                { label: "Price (CAD) *", key: "price", type: "number" },
                { label: "Description", key: "description", type: "text" },
                { label: "Image URL", key: "image", type: "text" },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
                  <input type={f.type} value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]">
                  {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { key: "isAvailable", label: "Visible to customers" },
                  { key: "isPopular", label: "Popular" },
                  { key: "isSpicy", label: "Spicy" },
                  { key: "isVegetarian", label: "Vegetarian" },
                ].map(f => (
                  <label key={f.key} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.checked }))} className="accent-[#c8102e]" />
                    {f.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} className="flex-1 bg-[#c8102e] text-white font-bold py-2.5 rounded-xl hover:bg-red-700 transition-colors">Save</button>
              <button onClick={() => setShowForm(false)} className="flex-1 border border-gray-200 text-gray-600 font-bold py-2.5 rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {loading ? <div className="text-center py-20 text-gray-400">Loading...</div> : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Name", "Category", "Price", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item._id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <p className="font-semibold">{item.name}</p>
                    {item.description && <p className="text-xs text-gray-400 truncate max-w-xs">{item.description}</p>}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.category?.name || "—"}</td>
                  <td className="px-4 py-3 font-bold text-[#c8102e]">${item.price?.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.isAvailable ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {item.isAvailable ? "Visible" : "Hidden"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-blue-500 hover:text-blue-700 text-xs font-semibold">Edit</button>
                      <button onClick={() => toggleAvailable(item)} className="text-yellow-600 hover:text-yellow-800 text-xs font-semibold">
                        {item.isAvailable ? "Hide" : "Show"}
                      </button>
                      <button onClick={() => deleteItem(item._id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
