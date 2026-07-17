'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Invalid credentials');
        return;
      }

      toast.success('Welcome back!');
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a0a00] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image src="/images/logo.png" alt="Burnaby Palace Restaurant" fill className="object-contain" />
          </div>
          <h1 className="text-[#FFD700] font-bold text-xl">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Burnaby Palace Restaurant</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#0d0500] border border-[#8B0000]/30 rounded-2xl p-8">
          <h2 className="text-white font-semibold text-lg mb-6 text-center">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="admin"
                required
                className="w-full px-3 py-2.5 bg-[#1a0a00] border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/50 focus:border-[#8B0000] placeholder-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2.5 bg-[#1a0a00] border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/50 focus:border-[#8B0000] placeholder-gray-600"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800/30 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8B0000] hover:bg-[#a00000] disabled:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
