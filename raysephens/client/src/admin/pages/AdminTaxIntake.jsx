import { useState, useEffect } from "react";
import api from "../../utils/api";

export default function AdminTaxIntake() {
  const [intakes, setIntakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/tax-intake").then(r => setIntakes(r.data.intakes || [])).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/tax-intake/${id}`, { status, isRead: true });
    setIntakes(list => list.map(x => x._id === id ? { ...x, status } : x));
  };

  const download = async (id, docIndex) => {
    const token = localStorage.getItem("adminToken");
    const base = import.meta.env.VITE_API_URL || "/api";
    const url = `${base}/tax-intake/${id}/download/${docIndex}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "";
    a.click();
  };

  const statusColors = { new: "bg-amber-100 text-amber-700", "in-progress": "bg-blue-100 text-blue-700", completed: "bg-green-100 text-green-700" };

  if (loading) return <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Tax Intake Submissions ({intakes.length})</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {intakes.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No submissions received yet.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {intakes.map(i => (
              <div key={i._id} className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{i.firstName} {i.lastName}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[i.status] || "bg-gray-100 text-gray-600"}`}>{i.status}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      <a href={`mailto:${i.email}`} className="hover:text-amber-700">{i.email}</a>
                      {" • "}
                      <a href={`tel:${i.phone}`}>{i.phone}</a>
                    </div>
                    {i.address?.city && (
                      <div className="text-sm text-gray-600">{i.address.street}, {i.address.city}, {i.address.province} {i.address.postalCode}</div>
                    )}
                    {i.dependants && <div className="text-sm text-gray-600 mt-1">Dependants: {i.dependants}</div>}
                    <div className="text-xs text-gray-400 mt-2">{new Date(i.createdAt).toLocaleString()}</div>

                    {i.documents?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {i.documents.map((doc, idx) => (
                          <button
                            key={idx}
                            onClick={() => download(i._id, idx)}
                            className="text-xs px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
                          >
                            ⬇ {doc.originalName || `Document ${idx + 1}`}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["new", "in-progress", "completed"].map(s => (
                      <button
                        key={s}
                        onClick={() => updateStatus(i._id, s)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${i.status === s ? "bg-amber-800 text-white border-amber-800" : "border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-700"}`}
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
