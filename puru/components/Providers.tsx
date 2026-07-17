'use client';

import { SessionProvider } from 'next-auth/react';

/** Session only needed for admin; wrapping the public site causes CLIENT_FETCH_ERROR noise. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>;
}
