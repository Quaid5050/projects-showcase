import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// GET /api/reviews — public: only approved (verified) reviews
export async function GET() {
  try {
    const db = await getDb();
    const reviews = await db
      .collection("reviews")
      .find({ verified: true })
      .sort({ createdAt: -1 })
      .toArray();

    const mapped = reviews.map((r) => ({
      id: r._id.toString(),
      name: r.name,
      role: r.role || "",
      rating: r.rating,
      quote: r.quote,
      verified: true,
    }));

    return NextResponse.json({ reviews: mapped });
  } catch (error) {
    console.error("GET /api/reviews error:", error);
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }
}

// POST /api/reviews — public: submit a new review (pending approval)
export async function POST(req: NextRequest) {
  try {
    const { name, role, rating, quote } = await req.json();

    if (!name || !quote || !rating) {
      return NextResponse.json({ error: "Name, rating, and review are required." }, { status: 400 });
    }
    const numRating = Number(rating);
    if (numRating < 1 || numRating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
    }

    const db = await getDb();
    await db.collection("reviews").insertOne({
      name: String(name).slice(0, 120),
      role: role ? String(role).slice(0, 120) : "",
      rating: numRating,
      quote: String(quote).slice(0, 2000),
      verified: false,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/reviews error:", error);
    return NextResponse.json({ error: "Failed to submit review. Please try again." }, { status: 500 });
  }
}
