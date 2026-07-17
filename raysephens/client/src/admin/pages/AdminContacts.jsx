import { useState, useEffect } from "react";
import api from "../../utils/api";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/contact").then(r => setContacts(r.data.contacts || [])).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/contact/${id}`, { status, isRead: true });
    setContacts(c => c.map(x => x._id === id ? { ...x, status, isRead: true } : x));
  };

  if (loading) return <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Contact Inquiries ({contacts.length})</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {contacts.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No inquiries received yet.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {contacts.map(c => (
              <div key={c._id} className={`p-5 ${!c.isRead ? "bg-amber-50" : ""}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{c.name}</span>
                      {!c.isRead && <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      <a href={`mailto:${c.email}`} className="hover:text-amber-700">{c.email}</a>
                      {c.phone && <> • <a href={`tel:${c.phone}`}>{c.phone}</a></>}
                      {c.service && <> • <span className="text-amber-700 font-medium">{c.service}</span></>}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{c.message}</p>
                    <div className="text-xs text-gray-400 mt-2">{new Date(c.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex gap-2">
                    {["new", "in-progress", "resolved"].map(s => (
                      <button
                        key={s}
                        onClick={() => updateStatus(c._id, s)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${c.status === s ? "bg-amber-800 text-white border-amber-800" : "border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-700"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
