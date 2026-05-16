import { clearStoredToken, getStoredToken } from './auth';
import type {
  CreateRestaurantResponse,
  LoginResponse,
  Order,
  Restaurant,
  RestaurantDetailsResponse,
  RestaurantUser,
} from './types';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:4000';

export class ApiError extends Error {
  status: number;
  details?: unknown;
  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: unknown;
  auth?: boolean;
  signal?: AbortSignal;
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, auth = true, signal } = options;

  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  if (auth) {
    const token = getStoredToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Network error';
    throw new ApiError(`Cannot reach API server: ${message}`, 0);
  }

  // Try to parse JSON; some errors may not have a body.
  let payload: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      // non-JSON response
    }
  }

  if (!response.ok) {
    // Auto-logout on auth failures.
    if (response.status === 401 && typeof window !== 'undefined') {
      clearStoredToken();
      if (!window.location.pathname.startsWith('/login')) {
        window.location.replace('/login');
      }
    }
    const message =
      (payload && typeof payload === 'object' && 'message' in payload
        ? String((payload as { message: unknown }).message)
        : null) || `Request failed with status ${response.status}`;
    const details =
      payload && typeof payload === 'object' && 'details' in payload
        ? (payload as { details: unknown }).details
        : undefined;
    throw new ApiError(message, response.status, details);
  }

  // Unwrap { success: true, data: ... } envelope when present.
  if (payload && typeof payload === 'object' && 'data' in payload) {
    return (payload as { data: T }).data;
  }
  return payload as T;
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    request<LoginResponse>('/api/admin/login', {
      method: 'POST',
      body: { email, password },
      auth: false,
    }),

  // Restaurants
  listRestaurants: () => request<{ restaurants: Restaurant[] }>('/api/admin/restaurants'),
  getRestaurant: (id: string) =>
    request<RestaurantDetailsResponse>(`/api/admin/restaurants/${id}`),
  getRestaurantOrders: (id: string, limit = 50) =>
    request<{ orders: Order[]; source: 'sourceDb' | 'centralDb' }>(
      `/api/admin/restaurants/${id}/orders?limit=${limit}`
    ),
  createRestaurant: (input: {
    name: string;
    restaurantKey?: string;
    domain?: string;
    isActive?: boolean;
    sourceDbUri?: string;
    sourceDbName?: string;
    sourceOrderCollection?: string;
    sourcePaymentStatusField?: string;
    sourcePaidValue?: string;
    sourceOrderNumberField?: string;
    sourceOrderTypeField?: string;
    sourceItemsField?: string;
  }) =>
    request<CreateRestaurantResponse>('/api/admin/restaurants', {
      method: 'POST',
      body: input,
    }),
  updateRestaurant: (
    id: string,
    input: {
      name?: string;
      domain?: string;
      isActive?: boolean;
      regenerateIntegrationApiKey?: boolean;
      sourceDbUri?: string;
      sourceDbName?: string;
      sourceOrderCollection?: string;
      sourcePaymentStatusField?: string;
      sourcePaidValue?: string;
      sourceOrderNumberField?: string;
      sourceOrderTypeField?: string;
      sourceItemsField?: string;
    }
  ) =>
    request<{ restaurant: Restaurant; integrationApiKey?: string }>(
      `/api/admin/restaurants/${id}`,
      { method: 'PATCH', body: input }
    ),

  // Restaurant users (owners)
  createRestaurantUser: (input: {
    restaurantId: string;
    name: string;
    email: string;
    password: string;
  }) =>
    request<{ user: RestaurantUser }>('/api/admin/restaurant-users', {
      method: 'POST',
      body: input,
    }),
  updateRestaurantUser: (
    id: string,
    input: { name?: string; email?: string; isActive?: boolean }
  ) =>
    request<{ user: RestaurantUser }>(`/api/admin/restaurant-users/${id}`, {
      method: 'PATCH',
      body: input,
    }),
  resetRestaurantUserPassword: (id: string, newPassword: string) =>
    request<{ ok: boolean }>(`/api/admin/restaurant-users/${id}/reset-password`, {
      method: 'POST',
      body: { newPassword },
    }),
};

export { API_BASE_URL };
