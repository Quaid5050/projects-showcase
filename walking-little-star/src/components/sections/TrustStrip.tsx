import React from "react";
import { Star } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const items = [
  "Safe & Nurturing",
  "Early Learning",
  "Creative Play",
  "Spanish Exposure",
  "Healthy Meals",
  "Family Connection",
  "Licensed Childcare",
  "Personal Attention",
  "Ages 2 Months–5 Years",
];

export const TrustStrip: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const content = [...items, ...items];

  return (
    <div
      className="bg-navy py-4 overflow-hidden trust-strip"
      aria-label="Key features of Walking Little Star Daycare"
      role="region"
    >
      <div
        className={`flex items-center gap-0 whitespace-nowrap ${
          prefersReduced ? "" : "marquee-track animate-marquee"
        }`}
        aria-hidden={!prefersReduced}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-6 font-body font-700 text-sm text-white/80"
          >
            <Star size={10} fill="#fedebe" className="text-peach flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>

      {/* Accessible static version for reduced motion */}
      {prefersReduced && (
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4" role="list">
          {items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 font-body font-700 text-sm text-white/80"
            >
              <Star size={10} fill="#fedebe" className="text-peach flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
