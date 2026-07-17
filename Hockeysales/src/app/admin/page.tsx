"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";

interface Stats {
  newOrders: number;
  totalOrders: number;
  pendingReviews: number;
  totalReviews: number;
  products: number;
  unreadInquiries: number;
  totalInquiries: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setStats(data))
      .catch(() => {});
  }, []);

  const cards = [
    { label: "New Orders", value: stats?.newOrders, sub: `${stats?.totalOrders ?? 0} total`, href: "/admin/orders", icon: "shopping_cart", color: "#006399" },
    { label: "Pending Reviews", value: stats?.pendingReviews, sub: `${stats?.totalReviews ?? 0} total`, href: "/admin/reviews", icon: "reviews", color: "#ed4a14" },
    { label: "Products", value: stats?.products, sub: "in catalog", href: "/admin/products", icon: "inventory_2", color: "#0a1628" },
    { label: "New Inquiries", value: stats?.unreadInquiries, sub: `${stats?.totalInquiries ?? 0} total`, href: "/admin/inquiries", icon: "mail", color: "#006399" },
  ];

  return (
    <AdminShell title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="bg-white border border-[#c5c6cd] rounded-xl p-6 hover:border-[#006399] hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined" style={{ color: c.color, fontSize: "28px" }}>{c.icon}</span>
              <span className="material-symbols-outlined text-[#c5c6cd]">chevron_right</span>
            </div>
            <div className="font-montserrat text-[36px] font-extrabold text-black leading-none">
              {c.value ?? "—"}
            </div>
            <p className="font-inter font-semibold text-sm text-black mt-2">{c.label}</p>
            <p className="font-inter text-xs text-[#75777e]">{c.sub}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-white border border-[#c5c6cd] rounded-xl p-6">
        <h2 className="font-montserrat text-lg font-bold text-black mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/orders" className="bg-black text-white px-5 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors">Manage Orders</Link>
          <Link href="/admin/products" className="bg-black text-white px-5 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors">Add / Edit Products</Link>
          <Link href="/admin/reviews" className="bg-black text-white px-5 py-2.5 rounded font-inter text-sm font-semibold hover:bg-[#006399] transition-colors">Approve Reviews</Link>
        </div>
      </div>
    </AdminShell>
  );
}
