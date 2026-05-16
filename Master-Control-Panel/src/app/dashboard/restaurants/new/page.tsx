'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api, ApiError } from '@/lib/api';
import type { Restaurant } from '@/lib/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Field from '@/components/Field';
import { Card, CardBody, CardHeader } from '@/components/Card';
import PageHeader from '@/components/PageHeader';
import ApiKeyReveal from '@/components/ApiKeyReveal';
import { useToast } from '@/components/Toast';

type Created = { restaurant: Restaurant; integrationApiKey: string };

export default function NewRestaurantPage() {
  const router = useRouter();
  const toast = useToast();

  const [name, setName] = useState('');
  const [restaurantKey, setRestaurantKey] = useState('');
  const [domain, setDomain] = useState('');
  const [isActive, setIsActive] = useState(true);

  // Source DB settings
  const [sourceDbUri, setSourceDbUri] = useState('');
  const [sourceDbName, setSourceDbName] = useState('');
  const [sourceOrderCollection, setSourceOrderCollection] = useState('');
  const [sourcePaymentStatusField, setSourcePaymentStatusField] = useState('');
  const [sourcePaidValue, setSourcePaidValue] = useState('');
  const [sourceOrderNumberField, setSourceOrderNumberField] = useState('');
  const [sourceOrderTypeField, setSourceOrderTypeField] = useState('');
  const [sourceItemsField, setSourceItemsField] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [created, setCreated] = useState<Created | null>(null);

  function validateKey(value: string): string | null {
    if (!value) return null; // optional
    if (value.length < 2) return 'Must be at least 2 characters';
    if (!/^[a-z0-9_]+$/.test(value))
      return 'Only lowercase letters, digits, and underscores';
    return null;
  }
  const keyError = validateKey(restaurantKey);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    if (keyError) return;
    setError(null);
    setSubmitting(true);
    try {
      const result = await api.createRestaurant({
        name: name.trim(),
        restaurantKey: restaurantKey.trim() ? restaurantKey.trim() : undefined,
        domain: domain.trim() || undefined,
        isActive,
        // Source DB — only send if at least URI is provided
        ...(sourceDbUri.trim() ? {
          sourceDbUri: sourceDbUri.trim(),
          sourceDbName: sourceDbName.trim(),
          sourceOrderCollection: sourceOrderCollection.trim() || 'orders',
          sourcePaymentStatusField: sourcePaymentStatusField.trim() || 'paymentStatus',
          sourcePaidValue: sourcePaidValue.trim() || 'paid',
          sourceOrderNumberField: sourceOrderNumberField.trim(),
          sourceOrderTypeField: sourceOrderTypeField.trim(),
          sourceItemsField: sourceItemsField.trim(),
        } : {}),
      });
      setCreated(result);
      toast.success('Restaurant created', result.restaurant.name);
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'Could not create the restaurant';
      setError(message);
      toast.error('Failed to create restaurant', message);
    } finally {
      setSubmitting(false);
    }
  }

  if (created) {
    return (
      <>
        <PageHeader
          title="Restaurant created"
          description={`${created.restaurant.name} is now in the system.`}
        />

        <div className="flex flex-col gap-6">
          <ApiKeyReveal
            apiKey={created.integrationApiKey}
            restaurantName={created.restaurant.name}
          />

          <Card>
            <CardHeader title="Summary" />
            <CardBody>
              <dl className="grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-3">
                <dt className="text-slate-500">Name</dt>
                <dd className="sm:col-span-2 font-medium text-slate-900">
                  {created.restaurant.name}
                </dd>

                <dt className="text-slate-500">Restaurant key</dt>
                <dd className="sm:col-span-2 font-mono text-slate-800">
                  {created.restaurant.restaurantKey}
                </dd>

                <dt className="text-slate-500">Domain</dt>
                <dd className="sm:col-span-2 text-slate-800">
                  {created.restaurant.domain || '—'}
                </dd>

                <dt className="text-slate-500">Status</dt>
                <dd className="sm:col-span-2 text-slate-800">
                  {created.restaurant.isActive ? 'Active' : 'Inactive'}
                </dd>

                <dt className="text-slate-500">Source DB</dt>
                <dd className="sm:col-span-2 text-slate-800">
                  {created.restaurant.hasSourceDb ? (
                    <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                      ✓ Configured ({created.restaurant.sourceDbName})
                    </span>
                  ) : '—'}
                </dd>
              </dl>
            </CardBody>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => router.push(`/dashboard/restaurants/${created.restaurant.id}`)}
            >
              View restaurant
            </Button>
            <Link href={`/dashboard/restaurant-users/new?restaurantId=${created.restaurant.id}`}>
              <Button variant="secondary">Create owner account</Button>
            </Link>
            <Button
              variant="ghost"
              onClick={() => {
                setCreated(null);
                setName('');
                setRestaurantKey('');
                setDomain('');
                setIsActive(true);
                setSourceDbUri('');
                setSourceDbName('');
                setSourceOrderCollection('');
                setSourcePaymentStatusField('');
                setSourcePaidValue('');
                setSourceOrderNumberField('');
                setSourceOrderTypeField('');
                setSourceItemsField('');
              }}
            >
              Create another
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Create restaurant"
        description="Add a new tenant. You'll get an integration API key once it's saved — copy it immediately."
      />

      <Card>
        <CardBody>
          <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
            <Field
              label="Restaurant name"
              htmlFor="name"
              required
              hint="The display name. E.g. Ono Poke Bar."
            >
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={200}
                placeholder="Ono Poke Bar"
              />
            </Field>

            <Field
              label="Restaurant key"
              htmlFor="restaurantKey"
              hint="Lowercase letters, digits, and underscores. Leave blank to auto-generate (e.g. ono_poke_bar_a1b2c3)."
              error={keyError || undefined}
            >
              <Input
                id="restaurantKey"
                value={restaurantKey}
                onChange={(e) => setRestaurantKey(e.target.value.toLowerCase())}
                placeholder="ono_poke_bar"
                invalid={!!keyError}
                pattern="[a-z0-9_]+"
              />
            </Field>

            <Field
              label="Domain"
              htmlFor="domain"
              hint="The restaurant's public website domain (optional)."
            >
              <Input
                id="domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="onopokebar.com"
                maxLength={300}
              />
            </Field>

            <Field label="Status" hint="Inactive restaurants won't accept integration calls.">
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

            {/* Source DB settings */}
            <div className="border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-700 mb-1">Source database settings</p>
              <p className="text-xs text-slate-500 mb-4">
                These settings allow the restaurant owner app to fetch paid orders directly from this
                restaurant&apos;s website database. All fields are optional — leave blank if not needed.
              </p>

              <div className="flex flex-col gap-4">
                <Field
                  label="Source DB URI"
                  htmlFor="sourceDbUri"
                  hint="MongoDB connection string for the restaurant's website database. Stored securely and never exposed to the mobile app."
                >
                  <Input
                    id="sourceDbUri"
                    type="password"
                    value={sourceDbUri}
                    onChange={(e) => setSourceDbUri(e.target.value)}
                    placeholder="mongodb+srv://user:pass@cluster.mongodb.net"
                    maxLength={500}
                  />
                </Field>

                <Field
                  label="Source DB name"
                  htmlFor="sourceDbName"
                  hint="The database name inside that MongoDB instance."
                >
                  <Input
                    id="sourceDbName"
                    value={sourceDbName}
                    onChange={(e) => setSourceDbName(e.target.value)}
                    placeholder="onopokebar_production"
                    maxLength={200}
                  />
                </Field>

                <Field
                  label="Orders collection"
                  htmlFor="sourceOrderCollection"
                  hint='The collection that holds orders. Defaults to "orders" if left blank.'
                >
                  <Input
                    id="sourceOrderCollection"
                    value={sourceOrderCollection}
                    onChange={(e) => setSourceOrderCollection(e.target.value)}
                    placeholder="orders"
                    maxLength={200}
                  />
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Payment status field"
                    htmlFor="sourcePaymentStatusField"
                    hint='Field name for payment status. Defaults to "paymentStatus".'
                  >
                    <Input
                      id="sourcePaymentStatusField"
                      value={sourcePaymentStatusField}
                      onChange={(e) => setSourcePaymentStatusField(e.target.value)}
                      placeholder="paymentStatus"
                      maxLength={100}
                    />
                  </Field>

                  <Field
                    label="Paid value"
                    htmlFor="sourcePaidValue"
                    hint='The value that means "paid". Defaults to "paid".'
                  >
                    <Input
                      id="sourcePaidValue"
                      value={sourcePaidValue}
                      onChange={(e) => setSourcePaidValue(e.target.value)}
                      placeholder="paid"
                      maxLength={100}
                    />
                  </Field>

                  <Field
                    label="Order number field"
                    htmlFor="sourceOrderNumberField"
                    hint='Field name for the order number. Defaults to "orderNumber".'
                  >
                    <Input
                      id="sourceOrderNumberField"
                      value={sourceOrderNumberField}
                      onChange={(e) => setSourceOrderNumberField(e.target.value)}
                      placeholder="orderNumber"
                      maxLength={100}
                    />
                  </Field>

                  <Field
                    label="Order type field"
                    htmlFor="sourceOrderTypeField"
                    hint='Field name for delivery/pickup. Defaults to "orderType".'
                  >
                    <Input
                      id="sourceOrderTypeField"
                      value={sourceOrderTypeField}
                      onChange={(e) => setSourceOrderTypeField(e.target.value)}
                      placeholder="orderType"
                      maxLength={100}
                    />
                  </Field>

                  <Field
                    label="Items field"
                    htmlFor="sourceItemsField"
                    hint='Field name for the items array. Defaults to "items".'
                  >
                    <Input
                      id="sourceItemsField"
                      value={sourceItemsField}
                      onChange={(e) => setSourceItemsField(e.target.value)}
                      placeholder="items"
                      maxLength={100}
                    />
                  </Field>
                </div>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <Button type="submit" loading={submitting}>
                {submitting ? 'Creating…' : 'Create restaurant'}
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
