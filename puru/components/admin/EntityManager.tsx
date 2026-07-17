'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Plus, Pencil, Trash2, RefreshCw, Loader2, ExternalLink, Search, X, CheckCircle, AlertCircle,
} from 'lucide-react';

export interface EntityField {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'number' | 'checkbox';
  required?: boolean;
  placeholder?: string;
  colSpan?: 1 | 2;
}

export interface EntityRecord {
  _id: string;
  title: string;
  slug: string;
  order?: number;
  [key: string]: unknown;
}

interface EntityManagerProps {
  title: string;
  description: string;
  apiPath: string;
  publicPath: string;
  fields: EntityField[];
  slugFromTitle?: boolean;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const emptyForm = (fields: EntityField[]) =>
  fields.reduce<Record<string, string | boolean>>((acc, field) => {
    acc[field.key] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {});

export default function EntityManager({
  title,
  description,
  apiPath,
  publicPath,
  fields,
  slugFromTitle = true,
}: EntityManagerProps) {
  const [items, setItems] = useState<EntityRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string | boolean>>(() => emptyForm(fields));
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(apiPath);
      const data = await res.json();
      if (data.success) setItems(data.data);
    } finally {
      setLoading(false);
    }
  }, [apiPath]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const filtered = items.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.slug.toLowerCase().includes(q)
    );
  });

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm(fields));
    setErrorMsg('');
    setStatus('idle');
    setModalOpen(true);
  };

  const openEdit = (item: EntityRecord) => {
    setEditingId(item._id);
    const next = emptyForm(fields);
    fields.forEach((field) => {
      const value = item[field.key];
      if (field.type === 'checkbox') {
        next[field.key] = Boolean(value);
      } else {
        next[field.key] = value != null ? String(value) : '';
      }
    });
    setForm(next);
    setErrorMsg('');
    setStatus('idle');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
  };

  const handleFieldChange = (key: string, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (slugFromTitle && key === 'title' && !editingId) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus('idle');
    setErrorMsg('');

    const payload: Record<string, unknown> = {};
    fields.forEach((field) => {
      const raw = form[field.key];
      if (field.type === 'number') {
        payload[field.key] = raw === '' ? 0 : Number(raw);
      } else if (field.type === 'checkbox') {
        payload[field.key] = Boolean(raw);
      } else {
        payload[field.key] = raw;
      }
    });

    try {
      const res = await fetch(apiPath, {
        method: editingId ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to save');
        return;
      }
      setStatus('success');
      await fetchItems();
      setTimeout(closeModal, 500);
    } catch {
      setStatus('error');
      setErrorMsg('Network error while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    const res = await fetch(`${apiPath}?id=${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) fetchItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          <p className="text-gray-400 text-sm mt-1 max-w-2xl">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={publicPath}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:text-white hover:border-gray-600 transition-all"
          >
            View Live <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={fetchItems}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:text-white transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add New
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-800 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or slug..."
              className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500"
            />
          </div>
          <span className="text-gray-500 text-xs">{filtered.length} items</span>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16 text-gray-400 gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-500 text-sm">
            No items found. Add one or run the seed script to populate the database.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-800">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium hidden md:table-cell">Slug</th>
                  <th className="px-4 py-3 font-medium hidden lg:table-cell">Order</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-800/60 hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3">
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-gray-500 text-xs md:hidden mt-0.5">{item.slug}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-400 hidden md:table-cell font-mono text-xs">{item.slug}</td>
                    <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{item.order ?? '—'}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openEdit(item)}
                          className="p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id, item.title)}
                          className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <h3 className="text-white font-semibold">
                {editingId ? 'Edit Item' : 'Add New Item'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div
                  key={field.key}
                  className={field.colSpan === 2 ? 'sm:col-span-2' : ''}
                >
                  <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                    {field.label}
                    {field.required && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={String(form[field.key] ?? '')}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500 resize-y"
                    />
                  ) : field.type === 'checkbox' ? (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Boolean(form[field.key])}
                        onChange={(e) => handleFieldChange(field.key, e.target.checked)}
                        className="rounded border-gray-600 bg-gray-800 text-teal-500 focus:ring-teal-500"
                      />
                      <span className="text-gray-300 text-sm">Enabled</span>
                    </label>
                  ) : (
                    <input
                      type={field.type === 'number' ? 'number' : 'text'}
                      value={String(form[field.key] ?? '')}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500"
                    />
                  )}
                </div>
              ))}
            </div>

            {status === 'success' && (
              <div className="mx-6 mb-2 flex items-center gap-2 text-teal-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                Saved successfully
              </div>
            )}
            {status === 'error' && (
              <div className="mx-6 mb-2 flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errorMsg}
              </div>
            )}

            <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-800">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {editingId ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
