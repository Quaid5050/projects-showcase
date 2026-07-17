export const API = {
  // Health
  HEALTH: '/health',

  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ME: '/auth/me',
  LOGOUT: '/auth/logout',

  // Users
  USERS: '/users',
  USER: (id: string) => `/users/${id}`,

  // Pharmacies
  PHARMACIES: '/pharmacies',
  PHARMACY: (id: string) => `/pharmacies/${id}`,

  // Patients
  PATIENTS: '/patients',
  PATIENT: (id: string) => `/patients/${id}`,

  // Drivers
  DRIVERS: '/drivers',
  DRIVER: (id: string) => `/drivers/${id}`,
  MY_DELIVERIES: '/drivers/me/deliveries',

  // Orders
  ORDERS: '/orders',
  ORDER: (id: string) => `/orders/${id}`,
  ORDER_STATUS: (id: string) => `/orders/${id}/status`,
  ORDER_ASSIGN_DRIVER: (id: string) => `/orders/${id}/assign-driver`,
  ORDER_PROOF: (id: string) => `/orders/${id}/proof`,

  // Reports
  REPORTS_SUMMARY: '/reports/summary',
  REPORTS_DRIVER_PERFORMANCE: '/reports/driver-performance',
} as const;
