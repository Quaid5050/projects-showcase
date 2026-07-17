import { useState, useEffect } from "react";
import api from "../../utils/api";

const allTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

export default function AdminSlots() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [saving, setSaving] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const loadSlots = () => {
    setLoading(true);
    api.get("/slots/all").then(r => setSlots(r.data.slots || [])).catch(() => {}).finally(() => setLoading(false));
  };

  useEffect(() => { loadSlots(); }, []);

  const toggleTime = (time) => {
    setSelectedTimes(t => t.includes(time) ? t.filter(x => x !== time) : [...t, time]);
  };

  const handleAddSlots = async (e) => {
    e.preventDefault();
    if (!date || selectedTimes.length === 0) return;
    setSaving(true);
    try {
      await api.post("/slots", { date, times: selectedTimes });
      setSelectedTimes([]);
      loadSlots();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add slots");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/slots/${id}`);
    setSlots(s => s.filter(x => x._id !== id));
  };

  const grouped = slots.reduce((acc, slot) => {
    acc[slot.date] = acc[slot.date] || [];
    acc[slot.date].push(slot);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort();

  if (loading) return <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Available Seats (Consultation Slots)</h2>
      <p className="text-gray-500 text-sm -mt-4">Add the dates and times you're available for consultations. Customers will only be able to book from these open slots on the Booking page.</p>

      {/* Add slots form */}
      <form onSubmit={handleAddSlots} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900">Add New Slots</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            min={minDate}
            required
            className="w-full sm:w-64 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
          <div className="flex flex-wrap gap-2">
            {allTimes.map(time => (
              <button
                type="button"
                key={time}
                onClick={() => toggleTime(time)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  selectedTimes.includes(time)
                    ? "bg-amber-800 text-white border-amber-800"
                    : "border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-700"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={saving || !date || selectedTimes.length === 0}
          className="bg-amber-800 hover:bg-amber-900 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          {saving ? "Adding..." : "Add Slots"}
        </button>
      </form>

      {/* Existing slots */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {sortedDates.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No slots added yet. Add your first available date above.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {sortedDates.map(d => (
              <div key={d} className="p-5">
                <div className="font-semibold text-gray-900 mb-3">
                  {new Date(`${d}T00:00:00`).toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </div>
                <div className="flex flex-wrap gap-2">
                  {grouped[d].sort((a, b) => allTimes.indexOf(a.time) - allTimes.indexOf(b.time)).map(slot => (
                    <div
                      key={slot._id}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border ${
                        slot.isBooked ? "bg-red-50 text-red-700 border-red-200" : "bg-green-50 text-green-700 border-green-200"
                      }`}
                    >
                      {slot.time}
                      <span className="text-xs opacity-70">{slot.isBooked ? "Booked" : "Open"}</span>
                      {!slot.isBooked && (
                        <button onClick={() => handleDelete(slot._id)} className="text-red-500 hover:text-red-700 font-bold ml-1">×</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
