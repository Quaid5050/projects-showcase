"use client";

import { useEffect, useState } from "react";

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  verified: boolean;
}

const defaultReviews: Review[] = [
  { id: "d1", name: "Alex MacKenzie", role: "Semi-Pro Forward", rating: 5, quote: "The stick selection at Strides is unmatched. Found exactly what I needed for my shot style, and the delivery was incredibly fast. The Pro Series Carbon is a game-changer.", verified: true },
  { id: "d2", name: "James Chen", role: "League Coordinator", rating: 5, quote: "Excellent service and high-quality products. They really take the time to make sure you're getting the right equipment for your level. Ordered 20 sticks for our league — perfect.", verified: true },
  { id: "d3", name: "Marcus Thompson", role: "AAA Defenseman", rating: 5, quote: "The CCM skates I got from Strides are the best I've ever worn. The fit was perfect right out of the box. I won't shop anywhere else for my gear.", verified: true },
  { id: "d4", name: "Carly Nguyen", role: "Women's League Captain", rating: 5, quote: "Finally a hockey shop that understands what women players need. Great selection, fair prices, and genuinely helpful staff. My whole team orders from Strides now.", verified: true },
  { id: "d5", name: "Derek Sullivan", role: "Youth Coach", rating: 5, quote: "Outfitted my entire team with gear from Strides. The bulk pricing was fantastic and everything arrived on time. The kids love their new equipment!", verified: true },
  { id: "d6", name: "Patrick O'Brien", role: "Beer League MVP", rating: 4, quote: "Great selection and competitive prices. The online ordering was easy and shipping was fast. Would give 5 stars but I wish there were more colour options for the gloves.", verified: false },
  { id: "d7", name: "Lisa Hartmann", role: "Figure to Hockey Convert", rating: 5, quote: "Switching from figure skating to hockey was intimidating, but Harvey walked me through everything I needed. Patient, knowledgeable, and they have great beginner packages.", verified: true },
  { id: "d8", name: "Ryan Kowalski", role: "Professional Scout", rating: 5, quote: "I recommend Strides to every player I scout. The pro-stock inventory is incredible — you can get the same gear the pros use at a fraction of the cost. Unbeatable.", verified: true },
];

export default function ReviewsList() {
  const [firebaseReviews, setFirebaseReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setFirebaseReviews(data.reviews || []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const allReviews = [...firebaseReviews, ...defaultReviews];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allReviews.map((review) => (
        <div key={review.id} className="glass-card p-8 rounded-xl hover-card flex flex-col">
          <div className="flex text-[#006399] mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined"
                style={{ fontSize: "18px", fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0", color: i < review.rating ? "#006399" : "#c5c6cd" }}
              >star</span>
            ))}
          </div>
          <p className="font-inter text-base italic text-black mb-8 flex-grow">&quot;{review.quote}&quot;</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-inter font-semibold text-sm text-black">{review.name}</p>
              {review.role && <p className="font-inter text-xs text-[#44474d]">{review.role}</p>}
            </div>
            {review.verified && (
              <div className="flex items-center gap-1 text-[#006399]">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-inter text-xs">Verified</span>
              </div>
            )}
          </div>
        </div>
      ))}
      {loading && (
        <div className="col-span-full text-center py-4">
          <span className="font-inter text-sm text-[#44474d]">Loading reviews...</span>
        </div>
      )}
    </div>
  );
}