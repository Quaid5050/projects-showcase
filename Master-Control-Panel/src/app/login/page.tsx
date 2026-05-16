'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, ApiError } from '@/lib/api';
import { getStoredToken, setStoredAdmin, setStoredToken } from '@/lib/auth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Field from '@/components/Field';
import { useToast } from '@/components/Toast';

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (getStoredToken()) router.replace('/dashboard');
  }, [router]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const { token, admin } = await api.login(email.trim(), password);
      setStoredToken(token);
      setStoredAdmin(admin);
      toast.success('Welcome back', admin.name);
      router.replace('/dashboard');
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'Something went wrong. Try again.';
      setError(message);
      toast.error('Login failed', message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-brand-50 p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md">
            <span className="text-lg font-bold">MCP</span>
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            Master Control Panel
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Sign in to manage restaurants and owner accounts.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
            <Field label="Email" htmlFor="email" required>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                invalid={!!error}
                required
              />
            </Field>

            <Field label="Password" htmlFor="password" required>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                invalid={!!error}
                required
              />
            </Field>

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <Button type="submit" loading={submitting} size="lg" className="mt-2 w-full">
              {submitting ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Local development build · API at{' '}
          <span className="font-mono">
            {process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000'}
          </span>
        </p>
      </div>
    </div>
  );
}
