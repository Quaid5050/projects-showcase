/**
 * Re-exports from order.types to avoid duplicating the Driver interface.
 * Use imports from this file when working with driver-specific code.
 */
export type { Driver } from './order.types';

export type VehicleType = 'bike' | 'car' | 'van' | 'motorcycle';

export interface CreateDriverInput {
  name: string;
  email: string;
  phone: string;
  vehicleType: VehicleType;
  vehicleNumber: string;
  password: string;
}
