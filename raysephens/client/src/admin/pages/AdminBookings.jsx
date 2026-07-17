import { useState, useEffect } from "react";
import api from "../../utils/api";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/booking").then(r => setBookings(r.data.bookings || [])).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/booking/${id}`, { status, isRead: true });
    setBookings(b => b.map(x => x._id === id ? { ...x, status } : x));
  };

  const statusColors = { pending: "bg-amber-100 text-amber-700", confirmed: "bg-green-100 text-green-700", cancelled: "bg-red-100 text-red-700", completed: "bg-gray-100 text-gray-600" };

  if (loading) return <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Bookings ({bookings.length})</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {bookings.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No bookings received yet.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {bookings.map(b => (
              <div key={b._id} className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{b.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[b.status] || "bg-gray-100 text-gray-600"}`}>{b.status}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      <a href={`mailto:${b.email}`} className="hover:text-amber-700">{b.email}</a>
                      {" • "}
                      <a href={`tel:${b.phone}`}>{b.phone}</a>
                    </div>
                    <div className="text-sm font-medium text-amber-800 mb-1">{b.service}</div>
                    {(b.preferredDate || b.preferredTime) && (
                      <div className="text-sm text-gray-600">
                        Preferred: {b.preferredDate || "Flexible"} {b.preferredTime && `at ${b.preferredTime}`}
                      </div>
                    )}
                    {b.message && <p className="text-gray-600 text-sm mt-2">{b.message}</p>}
                    <div className="text-xs text-gray-400 mt-2">{new Date(b.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["pending", "confirmed", "cancelled", "completed"].map(s => (
                      <button
                        key={s}
                        onClick={() => updateStatus(b._id, s)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${b.status === s ? "bg-amber-800 text-white border-amber-800" : "border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-700"}`}
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
