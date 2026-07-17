export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface ReportSummary {
  range: string;
  total: number;
  delivered: number;
  failed: number;
  pending: number;
  inProgress: number;
  successRate: number;
  failedRate: number;
}

export interface DriverPerformance {
  driverId: string;
  driverName: string;
  vehicleType: string;
  isActive: boolean;
  total: number;
  delivered: number;
  failed: number;
  successRate: number;
}
