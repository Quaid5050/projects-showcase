"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const nav = [
  { href: "/admin", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/orders", label: "Orders", icon: "shopping_cart" },
  { href: "/admin/products", label: "Products", icon: "inventory_2" },
  { href: "/admin/sticks", label: "Sticks", icon: "sports_hockey" },
  { href: "/admin/skates", label: "Skates", icon: "ice_skating" },
  { href: "/admin/reviews", label: "Reviews", icon: "reviews" },
  { href: "/admin/inquiries", label: "Inquiries", icon: "mail" },
];

export default function AdminShell({ children, title }: { children: React.ReactNode; title: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => {
        if (!res.ok) {
          router.replace("/admin/login");
          return;
        }
        setChecking(false);
      })
      .catch(() => router.replace("/admin/login"));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <p className="font-inter text-[#44474d]">Loading admin panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0a1628] text-white md:min-h-screen shrink-0">
        <div className="px-6 py-6 border-b border-[#1a2d4a]">
          <Link href="/admin" className="font-montserrat font-extrabold text-lg text-white">Strides Admin</Link>
          <p className="font-inter text-xs text-[#8facc8] mt-1">Management Panel</p>
        </div>
        <nav className="p-3 flex md:flex-col gap-1 overflow-x-auto">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "flex items-center gap-3 px-4 py-3 rounded font-inter text-sm font-semibold whitespace-nowrap transition-colors " +
                  (active ? "bg-[#006399] text-white" : "text-[#8facc8] hover:bg-[#1a2d4a] hover:text-white")
                }
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 md:mt-auto border-t border-[#1a2d4a]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded font-inter text-sm font-semibold text-[#ff9a7a] hover:bg-[#1a2d4a] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Logout
          </button>
          <Link href="/" className="w-full flex items-center gap-3 px-4 py-3 rounded font-inter text-xs text-[#8facc8] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-base">open_in_new</span>
            View Website
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-grow p-6 md:p-10 max-w-[1200px]">
        <h1 className="font-montserrat text-[28px] md:text-[32px] font-bold text-black mb-8">{title}</h1>
        {children}
      </main>
    </div>
  );
}
