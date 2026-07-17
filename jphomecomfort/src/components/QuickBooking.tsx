"use client";
import { useState, FormEvent } from "react";

export default function QuickBooking() {
  const [form, setForm] = useState({ name: "", email: "", date: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: "", service: "General Inquiry", time: "", message: "Quick booking from homepage" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", date: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 4000); }
  };

  return (
    <div className="relative z-20 -mt-12 sm:-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
          {/* Booking form bar */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl shadow-black/10 p-5 sm:p-6">
            <h3 className="font-heading font-bold text-brand-navy text-lg mb-4">Book an Appointment</h3>
            {status === "success" ? (
              <div className="flex items-center gap-3 py-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                <span className="text-green-600 font-semibold">Booking received! We will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-end">
                <div className="flex-1 w-full">
                  <input type="text" required placeholder="Name" value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[15px] focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition-all placeholder:text-slate-400" />
                </div>
                <div className="flex-1 w-full">
                  <input type="email" required placeholder="Email" value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[15px] focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition-all placeholder:text-slate-400" />
                </div>
                <div className="flex-1 w-full">
                  <input type="date" required value={form.date}
                    onChange={e => setForm({...form, date: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[15px] focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition-all text-slate-500" />
                </div>
                <button type="submit" disabled={status==="loading"}
                  className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-8 py-3 rounded-lg transition-all whitespace-nowrap disabled:opacity-60 text-[15px]">
                  {status === "loading" ? "Sending..." : "Book Now!"}
                </button>
              </form>
            )}
          </div>

          {/* Free consultations box */}
          <div className="bg-brand-cyan rounded-xl shadow-2xl shadow-brand-cyan/20 px-6 py-5 flex items-center gap-4 lg:min-w-[280px]">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-[15px]">Free Consultations</div>
              <a href="tel:+16479485859" className="text-white font-extrabold text-xl lg:text-2xl hover:text-cyan-100 transition-colors">
                +1 647-948-5859
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
