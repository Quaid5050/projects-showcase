"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Login failed.");
      }
      router.replace("/admin");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
      <div className="bg-white rounded-xl p-10 md:p-12 max-w-md w-full shadow-xl">
        <div className="text-center mb-8">
          <h1 className="font-montserrat text-2xl font-bold text-black mb-2">Strides Admin</h1>
          <p className="font-inter text-sm text-[#44474d]">Enter your password to access the panel.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
            className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] outline-none rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm hover:bg-[#006399] transition-colors disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
          {error && <p className="text-red-500 font-inter text-sm text-center">{error}</p>}
        </form>
      </div>
    </main>
  );
}
