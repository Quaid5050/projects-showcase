export type UserRole = 'super_admin' | 'pharmacy_admin' | 'staff' | 'driver';

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  pharmacyId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  driverProfile?: DriverProfile | null;
}

export interface DriverProfile {
  _id: string;
  userId: string;
  pharmacyId: string;
  name: string;
  phone: string;
  vehicleType: 'bike' | 'car' | 'van' | 'motorcycle';
  vehicleNumber: string;
  isActive: boolean;
  currentLocation?: { lat: number; lng: number; updatedAt: string };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  driverProfile: DriverProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
