export type OrderStatus =
  | 'pending'
  | 'assigned'
  | 'picked_up'
  | 'on_the_way'
  | 'delivered'
  | 'failed'
  | 'cancelled';

export type PaymentStatus = 'pending' | 'collected' | 'waived';

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  coordinates?: { lat: number; lng: number };
}

export interface StatusHistoryEntry {
  status: OrderStatus;
  timestamp: string;
  updatedBy: string;
  notes?: string;
}

export interface DeliveryOrder {
  _id: string;
  pharmacyId: string;
  patientId: Patient | string;
  driverId?: Driver | string | null;
  status: OrderStatus;
  pickupAddress: Address;
  deliveryAddress: Address;
  deliveryWindowStart?: string;
  deliveryWindowEnd?: string;
  medicationNotes?: string;
  driverInstructions?: string;
  failedReason?: string;
  isRecurring: boolean;
  codAmount: number;
  paymentStatus: PaymentStatus;
  proofOfDeliveryId?: ProofOfDelivery | string | null;
  trackingToken: string;
  statusHistory: StatusHistoryEntry[];
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  _id: string;
  pharmacyId: string;
  name: string;
  phone: string;
  email?: string;
  address: Address;
  notes?: string;
}

export interface Driver {
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

export interface ProofOfDelivery {
  _id: string;
  orderId: string;
  type: 'photo' | 'signature';
  imageUrl?: string;
  signedBy?: string;
  latitude?: number;
  longitude?: number;
  timestamp: string;
  notes?: string;
  createdAt: string;
}

export interface CreateOrderInput {
  patientId?: string;
  patient?: {
    name: string;
    phone: string;
    email?: string;
    address: Address;
    notes?: string;
  };
  pickupAddress: Address;
  deliveryAddress: Address;
  deliveryWindowStart?: string;
  deliveryWindowEnd?: string;
  medicationNotes?: string;
  driverInstructions?: string;
  codAmount?: number;
  isRecurring?: boolean;
}
