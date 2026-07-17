"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  verified: boolean;
  createdAt: string | null;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await fetch("/api/admin/reviews");
    if (res.ok) {
      const data = await res.json();
      setReviews(data.reviews || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const toggleVerify = async (r: Review) => {
    await fetch(`/api/admin/reviews/${r.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ verified: !r.verified }),
    });
    setReviews((prev) => prev.map((x) => (x.id === r.id ? { ...x, verified: !x.verified } : x)));
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this review permanently?")) return;
    await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" });
    setReviews((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <AdminShell title="Reviews">
      <p className="font-inter text-sm text-[#44474d] mb-6">
        Only <strong>approved</strong> reviews appear on the public website. New submissions start as pending.
      </p>
      {loading ? (
        <p className="font-inter text-[#44474d]">Loading...</p>
      ) : reviews.length === 0 ? (
        <p className="font-inter text-[#44474d]">No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white border border-[#c5c6cd] rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-montserrat font-bold text-lg text-black">{r.name}</span>
                    {r.role && <span className="font-inter text-xs text-[#44474d]">{r.role}</span>}
                    <span className={`font-inter text-xs font-bold px-2 py-0.5 rounded ${r.verified ? "bg-[#006399]/10 text-[#006399]" : "bg-[#ed4a14]/10 text-[#ed4a14]"}`}>
                      {r.verified ? "Approved" : "Pending"}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontSize: "16px", fontVariationSettings: i < r.rating ? "'FILL' 1" : "'FILL' 0", color: i < r.rating ? "#006399" : "#c5c6cd" }}>star</span>
                    ))}
                  </div>
                  <p className="font-inter text-sm text-[#44474d] italic">&quot;{r.quote}&quot;</p>
                  {r.createdAt && <p className="font-inter text-xs text-[#75777e] mt-2">{new Date(r.createdAt).toLocaleDateString()}</p>}
                </div>
                <div className="flex md:flex-col gap-2 shrink-0">
                  <button
                    onClick={() => toggleVerify(r)}
                    className={`px-4 py-2 rounded font-inter text-xs font-semibold text-white transition-colors ${r.verified ? "bg-[#75777e] hover:bg-[#5a5c62]" : "bg-[#006399] hover:bg-[#004972]"}`}
                  >
                    {r.verified ? "Unpublish" : "Approve"}
                  </button>
                  <button onClick={() => remove(r.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
