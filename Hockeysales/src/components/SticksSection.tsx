"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { defaultSticks, defaultStickPricing, type Stick, type StickPricing } from "@/lib/productDefaults";

export default function SticksSection() {
  const [sticks, setSticks] = useState<Stick[]>(defaultSticks);
  const [pricing, setPricing] = useState<StickPricing>(defaultStickPricing);

  useEffect(() => {
    fetch("/api/sticks")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.sticks) && data.sticks.length > 0) setSticks(data.sticks);
      })
      .catch(() => {});
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => data.pricing && setPricing(data.pricing))
      .catch(() => {});
  }, []);

  return (
    <section className="mb-20" id="sticks">
      <div className="text-center mb-12">
        <h2 className="font-montserrat text-[48px] font-extrabold text-black mb-2">Sticks Available for Order</h2>
        <p className="font-inter text-base text-[#44474d]">Precision-balanced tools for elite playmakers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#003a5c] to-black">
          <Image src="/bauer-sticks.png" alt="Hockey Sticks" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <div className="bg-white border border-[#c5c6cd] rounded-xl p-8">
            <h3 className="font-montserrat text-2xl font-bold text-black mb-2">Senior &amp; Intermediate Sticks</h3>
            <div className="font-montserrat text-[48px] font-extrabold text-black">{pricing.seniorPrice}</div>
          </div>
          <div className="bg-white border border-[#c5c6cd] rounded-xl p-8">
            <h3 className="font-montserrat text-2xl font-bold text-black mb-2">Junior Sticks</h3>
            <div className="font-montserrat text-[48px] font-extrabold text-black">{pricing.juniorPrice}</div>
          </div>
          {pricing.warranty && (
            <div className="bg-[#ed4a14]/10 border border-[#ed4a14] rounded-xl p-6 text-center">
              <span className="font-montserrat text-lg font-bold text-[#ed4a14] uppercase tracking-wide">{pricing.warranty}</span>
            </div>
          )}
          <Link href="/contact" className="w-full bg-black text-white py-4 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
            <span className="material-symbols-outlined text-lg">mail</span>
            Contact to Order
          </Link>
        </div>
      </div>

      {/* Inventory Tables */}
      <div className="space-y-6">
        {sticks.map((stick) => (
          <div key={stick.model} className="bg-white border border-[#c5c6cd] rounded-xl overflow-hidden">
            <div className="bg-[#0a1628] px-6 py-4 flex items-center gap-3">
              <h3 className="font-montserrat text-xl font-bold text-white">{stick.model}</h3>
              {stick.brand && <span className="font-inter text-xs text-[#8facc8] bg-[#1a2d4a] px-2 py-1 rounded">{stick.brand}</span>}
              {stick.isNew && <span className="font-inter text-xs text-white bg-[#ed4a14] px-2 py-1 rounded font-bold">NEW</span>}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f8f9fa] border-b border-[#c5c6cd]">
                    <th className="text-left px-6 py-3 font-inter font-semibold text-[#44474d] text-xs uppercase tracking-wider">Curve</th>
                    <th className="text-left px-6 py-3 font-inter font-semibold text-[#44474d] text-xs uppercase tracking-wider">Flex Options</th>
                    <th className="text-left px-6 py-3 font-inter font-semibold text-[#44474d] text-xs uppercase tracking-wider">Hand</th>
                  </tr>
                </thead>
                <tbody>
                  {stick.items.map((item, i) => (
                    <tr key={`${item.curve}-${item.flex}-${item.hand}-${i}`} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]/50"}>
                      <td className="px-6 py-3 font-inter font-semibold text-black">{item.curve}</td>
                      <td className="px-6 py-3 font-inter text-[#44474d]">{item.flex}</td>
                      <td className="px-6 py-3">
                        <span className={`font-inter text-xs font-bold px-2 py-1 rounded ${item.hand === "LH" ? "bg-[#006399]/10 text-[#006399]" : "bg-[#ed4a14]/10 text-[#ed4a14]"}`}>
                          {item.hand}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
