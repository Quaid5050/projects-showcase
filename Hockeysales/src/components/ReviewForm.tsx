"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({ name: "", role: "", rating: 0, review: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      setError("Please select a star rating.");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          role: form.role || "",
          rating: form.rating,
          quote: form.review,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit. Please try again.");

      setSubmitted(true);
      setForm({ name: "", role: "", rating: 0, review: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-[#006399] mb-4 block" style={{ fontSize: "48px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <h3 className="font-montserrat text-2xl font-bold text-black mb-2">Thank You!</h3>
        <p className="font-inter text-base text-[#44474d]">Your review has been submitted and will be posted after approval.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="name">Your Name *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none rounded"
          />
        </div>
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="role">Your Role <span className="text-[#44474d] font-normal">(optional)</span></label>
          <input
            id="role"
            type="text"
            value={form.role}
            onChange={handleChange}
            placeholder="e.g. Beer League Player, Coach, Parent"
            className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none rounded"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-inter font-semibold text-sm text-black block">Rating *</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setForm({ ...form, rating: star })}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "32px",
                  fontVariationSettings: (hoverRating || form.rating) >= star ? "'FILL' 1" : "'FILL' 0",
                  color: (hoverRating || form.rating) >= star ? "#006399" : "#c5c6cd",
                  transition: "all 0.15s",
                }}
              >star</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-inter font-semibold text-sm text-black block" htmlFor="review">Your Review *</label>
        <textarea
          id="review"
          required
          rows={5}
          value={form.review}
          onChange={handleChange}
          placeholder="Tell us about your experience with Strides Hockey Sales..."
          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none resize-none rounded"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto bg-black text-white px-10 py-4 font-inter font-semibold text-sm uppercase tracking-widest hover:bg-[#006399] active:scale-95 transition-all disabled:opacity-70 flex items-center justify-center gap-3 rounded"
      >
        {submitting ? "Submitting..." : "Submit Review"}
        <span className="material-symbols-outlined text-xl">send</span>
      </button>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 font-inter font-semibold text-center rounded border border-red-200">
          {error}
        </div>
      )}
    </form>
  );
}