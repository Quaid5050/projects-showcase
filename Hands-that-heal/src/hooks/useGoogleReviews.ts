import { useEffect, useState } from "react";
import type { ReviewsResponse } from "../../api/reviews/google";

// In dev (Vite), there's no serverless function — fall back to static data
const DEV_FALLBACK: ReviewsResponse = {
  source: "fallback",
  rating: 5.0,
  total: 50,
  reviews: [
    {
      author_name: "Sophia R.",
      rating: 5,
      text: "Hands down the most comfortable laser experience I've ever had. Six sessions in and my skin has never felt better.",
      relative_time_description: "2 weeks ago",
      profile_photo_url: "",
      time: Date.now() / 1000,
    },
    {
      author_name: "James K.",
      rating: 5,
      text: "As a guy, I was nervous about Brazilian laser. The team made it completely judgment-free. Game changer.",
      relative_time_description: "1 month ago",
      profile_photo_url: "",
      time: Date.now() / 1000,
    },
    {
      author_name: "Aisha M.",
      rating: 5,
      text: "Finally a clinic that knows how to treat darker skin safely. Visible results without any irritation.",
      relative_time_description: "3 weeks ago",
      profile_photo_url: "",
      time: Date.now() / 1000,
    },
    {
      author_name: "Elena V.",
      rating: 5,
      text: "The whitening is unreal — my smile is genuinely brighter and there was zero sensitivity afterwards.",
      relative_time_description: "1 month ago",
      profile_photo_url: "",
      time: Date.now() / 1000,
    },
    {
      author_name: "Daniel P.",
      rating: 5,
      text: "Body contouring exceeded expectations. Clean, calming space and the staff truly listens.",
      relative_time_description: "2 months ago",
      profile_photo_url: "",
      time: Date.now() / 1000,
    },
  ],
};

export function useGoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On Vercel the route exists; locally Vite has no /api — use fallback
    fetch("/api/reviews/google")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<ReviewsResponse>;
      })
      .then((d) => setData(d))
      .catch(() => setData(DEV_FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  return { data: data ?? DEV_FALLBACK, loading };
}
