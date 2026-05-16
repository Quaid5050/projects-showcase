'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { api, ApiError } from '@/lib/api';
import type { Restaurant, RestaurantUser } from '@/lib/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Field from '@/components/Field';
import { Card, CardBody } from '@/components/Card';
import PageHeader from '@/components/PageHeader';
import Spinner from '@/components/Spinner';
import { useToast } from '@/components/Toast';

function generateTempPassword(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  const len = 14;
  let out = '';
  const arr = new Uint32Array(len);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(arr);
  } else {
    for (let i = 0; i < len; i += 1) arr[i] = Math.floor(Math.random() * 0xffffffff);
  }
  for (let i = 0; i < len; i += 1) {
    out += alphabet[arr[i] % alphabet.length];
  }
  return out;
}

export default function NewRestaurantUserPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();

  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [restaurantId, setRestaurantId] = useState<string>(
    searchParams.get('restaurantId') || ''
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [created, setCreated] = useState<RestaurantUser | null>(null);
  const [shownPassword, setShownPassword] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { restaurants } = await api.listRestaurants();
        if (cancelled) return;
        setRestaurants(restaurants);
        if (!restaurantId && restaurants.length > 0) {
          setRestaurantId(restaurants[0].id);
        }
      } catch (err) {
        if (cancelled) return;
        const message =
          err instanceof ApiError ? err.message : 'Could not load restaurants';
        setLoadError(message);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const passwordError =
    password.length > 0 && password.length < 8
      ? 'Password must be at least 8 characters'
      : null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    if (passwordError) return;
    setError(null);
    setSubmitting(true);
    try {
      const { user } = await api.createRestaurantUser({
        restaurantId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });

      // The backend creates the user as active. We respect the admin's isActive choice
      // by issuing a PATCH only when they explicitly toggled it off.
      if (!isActive) {
        try {
          await api.updateRestaurantUser(user.id, { isActive: false });
        } catch {
          /* non-fatal; surfaced as a toast below */
          toast.error('User created but could not be marked inactive');
        }
      }

      setCreated({ ...user, isActive });
      setShownPassword(password);
      toast.success('Owner account created', user.email);
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'Could not create the owner account';
      setError(message);
      toast.error('Failed to create owner', message);
    } finally {
      setSubmitting(false);
    }
  }

  if (restaurants === null && !loadError) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (loadError) {
    return (
      <>
        <PageHeader title="Create restaurant owner" />
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {loadError}
        </div>
      </>
    );
  }

  if (restaurants && restaurants.length === 0) {
    return (
      <>
        <PageHeader
          title="Create restaurant owner"
          description="You'll need a restaurant before you can create its owner account."
        />
        <Card>
          <CardBody>
            <p className="text-sm text-slate-600">
              No restaurants exist yet. Create one first.
            </p>
            <div className="mt-4">
              <Link href="/dashboard/restaurants/new">
                <Button>+ Create restaurant</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }

  if (created && shownPassword) {
    const restaurant = restaurants?.find((r) => r.id === created.restaurantId);
    return (
      <>
        <PageHeader
          title="Owner account created"
          description={`Hand these credentials to the owner of ${restaurant?.name ?? 'the restaurant'}.`}
        />
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
            <h3 className="text-sm font-semibold text-emerald-900">
              Credentials ready to share
            </h3>
            <p className="mt-1 text-sm text-emerald-800">
              The owner will use these to sign into the mobile app and see only{' '}
              <strong>{restaurant?.name ?? 'their restaurant'}</strong>'s paid orders. We don't
              store the plain password — record it now if you need it again.
            </p>
            <dl className="mt-4 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-3">
              <dt className="text-emerald-900/70">Email</dt>
              <dd className="sm:col-span-2 font-mono text-slate-900">{created.email}</dd>
              <dt className="text-emerald-900/70">Temporary password</dt>
              <dd className="sm:col-span-2 font-mono text-slate-900">{shownPassword}</dd>
            </dl>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    `Email: ${created.email}\nPassword: ${shownPassword}`
                  );
                  toast.success('Copied to clipboard');
                }}
              >
                Copy credentials
              </Button>
              {restaurant && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() =>
                    router.push(`/dashboard/restaurants/${restaurant.id}`)
                  }
                >
                  View restaurant
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setCreated(null);
                  setShownPassword(null);
                  setName('');
                  setEmail('');
                  setPassword('');
                  setIsActive(true);
                }}
              >
                Create another
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Create restaurant owner"
        description="This account will log into the React Native app and see only its restaurant's paid orders."
      />

      <Card>
        <CardBody>
          <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
            <Field label="Restaurant" htmlFor="restaurantId" required>
              <Select
                id="restaurantId"
                value={restaurantId}
                onChange={(e) => setRestaurantId(e.target.value)}
                required
              >
                {(restaurants ?? []).map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.restaurantKey})
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Owner name" htmlFor="name" required>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={120}
                placeholder="Jane Doe"
              />
            </Field>

            <Field
              label="Email / username"
              htmlFor="email"
              required
              hint="The owner signs into the mobile app with this email."
            >
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="owner@onopokebar.com"
              />
            </Field>

            <Field
              label="Temporary password"
              htmlFor="password"
              required
              hint="At least 8 characters. Share this securely with the owner."
              error={passwordError || undefined}
            >
              <div className="flex gap-2">
                <Input
                  id="password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  maxLength={128}
                  invalid={!!passwordError}
                  placeholder="At least 8 characters"
                  className="flex-1 font-mono"
                />
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setPassword(generateTempPassword())}
                >
                  Generate
                </Button>
              </div>
            </Field>

            <Field label="Status" hint="Inactive owners cannot sign into the mobile app.">
              <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-brand-600 focus-ring"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                Active
              </label>
            </Field>

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <Button
                type="submit"
                loading={submitting}
                disabled={!restaurantId || !!passwordError}
              >
                {submitting ? 'Creating…' : 'Create owner account'}
              </Button>
              <Link href="/dashboard">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
