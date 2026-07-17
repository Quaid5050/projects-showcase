"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  replied: boolean;
  createdAt: string | null;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await fetch("/api/admin/inquiries");
    if (res.ok) {
      const data = await res.json();
      setInquiries(data.inquiries || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const toggleReplied = async (i: Inquiry) => {
    await fetch(`/api/admin/inquiries/${i.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ replied: !i.replied }),
    });
    setInquiries((prev) => prev.map((x) => (x.id === i.id ? { ...x, replied: !x.replied } : x)));
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    setInquiries((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <AdminShell title="Contact Inquiries">
      {loading ? (
        <p className="font-inter text-[#44474d]">Loading...</p>
      ) : inquiries.length === 0 ? (
        <p className="font-inter text-[#44474d]">No inquiries yet.</p>
      ) : (
        <div className="space-y-4">
          {inquiries.map((i) => (
            <div key={i.id} className={`bg-white border rounded-xl p-6 ${i.replied ? "border-[#c5c6cd]" : "border-[#006399]"}`}>
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-montserrat font-bold text-lg text-black">{i.name}</span>
                    <span className={`font-inter text-xs font-bold px-2 py-0.5 rounded ${i.replied ? "bg-green-100 text-green-700" : "bg-[#ed4a14]/10 text-[#ed4a14]"}`}>
                      {i.replied ? "Replied" : "New"}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-[#44474d]">
                    <a href={`mailto:${i.email}`} className="text-[#006399] underline">{i.email}</a>
                    {i.phone && <> · {i.phone}</>}
                  </p>
                  <p className="font-inter text-sm text-[#44474d] mt-2 whitespace-pre-wrap">{i.message}</p>
                  {i.createdAt && <p className="font-inter text-xs text-[#75777e] mt-2">{new Date(i.createdAt).toLocaleString()}</p>}
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button onClick={() => toggleReplied(i)} className={`px-4 py-2 rounded font-inter text-xs font-semibold text-white transition-colors ${i.replied ? "bg-[#75777e] hover:bg-[#5a5c62]" : "bg-[#006399] hover:bg-[#004972]"}`}>
                    {i.replied ? "Mark Unreplied" : "Mark Replied"}
                  </button>
                  <button onClick={() => remove(i.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700 transition-colors">
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
