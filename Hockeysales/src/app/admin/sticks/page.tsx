"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

interface Item {
  curve: string;
  flex: string;
  hand: string;
}
interface Stick {
  id: string;
  model: string;
  brand: string;
  isNew: boolean;
  items: Item[];
}

const inputClass = "px-3 py-2 bg-[#f8f9fa] border border-[#c5c6cd] rounded font-inter text-sm outline-none focus:border-[#006399]";

// ── Editor for a single stick (add or edit) ──
function StickEditor({
  initial,
  onSave,
  onCancel,
  saving,
}: {
  initial: { model: string; brand: string; isNew: boolean; items: Item[] };
  onSave: (data: { model: string; brand: string; isNew: boolean; items: Item[] }) => void;
  onCancel?: () => void;
  saving: boolean;
}) {
  const [model, setModel] = useState(initial.model);
  const [brand, setBrand] = useState(initial.brand);
  const [isNew, setIsNew] = useState(initial.isNew);
  const [items, setItems] = useState<Item[]>(initial.items.length ? initial.items : [{ curve: "", flex: "", hand: "LH" }]);

  const updateItem = (i: number, key: keyof Item, val: string) => {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)));
  };
  const addRow = () => setItems((prev) => [...prev, { curve: "", flex: "", hand: "LH" }]);
  const removeRow = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div className="bg-[#f8f9fa] border border-[#c5c6cd] rounded-lg p-4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model (e.g. Tracer)" className={inputClass} />
        <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand (e.g. Bauer)" className={inputClass} />
        <label className="flex items-center gap-2 font-inter text-sm text-black">
          <input type="checkbox" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} />
          Mark as NEW
        </label>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-[1fr_1.5fr_auto_auto] gap-2 items-center font-inter text-xs font-semibold text-[#44474d] uppercase tracking-wider px-1">
          <span>Curve</span><span>Flex Options</span><span>Hand</span><span></span>
        </div>
        {items.map((it, i) => (
          <div key={i} className="grid grid-cols-[1fr_1.5fr_auto_auto] gap-2 items-center">
            <input value={it.curve} onChange={(e) => updateItem(i, "curve", e.target.value)} placeholder="P92" className={inputClass} />
            <input value={it.flex} onChange={(e) => updateItem(i, "flex", e.target.value)} placeholder="70, 87, 102" className={inputClass} />
            <select value={it.hand} onChange={(e) => updateItem(i, "hand", e.target.value)} className={inputClass}>
              <option value="LH">LH</option>
              <option value="RH">RH</option>
            </select>
            <button type="button" onClick={() => removeRow(i)} className="material-symbols-outlined text-red-500 hover:text-red-700" title="Remove row">delete</button>
          </div>
        ))}
        <button type="button" onClick={addRow} className="font-inter text-sm font-semibold text-[#006399] hover:underline flex items-center gap-1">
          <span className="material-symbols-outlined text-base">add</span> Add row
        </button>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          disabled={saving}
          onClick={() => onSave({ model, brand, isNew, items })}
          className="bg-black text-white px-5 py-2 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors disabled:opacity-70"
        >
          {saving ? "Saving..." : "Save"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-[#e7e8e9] text-black px-5 py-2 rounded font-inter text-sm font-semibold hover:bg-[#d9dadb]">Cancel</button>
        )}
      </div>
    </div>
  );
}

export default function AdminSticksPage() {
  const [sticks, setSticks] = useState<Stick[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);

  // pricing
  const [pricing, setPricing] = useState({ seniorPrice: "", juniorPrice: "", warranty: "" });
  const [savingPricing, setSavingPricing] = useState(false);
  const [pricingSaved, setPricingSaved] = useState(false);

  const load = async () => {
    const [sRes, pRes] = await Promise.all([fetch("/api/admin/sticks"), fetch("/api/admin/settings")]);
    if (sRes.ok) setSticks((await sRes.json()).sticks || []);
    if (pRes.ok) setPricing((await pRes.json()).pricing);
    setLoading(false);
  };
  useEffect(() => {
    load();
  }, []);

  const savePricing = async () => {
    setSavingPricing(true);
    await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(pricing) });
    setSavingPricing(false);
    setPricingSaved(true);
    setTimeout(() => setPricingSaved(false), 2500);
  };

  const seed = async () => {
    setSeeding(true);
    await fetch("/api/admin/seed", { method: "POST" });
    setSeeding(false);
    setLoading(true);
    load();
  };

  const addStick = async (data: { model: string; brand: string; isNew: boolean; items: Item[] }) => {
    if (!data.model.trim()) return;
    setSaving(true);
    await fetch("/api/admin/sticks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);
    setAdding(false);
    setLoading(true);
    load();
  };

  const updateStick = async (id: string, data: { model: string; brand: string; isNew: boolean; items: Item[] }) => {
    setSaving(true);
    await fetch(`/api/admin/sticks/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);
    setEditingId(null);
    setLoading(true);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this stick model?")) return;
    await fetch(`/api/admin/sticks/${id}`, { method: "DELETE" });
    setSticks((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <AdminShell title="Stick Inventory">
      {/* Pricing settings */}
      <div className="bg-white border border-[#c5c6cd] rounded-xl p-6 mb-8">
        <h2 className="font-montserrat text-lg font-bold text-black mb-4">Stick Pricing Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Senior &amp; Intermediate</label>
            <input value={pricing.seniorPrice} onChange={(e) => setPricing({ ...pricing, seniorPrice: e.target.value })} className={`${inputClass} w-full`} placeholder="$220" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Junior</label>
            <input value={pricing.juniorPrice} onChange={(e) => setPricing({ ...pricing, juniorPrice: e.target.value })} className={`${inputClass} w-full`} placeholder="$200" />
          </div>
          <div>
            <label className="font-inter text-xs font-semibold text-[#44474d] block mb-1">Warranty Note</label>
            <input value={pricing.warranty} onChange={(e) => setPricing({ ...pricing, warranty: e.target.value })} className={`${inputClass} w-full`} placeholder="No Warranty" />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <button onClick={savePricing} disabled={savingPricing} className="bg-black text-white px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors disabled:opacity-70">
            {savingPricing ? "Saving..." : "Save Pricing"}
          </button>
          {pricingSaved && <span className="font-inter text-sm text-green-600 font-semibold">Saved ✓</span>}
        </div>
      </div>

      {/* Inventory */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-montserrat text-lg font-bold text-black">Stick Models ({sticks.length})</h2>
        {!adding && (
          <button onClick={() => setAdding(true)} className="bg-[#006399] text-white px-5 py-2 rounded font-inter text-sm font-semibold hover:bg-[#004972] transition-colors">
            + Add Stick Model
          </button>
        )}
      </div>

      {adding && (
        <div className="mb-6">
          <StickEditor initial={{ model: "", brand: "", isNew: false, items: [] }} onSave={addStick} onCancel={() => setAdding(false)} saving={saving} />
        </div>
      )}

      {loading ? (
        <p className="font-inter text-[#44474d]">Loading...</p>
      ) : sticks.length === 0 ? (
        <div className="bg-white border border-dashed border-[#c5c6cd] rounded-xl p-8 text-center">
          <p className="font-inter text-[#44474d] mb-4">No stick models yet. Import your current website inventory to get started.</p>
          <button onClick={seed} disabled={seeding} className="bg-black text-white px-6 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] disabled:opacity-70">
            {seeding ? "Importing..." : "Import Current Inventory"}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {sticks.map((s) =>
            editingId === s.id ? (
              <StickEditor key={s.id} initial={s} onSave={(d) => updateStick(s.id, d)} onCancel={() => setEditingId(null)} saving={saving} />
            ) : (
              <div key={s.id} className="bg-white border border-[#c5c6cd] rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-montserrat font-bold text-black">{s.model}</span>
                    {s.brand && <span className="font-inter text-xs bg-[#f8f9fa] border border-[#c5c6cd] px-2 py-0.5 rounded">{s.brand}</span>}
                    {s.isNew && <span className="font-inter text-xs bg-[#ed4a14] text-white px-2 py-0.5 rounded font-bold">NEW</span>}
                  </div>
                  <p className="font-inter text-sm text-[#44474d]">{s.items.length} variant{s.items.length !== 1 ? "s" : ""}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => { setEditingId(s.id); setAdding(false); }} className="bg-[#006399] text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-[#004972]">Edit</button>
                  <button onClick={() => remove(s.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700">Delete</button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </AdminShell>
  );
}
