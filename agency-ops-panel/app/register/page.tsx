'use client';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Zap } from 'lucide-react';
import { AuthProvider, useAuth } from '@/components/auth/AuthContext';

function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); setError(''); setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, role: 'sales' }), credentials: 'include',
      });
      const d = await res.json() as { success: boolean; error?: string };
      if (!d.success) throw new Error(d.error);
      await login(form.email, form.password);
      router.push('/dashboard');
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Registration failed'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ background: '#0d0d12' }}>
      {/* Background glow */}
      <div className="fixed top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #c8f000 0%, #7c3aed 60%, transparent 100%)' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
              <Zap className="w-6 h-6 text-black" />
            </div>
            <span className="text-white font-black text-xl">BizzOne<span style={{ color: '#c8f000' }}>Digital</span></span>
          </div>
          <h1 className="text-3xl font-black text-white">Create your account</h1>
          <p className="mt-2 text-sm" style={{ color: '#6b7280' }}>Join the agency operations panel</p>
        </div>

        <div className="p-8 rounded-2xl" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Ahmed Al-Rashidi' },
              { label: 'Email Address', key: 'email', type: 'email', placeholder: 'you@bizzonedigital.com' },
              { label: 'Password', key: 'password', type: 'password', placeholder: 'Min 8 chars, uppercase + number' },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#9ca3af' }}>{f.label}</label>
                <input
                  type={f.type} required placeholder={f.placeholder}
                  value={(form as Record<string, string>)[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full h-12 px-4 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all"
                  style={{ background: '#0d0d12', border: '1px solid #2d2d4e' }}
                  onFocus={e => e.target.style.borderColor = '#c8f000'}
                  onBlur={e => e.target.style.borderColor = '#2d2d4e'}
                />
              </div>
            ))}

            <button type="submit" disabled={loading}
              className="w-full h-12 rounded-xl font-bold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)', color: '#0d0d12' }}>
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating...</> : 'Create Account →'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm mt-6" style={{ color: '#6b7280' }}>
          Already have an account?{' '}
          <Link href="/login" className="font-semibold hover:underline" style={{ color: '#c8f000' }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default function RegisterPage() { return <AuthProvider><RegisterForm /></AuthProvider>; }
