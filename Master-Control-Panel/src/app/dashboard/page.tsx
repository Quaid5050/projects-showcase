'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api, ApiError } from '@/lib/api';
import type { Restaurant } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import { Card } from '@/components/Card';
import PageHeader from '@/components/PageHeader';
import Spinner from '@/components/Spinner';

export default function DashboardPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { restaurants } = await api.listRestaurants();
        if (!cancelled) setRestaurants(restaurants);
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof ApiError ? err.message : 'Could not load restaurants';
        setError(message);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <PageHeader
        title="Restaurants"
        description="All tenants you've onboarded."
        action={
          <Link href="/dashboard/restaurants/new">
            <Button>+ New restaurant</Button>
          </Link>
        }
      />

      {error && (
        <div role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <Card>
        {restaurants === null ? (
          <div className="flex items-center justify-center py-16">
            <Spinner size="lg" />
          </div>
        ) : restaurants.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Mobile card list */}
            <ul className="divide-y divide-slate-100 md:hidden">
              {restaurants.map((r) => (
                <li key={r.id}>
                  <Link href={`/dashboard/restaurants/${r.id}`} className="flex items-center justify-between gap-3 px-4 py-4 hover:bg-slate-50 active:bg-slate-100">
                    <div className="min-w-0">
                      <p className="truncate font-medium text-slate-900">{r.name}</p>
                      <p className="mt-0.5 truncate font-mono text-xs text-slate-500">{r.restaurantKey}</p>
                      {r.domain ? <p className="mt-0.5 truncate text-xs text-slate-400">{r.domain}</p> : null}
                    </div>
                    <div className="flex flex-shrink-0 flex-col items-end gap-1.5">
                      {r.isActive ? <Badge tone="success">Active</Badge> : <Badge tone="neutral">Inactive</Badge>}
                      <span className="text-xs text-slate-400">{formatDate(r.createdAt)}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Key</th>
                    <th className="px-6 py-3">Domain</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Created</th>
                    <th className="px-6 py-3 text-right" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {restaurants.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50">
                      <td className="px-6 py-3 font-medium text-slate-900">{r.name}</td>
                      <td className="px-6 py-3 font-mono text-xs text-slate-600">{r.restaurantKey}</td>
                      <td className="px-6 py-3 text-slate-600">{r.domain || '—'}</td>
                      <td className="px-6 py-3">
                        {r.isActive ? <Badge tone="success">Active</Badge> : <Badge tone="neutral">Inactive</Badge>}
                      </td>
                      <td className="px-6 py-3 text-slate-500">{formatDate(r.createdAt)}</td>
                      <td className="px-6 py-3 text-right">
                        <Link href={`/dashboard/restaurants/${r.id}`} className="text-sm font-medium text-brand-700 hover:text-brand-800">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Card>
    </>
  );
}

function EmptyState() {
  return (
    <div className="px-6 py-16 text-center">
      <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <span className="text-xl">∅</span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">No restaurants yet</h3>
      <p className="mt-1 text-sm text-slate-500">Create your first restaurant to get started.</p>
      <div className="mt-6">
        <Link href="/dashboard/restaurants/new">
          <Button>+ Create restaurant</Button>
        </Link>
      </div>
    </div>
  );
}
