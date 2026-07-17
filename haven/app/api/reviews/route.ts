// FILE LOCATION: app/api/reviews/route.ts

import { NextResponse } from "next/server";

/* ─────────────────────────────────────────────
   ✏️  APNA API KEY & PLACE ID YAHAN DAALO
   ───────────────────────────────────────────── */
const GOOGLE_API_KEY = "AIzaSyDHUmCdu-iKnGOdS2ruwQxOouivXjqP_GQ";
const PLACE_ID = "ChIJeZLV_QDR1IkRR6-8-tB1x-E";

/* ─────────────────────────────────────────────
   FALLBACK REVIEWS — Agar API fail ho toh ye dikhenge.
   Apni real Google reviews yahan paste karo backup ke liye.
   ───────────────────────────────────────────── */
const FALLBACK_DATA = {
  businessName: "Haven Customs",
  overallRating: 4.9,
  totalReviews: 127,
  reviews: [
    {
      name: "Marcus Thompson",
      initial: "M",
      rating: 5,
      time: "2 weeks ago",
      text: "Absolutely incredible work on my Tesla Model 3. The ceramic coating is flawless — water just beads right off. Haven Customs treated my car like it was their own.",
      profilePhoto: null,
    },
    {
      name: "Sarah Mitchell",
      initial: "S",
      rating: 5,
      time: "1 month ago",
      text: "Had PPF and tint done here. The attention to detail is next level. No bubbles, no edges lifting, everything perfectly aligned. Worth every penny.",
      profilePhoto: null,
    },
    {
      name: "David Chen",
      initial: "D",
      rating: 5,
      time: "3 weeks ago",
      text: "Best detailing experience I have ever had. They walked me through every step, showed me what products they use, and the final result on my BMW M4 was stunning.",
      profilePhoto: null,
    },
    {
      name: "Jessica Rivera",
      initial: "J",
      rating: 5,
      time: "1 month ago",
      text: "Took my Audi Q7 for a full interior and exterior detail plus ceramic coating. The team was professional, transparent about pricing, and delivered on time.",
      profilePhoto: null,
    },
    {
      name: "Andrew Walsh",
      initial: "A",
      rating: 5,
      time: "2 months ago",
      text: "I have been to plenty of detailers but Haven Customs is on another level. The paint correction alone transformed my car. Will be a lifetime customer.",
      profilePhoto: null,
    },
  ],
  source: "fallback" as const,
};

export async function GET() {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    // ── DEBUG LOG — deploy ke baad hata dena ──
    console.log("Google API Status:", data.status);
    if (data.error_message) console.log("Error:", data.error_message);

    if (data.status !== "OK") {
      console.warn("Google Places API not OK, serving fallback. Status:", data.status);
      return NextResponse.json(FALLBACK_DATA);
    }

    const reviews = (data.result.reviews || [])
      .filter((r: any) => r.rating >= 4)
      .map((r: any) => ({
        name: r.author_name,
        initial: r.author_name?.[0]?.toUpperCase() ?? "?",
        rating: r.rating,
        time: r.relative_time_description,
        text: r.text,
        profilePhoto: r.profile_photo_url || null,
      }));

    return NextResponse.json({
      businessName: data.result.name,
      overallRating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: reviews.length > 0 ? reviews : FALLBACK_DATA.reviews,
      source: "google",
    });
  } catch (err) {
    console.error("Reviews fetch failed, serving fallback:", err);
    return NextResponse.json(FALLBACK_DATA);
  }
}