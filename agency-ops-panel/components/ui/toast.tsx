'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'info';
interface Toast { id: string; type: ToastType; title: string; message?: string; }
interface ToastCtx { success: (t: string, m?: string) => void; error: (t: string, m?: string) => void; info: (t: string, m?: string) => void; }
const ToastContext = createContext<ToastCtx | null>(null);

const toastStyles: Record<ToastType, React.CSSProperties> = {
  success: { background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' },
  error: { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' },
  info: { background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa' },
};
const toastIcons = { success: CheckCircle, error: AlertCircle, info: Info };

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const remove = useCallback((id: string) => setToasts(p => p.filter(t => t.id !== id)), []);
  const add = useCallback((type: ToastType, title: string, message?: string) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(p => [...p, { id, type, title, message }]);
    setTimeout(() => remove(id), 4000);
  }, [remove]);
  return (
    <ToastContext.Provider value={{ success: (t,m) => add('success',t,m), error: (t,m) => add('error',t,m), info: (t,m) => add('info',t,m) }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full">
        {toasts.map(t => {
          const Icon = toastIcons[t.type];
          return (
            <div key={t.id} className="flex items-start gap-3 p-4 rounded-xl shadow-xl backdrop-blur-sm" style={{ ...toastStyles[t.type], background: `${toastStyles[t.type].background}` }}>
              <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="flex-1"><p className="text-sm font-semibold">{t.title}</p>{t.message && <p className="text-xs mt-0.5 opacity-80">{t.message}</p>}</div>
              <button onClick={() => remove(t.id)} className="opacity-60 hover:opacity-100"><X className="w-4 h-4" /></button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
