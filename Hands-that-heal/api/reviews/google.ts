import type { VercelRequest, VercelResponse } from "@vercel/node";

// ── Types ──────────────────────────────────────────────────────────────────
export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
  time: number;
}

export interface ReviewsResponse {
  reviews: GoogleReview[];
  rating: number;
  total: number;
  source: "google" | "fallback";
}

// ── Simple in-memory cache (survives warm function invocations) ─────────────
let cache: { data: ReviewsResponse; expiresAt: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// ── Fallback reviews (shown when API unavailable) ──────────────────────────
const FALLBACK: ReviewsResponse = {
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

// ── Handler ────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // CORS headers (same-origin fine for Vercel, but helps local dev)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=600");

  // Return cached data if still fresh
  if (cache && Date.now() < cache.expiresAt) {
    return res.status(200).json(cache.data);
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If env vars not set, return fallback immediately
  if (!apiKey || !placeId) {
    console.warn("[reviews/google] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID — using fallback");
    return res.status(200).json(FALLBACK);
  }

  try {
    const fields = "reviews,rating,user_ratings_total";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK" || !data.result) {
      console.error("[reviews/google] Places API error:", data.status, data.error_message);
      return res.status(200).json(FALLBACK);
    }

    const result: ReviewsResponse = {
      source: "google",
      rating: data.result.rating ?? 5,
      total: data.result.user_ratings_total ?? 0,
      reviews: (data.result.reviews ?? []).slice(0, 5),
    };

    // Store in cache
    cache = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };

    return res.status(200).json(result);
  } catch (err) {
    console.error("[reviews/google] Fetch failed:", err);
    return res.status(200).json(FALLBACK);
  }
}
