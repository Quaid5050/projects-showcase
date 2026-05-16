'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { api, ApiError } from '@/lib/api';
import type { Order, Restaurant, RestaurantUser } from '@/lib/types';
import { formatDate, formatMoney } from '@/lib/utils';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import { Card, CardBody, CardHeader } from '@/components/Card';
import Field from '@/components/Field';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import PageHeader from '@/components/PageHeader';
import Spinner from '@/components/Spinner';
import ApiKeyReveal from '@/components/ApiKeyReveal';
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
  for (let i = 0; i < len; i += 1) out += alphabet[arr[i] % alphabet.length];
  return out;
}

export default function RestaurantDetailsPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const toast = useToast();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [users, setUsers] = useState<RestaurantUser[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [rotating, setRotating] = useState(false);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);
  const [resetUser, setResetUser] = useState<RestaurantUser | null>(null);
  const [editSourceDb, setEditSourceDb] = useState(false);
  const [ordersSource, setOrdersSource] = useState<'sourceDb' | 'centralDb' | null>(null);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    try {
      const data = await api.getRestaurant(id);
      setRestaurant(data.restaurant);
      setUsers(data.users ?? []);
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Could not load restaurant';
      setLoadError(message);
    } finally {
      setLoading(false);
    }
    // Fetch orders separately — failure here should not break the whole page
    try {
      const ordersData = await api.getRestaurantOrders(id, 100);
      setOrders(ordersData.orders ?? []);
      setOrdersSource(ordersData.source);
    } catch {
      // Orders failed silently — page still shows restaurant info
      setOrders([]);
    }
  }, [id]);

  useEffect(() => { load(); }, [load]);

  async function onRotateKey() {
    if (rotating || !restaurant) return;
    if (!window.confirm(
      `Rotate the integration API key for "${restaurant.name}"?\n\nThe existing key will stop working immediately.`
    )) return;
    setRotating(true);
    try {
      const res = await api.updateRestaurant(restaurant.id, { regenerateIntegrationApiKey: true });
      if (res.integrationApiKey) setNewApiKey(res.integrationApiKey);
      setRestaurant(res.restaurant);
      toast.success('Integration API key rotated');
    } catch (err) {
      toast.error('Rotation failed', err instanceof ApiError ? err.message : 'Could not rotate the key');
    } finally {
      setRotating(false);
    }
  }

  if (loading) {
    return <div className="flex h-64 items-center justify-center"><Spinner size="lg" /></div>;
  }

  if (loadError || !restaurant) {
    return (
      <>
        <PageHeader title="Restaurant" />
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {loadError || 'Restaurant not found.'}
        </div>
        <div className="mt-4">
          <Link href="/dashboard"><Button variant="secondary">Back to restaurants</Button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={restaurant.name}
        description={<span className="font-mono text-xs text-slate-500">{restaurant.restaurantKey}</span>}
        action={
          <div className="flex flex-wrap gap-2">
            <Link href={`/dashboard/restaurant-users/new?restaurantId=${restaurant.id}`}>
              <Button variant="secondary" size="sm">+ Create owner</Button>
            </Link>
            <Button onClick={onRotateKey} loading={rotating} variant="danger" size="sm">
              Rotate API key
            </Button>
          </div>
        }
      />

      {newApiKey && (
        <div className="mb-6">
          <ApiKeyReveal apiKey={newApiKey} restaurantName={restaurant.name} />
        </div>
      )}

      <div className="flex flex-col gap-5">

        {/* Restaurant info */}
        <Card>
          <CardHeader title="Restaurant info" />
          <CardBody>
            <dl className="grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-3">
              <dt className="text-slate-500">Name</dt>
              <dd className="sm:col-span-2 font-medium text-slate-900">{restaurant.name}</dd>
              <dt className="text-slate-500">Restaurant key</dt>
              <dd className="sm:col-span-2 break-all font-mono text-slate-800">{restaurant.restaurantKey}</dd>
              <dt className="text-slate-500">Domain</dt>
              <dd className="sm:col-span-2 text-slate-800">{restaurant.domain || '—'}</dd>
              <dt className="text-slate-500">Status</dt>
              <dd className="sm:col-span-2">
                {restaurant.isActive ? <Badge tone="success">Active</Badge> : <Badge tone="neutral">Inactive</Badge>}
              </dd>
              <dt className="text-slate-500">Created</dt>
              <dd className="sm:col-span-2 text-slate-800">{formatDate(restaurant.createdAt)}</dd>
            </dl>
          </CardBody>
        </Card>

        {/* Source DB */}
        <Card>
          <CardHeader
            title="Source database"
            description="Allows the owner app to fetch paid orders from this restaurant's website database."
            action={
              <Button size="sm" variant="secondary" onClick={() => setEditSourceDb(true)}>
                {restaurant.hasSourceDb ? 'Edit' : 'Configure'}
              </Button>
            }
          />
          <CardBody>
            {restaurant.hasSourceDb ? (
              <dl className="grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-3">
                <dt className="text-slate-500">Connection</dt>
                <dd className="sm:col-span-2"><Badge tone="success">Configured</Badge></dd>
                <dt className="text-slate-500">Database name</dt>
                <dd className="sm:col-span-2 break-all font-mono text-slate-800">{restaurant.sourceDbName || '—'}</dd>
                <dt className="text-slate-500">Orders collection</dt>
                <dd className="sm:col-span-2 font-mono text-slate-800">{restaurant.sourceOrderCollection || 'orders'}</dd>
                <dt className="text-slate-500">Payment status field</dt>
                <dd className="sm:col-span-2 font-mono text-slate-800">
                  {restaurant.sourcePaymentStatusField || 'paymentStatus'}{' '}
                  <span className="text-slate-400">= &quot;{restaurant.sourcePaidValue || 'paid'}&quot;</span>
                </dd>
                {restaurant.sourceOrderNumberField && (
                  <>
                    <dt className="text-slate-500">Order number field</dt>
                    <dd className="sm:col-span-2 font-mono text-slate-800">{restaurant.sourceOrderNumberField}</dd>
                  </>
                )}
                {restaurant.sourceOrderTypeField && (
                  <>
                    <dt className="text-slate-500">Order type field</dt>
                    <dd className="sm:col-span-2 font-mono text-slate-800">{restaurant.sourceOrderTypeField}</dd>
                  </>
                )}
              </dl>
            ) : (
              <p className="text-sm text-slate-500">
                Not configured. Click &quot;Configure&quot; to connect this restaurant&apos;s website database.
              </p>
            )}
          </CardBody>
        </Card>

        {/* Owner users */}
        <Card>
          <CardHeader
            title="Owner users"
            description="Accounts that can sign into the mobile app and see this restaurant's paid orders."
            action={
              <Link href={`/dashboard/restaurant-users/new?restaurantId=${restaurant.id}`}>
                <Button size="sm">+ Add owner</Button>
              </Link>
            }
          />
          {users.length === 0 ? (
            <CardBody>
              <p className="text-sm text-slate-500">No owners yet. Create the first one so they can start receiving orders.</p>
            </CardBody>
          ) : (
            <>
              {/* Mobile list */}
              <ul className="divide-y divide-slate-100 md:hidden">
                {users.map((u) => (
                  <li key={u.id} className="flex items-center justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate font-medium text-slate-900">{u.name}</p>
                      <p className="truncate font-mono text-xs text-slate-500">{u.email}</p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <Badge tone="brand">{u.role}</Badge>
                        {u.isActive ? <Badge tone="success">Active</Badge> : <Badge tone="neutral">Inactive</Badge>}
                      </div>
                    </div>
                    <Button size="sm" variant="secondary" onClick={() => setResetUser(u)}>Reset</Button>
                  </li>
                ))}
              </ul>
              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3">Role</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Created</th>
                      <th className="px-6 py-3 text-right" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {users.map((u) => (
                      <tr key={u.id}>
                        <td className="px-6 py-3 font-medium text-slate-900">{u.name}</td>
                        <td className="px-6 py-3 font-mono text-xs text-slate-700">{u.email}</td>
                        <td className="px-6 py-3"><Badge tone="brand">{u.role}</Badge></td>
                        <td className="px-6 py-3">
                          {u.isActive ? <Badge tone="success">Active</Badge> : <Badge tone="neutral">Inactive</Badge>}
                        </td>
                        <td className="px-6 py-3 text-slate-500">{formatDate(u.createdAt)}</td>
                        <td className="px-6 py-3 text-right">
                          <Button size="sm" variant="secondary" onClick={() => setResetUser(u)}>Reset password</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </Card>

        {/* Paid orders */}
        <Card>
          <CardHeader
            title="Paid orders"
            description={
              restaurant.hasSourceDb
                ? 'Live paid orders from this restaurant\'s website database.'
                : 'Paid orders received via the integration endpoint.'
            }
            action={
              <button
                onClick={load}
                className="text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                ↻ Refresh
              </button>
            }
          />
          {orders.length === 0 ? (
            <CardBody>
              <p className="text-sm text-slate-500">
                {restaurant.hasSourceDb
                  ? 'No paid orders found in the source database. Make sure the backend is deployed with the latest code (vercel --prod) and the source DB connection is working.'
                  : 'No paid orders yet. They will appear here once the integration starts sending paid orders.'}
              </p>
            </CardBody>
          ) : (
            <div className="divide-y divide-slate-100">
              {orders.map((o) => {
                const isExpanded = expandedOrder === o.id;
                return (
                  <div key={o.id}>
                    {/* Order summary row — click to expand */}
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors"
                      onClick={() => setExpandedOrder(isExpanded ? null : o.id)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-900">#{o.orderNumber}</span>
                            <Badge tone={o.orderStatus === 'completed' ? 'neutral' : 'brand'}>
                              {o.orderStatus}
                            </Badge>
                            <span className="text-xs capitalize text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                              {o.orderType}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-slate-600">{o.customer?.name || '—'}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{formatDate(o.paidAt)}</p>
                        </div>
                        <div className="flex flex-shrink-0 flex-col items-end gap-1">
                          <span className="font-bold text-slate-900">{formatMoney(o.total, o.currency)}</span>
                          <span className="text-xs text-slate-400">
                            {o.items?.reduce((s, i) => s + i.quantity, 0) ?? 0} items
                          </span>
                          <span className="text-xs text-brand-600">{isExpanded ? '▲ hide' : '▼ details'}</span>
                        </div>
                      </div>
                    </button>

                    {/* Expanded: items + customer details */}
                    {isExpanded && (
                      <div className="px-4 pb-4 bg-slate-50 border-t border-slate-100">
                        {/* Items */}
                        {o.items && o.items.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Items ordered</p>
                            <div className="flex flex-col gap-1.5">
                              {o.items.map((item, idx) => (
                                <div key={idx} className="flex items-start justify-between gap-2 text-sm">
                                  <div className="flex items-start gap-2 min-w-0">
                                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand-600 text-white text-xs font-bold">
                                      {item.quantity}
                                    </span>
                                    <div className="min-w-0">
                                      <span className="font-medium text-slate-900">{item.name}</span>
                                      {item.notes && (
                                        <p className="text-xs text-slate-500 italic mt-0.5">📝 {item.notes}</p>
                                      )}
                                    </div>
                                  </div>
                                  <span className="flex-shrink-0 font-semibold text-slate-700">
                                    {formatMoney(item.price * item.quantity, o.currency)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Totals */}
                        <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                          {o.subtotal > 0 && (
                            <>
                              <span className="text-slate-500">Subtotal</span>
                              <span className="text-right text-slate-700">{formatMoney(o.subtotal, o.currency)}</span>
                            </>
                          )}
                          {(o.tax ?? 0) > 0 && (
                            <>
                              <span className="text-slate-500">Tax</span>
                              <span className="text-right text-slate-700">{formatMoney(o.tax ?? 0, o.currency)}</span>
                            </>
                          )}
                          {(o.deliveryFee ?? 0) > 0 && (
                            <>
                              <span className="text-slate-500">Delivery fee</span>
                              <span className="text-right text-slate-700">{formatMoney(o.deliveryFee ?? 0, o.currency)}</span>
                            </>
                          )}
                          <span className="font-semibold text-slate-900">Total</span>
                          <span className="text-right font-bold text-slate-900">{formatMoney(o.total, o.currency)}</span>
                        </div>

                        {/* Customer details */}
                        {(o.customer?.phone || o.customer?.email || o.customer?.address) && (
                          <div className="mt-3 pt-3 border-t border-slate-200 text-sm">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Customer</p>
                            <div className="flex flex-col gap-1">
                              {o.customer?.phone && <span className="text-slate-700">📞 {o.customer.phone}</span>}
                              {o.customer?.email && <span className="text-slate-700">✉️ {o.customer.email}</span>}
                              {o.customer?.address && <span className="text-slate-700">📍 {o.customer.address}</span>}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Card>

      </div>

      <ResetPasswordDialog
        user={resetUser}
        onClose={() => setResetUser(null)}
        onDone={() => setResetUser(null)}
      />

      <EditSourceDbDialog
        open={editSourceDb}
        restaurant={restaurant}
        onClose={() => setEditSourceDb(false)}
        onSaved={(updated) => { setRestaurant(updated); setEditSourceDb(false); }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Edit Source DB Dialog
// ---------------------------------------------------------------------------

function EditSourceDbDialog({
  open, restaurant, onClose, onSaved,
}: {
  open: boolean;
  restaurant: Restaurant;
  onClose: () => void;
  onSaved: (r: Restaurant) => void;
}) {
  const toast = useToast();
  const [sourceDbUri, setSourceDbUri] = useState('');
  const [sourceDbName, setSourceDbName] = useState(restaurant.sourceDbName ?? '');
  const [sourceOrderCollection, setSourceOrderCollection] = useState(restaurant.sourceOrderCollection ?? '');
  const [sourcePaymentStatusField, setSourcePaymentStatusField] = useState(restaurant.sourcePaymentStatusField ?? '');
  const [sourcePaidValue, setSourcePaidValue] = useState(restaurant.sourcePaidValue ?? '');
  const [sourceOrderNumberField, setSourceOrderNumberField] = useState(restaurant.sourceOrderNumberField ?? '');
  const [sourceOrderTypeField, setSourceOrderTypeField] = useState(restaurant.sourceOrderTypeField ?? '');
  const [sourceItemsField, setSourceItemsField] = useState(restaurant.sourceItemsField ?? '');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setSourceDbUri('');
      setSourceDbName(restaurant.sourceDbName ?? '');
      setSourceOrderCollection(restaurant.sourceOrderCollection ?? '');
      setSourcePaymentStatusField(restaurant.sourcePaymentStatusField ?? '');
      setSourcePaidValue(restaurant.sourcePaidValue ?? '');
      setSourceOrderNumberField(restaurant.sourceOrderNumberField ?? '');
      setSourceOrderTypeField(restaurant.sourceOrderTypeField ?? '');
      setSourceItemsField(restaurant.sourceItemsField ?? '');
    }
  }, [open, restaurant]);

  async function onSave() {
    if (submitting) return;
    setSubmitting(true);
    try {
      const payload: Parameters<typeof api.updateRestaurant>[1] = {
        sourceDbName: sourceDbName.trim(),
        sourceOrderCollection: sourceOrderCollection.trim() || 'orders',
        sourcePaymentStatusField: sourcePaymentStatusField.trim() || 'paymentStatus',
        sourcePaidValue: sourcePaidValue.trim() || 'paid',
        sourceOrderNumberField: sourceOrderNumberField.trim(),
        sourceOrderTypeField: sourceOrderTypeField.trim(),
        sourceItemsField: sourceItemsField.trim(),
      };
      if (sourceDbUri.trim()) payload.sourceDbUri = sourceDbUri.trim();
      const res = await api.updateRestaurant(restaurant.id, payload);
      toast.success('Source DB settings saved');
      onSaved(res.restaurant);
    } catch (err) {
      toast.error('Save failed', err instanceof ApiError ? err.message : 'Could not save settings');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal
      open={open}
      title="Source database settings"
      onClose={onClose}
      footer={
        <>
          <Button variant="ghost" onClick={onClose} disabled={submitting}>Cancel</Button>
          <Button onClick={onSave} loading={submitting}>Save</Button>
        </>
      }
    >
      <div className="flex flex-col gap-4 text-sm">
        <p className="text-slate-500">
          These settings allow the owner app to fetch paid orders from this restaurant&apos;s website
          database. The URI is stored securely and never sent to the mobile app.
        </p>
        <Field label="Source DB URI" htmlFor="edit-sourceDbUri"
          hint={restaurant.hasSourceDb ? 'Leave blank to keep the existing URI.' : 'MongoDB connection string.'}>
          <Input id="edit-sourceDbUri" type="password" value={sourceDbUri}
            onChange={(e) => setSourceDbUri(e.target.value)}
            placeholder={restaurant.hasSourceDb ? '(unchanged)' : 'mongodb+srv://user:pass@cluster.mongodb.net'}
            maxLength={500} />
        </Field>
        <Field label="Database name" htmlFor="edit-sourceDbName">
          <Input id="edit-sourceDbName" value={sourceDbName} onChange={(e) => setSourceDbName(e.target.value)}
            placeholder="onopokebar_production" maxLength={200} />
        </Field>
        <Field label="Orders collection" htmlFor="edit-sourceOrderCollection" hint='Defaults to "orders".'>
          <Input id="edit-sourceOrderCollection" value={sourceOrderCollection}
            onChange={(e) => setSourceOrderCollection(e.target.value)} placeholder="orders" maxLength={200} />
        </Field>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="Payment status field" htmlFor="edit-sourcePaymentStatusField" hint='Defaults to "paymentStatus".'>
            <Input id="edit-sourcePaymentStatusField" value={sourcePaymentStatusField}
              onChange={(e) => setSourcePaymentStatusField(e.target.value)} placeholder="paymentStatus" maxLength={100} />
          </Field>
          <Field label="Paid value" htmlFor="edit-sourcePaidValue" hint='Defaults to "paid".'>
            <Input id="edit-sourcePaidValue" value={sourcePaidValue}
              onChange={(e) => setSourcePaidValue(e.target.value)} placeholder="paid" maxLength={100} />
          </Field>
          <Field label="Order number field" htmlFor="edit-sourceOrderNumberField" hint='Defaults to "orderNumber".'>
            <Input id="edit-sourceOrderNumberField" value={sourceOrderNumberField}
              onChange={(e) => setSourceOrderNumberField(e.target.value)} placeholder="orderNumber" maxLength={100} />
          </Field>
          <Field label="Order type field" htmlFor="edit-sourceOrderTypeField" hint='Defaults to "orderType".'>
            <Input id="edit-sourceOrderTypeField" value={sourceOrderTypeField}
              onChange={(e) => setSourceOrderTypeField(e.target.value)} placeholder="orderType" maxLength={100} />
          </Field>
          <Field label="Items field" htmlFor="edit-sourceItemsField" hint='Defaults to "items".'>
            <Input id="edit-sourceItemsField" value={sourceItemsField}
              onChange={(e) => setSourceItemsField(e.target.value)} placeholder="items" maxLength={100} />
          </Field>
        </div>
      </div>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Reset Password Dialog
// ---------------------------------------------------------------------------

function ResetPasswordDialog({
  user, onClose, onDone,
}: {
  user: RestaurantUser | null;
  onClose: () => void;
  onDone: () => void;
}) {
  const toast = useToast();
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  useEffect(() => { setPassword(''); setDone(null); }, [user?.id]);

  if (!user) return null;

  const passwordError = password.length > 0 && password.length < 8
    ? 'Password must be at least 8 characters' : null;

  async function onSubmit() {
    if (!user || submitting || passwordError || password.length < 8) return;
    setSubmitting(true);
    try {
      await api.resetRestaurantUserPassword(user.id, password);
      setDone(password);
      toast.success('Password reset', `New password set for ${user.email}`);
    } catch (err) {
      toast.error('Reset failed', err instanceof ApiError ? err.message : 'Could not reset password');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal
      open={!!user}
      title={done ? 'Password reset complete' : `Reset password for ${user.name}`}
      onClose={() => { onClose(); setDone(null); setPassword(''); }}
      footer={
        done ? (
          <Button onClick={() => { onDone(); setDone(null); setPassword(''); }}>Done</Button>
        ) : (
          <>
            <Button variant="ghost" onClick={onClose} disabled={submitting}>Cancel</Button>
            <Button onClick={onSubmit} loading={submitting} disabled={password.length < 8 || !!passwordError}>
              Reset password
            </Button>
          </>
        )
      }
    >
      {done ? (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-slate-700">
            The new password for <span className="font-mono">{user.email}</span> is:
          </p>
          <code className="select-all break-all rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 font-mono text-sm text-slate-900">
            {done}
          </code>
          <p className="text-xs text-amber-700">
            Share this with the owner securely. We don&apos;t store the plain text — record it now if you need it.
          </p>
          <Button size="sm" variant="secondary"
            onClick={async () => {
              await navigator.clipboard.writeText(`Email: ${user.email}\nPassword: ${done}`);
              toast.success('Copied to clipboard');
            }}>
            Copy credentials
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-slate-600">
            Set a new password for <span className="font-mono">{user.email}</span>. The old password will stop working immediately.
          </p>
          <Field label="New password" htmlFor="new-password" required error={passwordError || undefined} hint="At least 8 characters.">
            <div className="flex gap-2">
              <Input
                id="new-password" type="text" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters" minLength={8} maxLength={128}
                invalid={!!passwordError} className="flex-1 font-mono" autoFocus
              />
              <Button type="button" variant="secondary" onClick={() => setPassword(generateTempPassword())}>
                Generate
              </Button>
            </div>
          </Field>
        </div>
      )}
    </Modal>
  );
}
