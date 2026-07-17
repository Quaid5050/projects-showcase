'use client';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, Zap } from 'lucide-react';
import { AuthProvider, useAuth } from '@/components/auth/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); setError(''); setLoading(true);
    try { await login(email, password); router.push('/dashboard'); }
    catch (err: unknown) { setError(err instanceof Error ? err.message : 'Login failed'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex" style={{ background: '#0d0d12' }}>
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d0d12 0%, #1a0a2e 50%, #0d0d12 100%)' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Glow orb */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #c8f000 0%, #7c3aed 60%, transparent 100%)' }} />

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <span className="text-white font-black text-xl">BizzOne</span>
              <span className="font-black text-xl" style={{ color: '#c8f000' }}>Digital</span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: '#c8f000', color: '#c8f000', background: 'rgba(200,240,0,0.05)' }}>
            <Zap className="w-3 h-3" /> AI Automation & Digital Growth Agency
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-6">
            We Build <span style={{ color: '#c8f000' }}>Growth</span><br />
            <span style={{ color: '#c8f000' }}>Engines,</span> Not<br />
            Just Marketing<br />
            Campaigns.
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            From strategy to automation, we help businesses attract, engage, and convert through data-driven digital solutions.
          </p>
        </div>

        {/* Service pills */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {['SEO · Rank Higher', 'Paid Ads · Get More Leads', 'Social Media · Engage More', 'AI Automation · Save Time & Scale'].map(s => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium border"
                style={{ borderColor: 'rgba(124,58,237,0.4)', background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}>
                {s}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} BizzOne Digital. All rights reserved.</p>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-black text-lg">BizzOne<span style={{ color: '#c8f000' }}>Digital</span></span>
          </div>

          <h2 className="text-3xl font-black text-white mb-2">Welcome back</h2>
          <p className="mb-8" style={{ color: '#6b7280' }}>Sign in to your agency operations panel</p>

          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#9ca3af' }}>Email address</label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)} required
                placeholder="you@bizzonedigital.com"
                className="w-full h-12 px-4 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all"
                style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}
                onFocus={e => e.target.style.borderColor = '#c8f000'}
                onBlur={e => e.target.style.borderColor = '#2d2d4e'}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#9ca3af' }}>Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="••••••••"
                  className="w-full h-12 px-4 pr-12 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all"
                  style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}
                  onFocus={e => e.target.style.borderColor = '#c8f000'}
                  onBlur={e => e.target.style.borderColor = '#2d2d4e'}
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#6b7280' }}>
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full h-12 rounded-xl font-bold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ background: loading ? '#2d2d4e' : 'linear-gradient(135deg, #c8f000, #a0d000)', color: '#0d0d12' }}
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" style={{ color: '#c8f000' }} /> <span style={{ color: '#c8f000' }}>Signing in...</span></>
              ) : (
                'Sign In →'
              )}
            </button>
          </form>

          {/* Demo creds */}
          <div className="mt-8 p-4 rounded-xl" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>
            <p className="text-xs font-semibold mb-3" style={{ color: '#c8f000' }}>Demo Credentials</p>
            <div className="space-y-1.5">
              {[
                { role: 'Admin', email: 'admin@example.com', pass: 'Admin@123456' },
                { role: 'CEO', email: 'ceo@example.com', pass: 'CEO@123456' },
                { role: 'Manager', email: 'manager@example.com', pass: 'Manager@123456' },
                { role: 'Sales', email: 'sales@example.com', pass: 'Sales@123456' },
                { role: 'Team', email: 'team@example.com', pass: 'Team@123456' },
              ].map(c => (
                <button key={c.role} onClick={() => { setEmail(c.email); setPassword(c.pass); }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs transition-colors hover:bg-white/5"
                  style={{ color: '#6b7280' }}>
                  <span className="font-semibold" style={{ color: '#a78bfa' }}>{c.role}:</span> {c.email}
                </button>
              ))}
            </div>
            <p className="text-xs mt-2" style={{ color: '#4b5563' }}>Click any row to auto-fill</p>
          </div>

          <p className="text-center text-sm mt-6" style={{ color: '#6b7280' }}>
            No account?{' '}
            <Link href="/register" className="font-semibold hover:underline" style={{ color: '#c8f000' }}>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() { return <AuthProvider><LoginForm /></AuthProvider>; }
