"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { defaultSkates, type Skate } from "@/lib/productDefaults";

const statusStyle: Record<string, string> = {
  "In Stock": "text-[#006399] bg-[#67bafd]/20 border border-[#67bafd]",
  "Coming Soon": "text-[#ed4a14] bg-[#ed4a14]/10 border border-[#ed4a14]",
  "Sold Out": "text-[#75777e] bg-[#e7e8e9] border border-[#c5c6cd]",
};

export default function SkatesSection() {
  const [skates, setSkates] = useState<Skate[]>(defaultSkates);

  useEffect(() => {
    fetch("/api/skates")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.skates) && data.skates.length > 0) setSkates(data.skates);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-montserrat text-[32px] font-bold text-black">Skates &amp; Performance</h2>
        <div className="flex items-center gap-2 text-[#44474d] text-xs font-inter uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#006399] animate-pulse" />
          New Styles Added
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skates.map((s) => (
          <div key={s.name} className="bg-white border border-[#c5c6cd] rounded p-4 product-card-hover">
            <div className="aspect-[4/3] bg-[#f8f9fa] rounded-sm mb-4 overflow-hidden relative">
              {s.image ? (
                <Image src={s.image} alt={s.name} fill className="object-contain p-2" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#c5c6cd]">
                  <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>ice_skating</span>
                </div>
              )}
            </div>
            <h4 className="font-montserrat text-2xl font-bold text-black mb-1">{s.name}</h4>
            <p className="font-inter text-sm text-[#44474d] mb-4">{s.desc}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="font-montserrat text-2xl font-bold text-black">{s.price}</span>
              <span className={`font-inter text-xs px-2 py-1 rounded ${statusStyle[s.status] || statusStyle["In Stock"]}`}>{s.status}</span>
            </div>
            {s.sizes && s.sizes.length > 0 && (
              <div className="mb-4 p-4 bg-[#f8f9fa] rounded border border-[#c5c6cd]">
                <p className="font-inter font-semibold text-xs text-[#44474d] uppercase tracking-wider mb-2">Skate Sizes I Can Order</p>
                <div className="flex flex-wrap gap-2">
                  {s.sizes.map((size) => (
                    <span key={size} className="font-inter text-xs font-semibold bg-white border border-[#c5c6cd] px-2 py-1 rounded">{size}</span>
                  ))}
                </div>
              </div>
            )}
            <Link href="/contact" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
              Contact to Order
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
