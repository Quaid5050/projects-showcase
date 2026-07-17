'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface AuthUser { id: string; name: string; email: string; role: string; }
interface AuthContextType {
  user: AuthUser | null; loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean; isCEO: boolean; isManager: boolean;
  isAdminOrCEO: boolean; isAdminCEOOrManager: boolean;
}
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchMe = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me', { credentials: 'include' });
      if (res.ok) {
        const d = await res.json() as { success: boolean; data: { user: AuthUser } };
        if (d.success) setUser(d.data.user);
      }
    } catch { /* not authed */ } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchMe(); }, [fetchMe]);

  const login = async (email: string, password: string) => {
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }), credentials: 'include' });
    const d = await res.json() as { success: boolean; data?: { user: AuthUser }; error?: string };
    if (!d.success) throw new Error(d.error || 'Login failed');
    setUser(d.data!.user);
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{
      user, loading, login, logout,
      isAdmin: user?.role === 'admin',
      isCEO: user?.role === 'ceo',
      isManager: user?.role === 'manager',
      isAdminOrCEO: user?.role === 'admin' || user?.role === 'ceo',
      isAdminCEOOrManager: ['admin','ceo','manager'].includes(user?.role || ''),
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
