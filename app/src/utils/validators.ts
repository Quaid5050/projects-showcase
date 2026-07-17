import { z } from 'zod';

// ─── Shared address schema ────────────────────────────────────────────────────
export const addressSchema = z.object({
  street: z.string().min(3, 'Street is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z.string().min(4, 'ZIP code is required'),
});

// ─── Login ────────────────────────────────────────────────────────────────────
export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

// ─── Create Order ─────────────────────────────────────────────────────────────
export const createOrderSchema = z.object({
  patientName: z.string().min(2, 'Patient name is required'),
  patientPhone: z.string().min(7, 'Phone is required'),
  patientEmail: z
    .string()
    .email('Invalid email')
    .optional()
    .or(z.literal('')),
  deliveryAddress: addressSchema,
  pickupAddress: addressSchema,
  medicationNotes: z.string().optional(),
  driverInstructions: z.string().optional(),
  codAmount: z.number().min(0).default(0),
  deliveryWindowStart: z.string().optional(),
  deliveryWindowEnd: z.string().optional(),
});

// ─── Create Driver ────────────────────────────────────────────────────────────
export const createDriverSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Phone is required'),
  vehicleType: z.enum(['car', 'bike', 'van', 'motorcycle']),
  vehicleNumber: z.string().min(2, 'Vehicle number is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// ─── Proof of Delivery ────────────────────────────────────────────────────────
export const proofSchema = z.object({
  signedBy: z.string().optional(),
  notes: z.string().optional(),
  codCollected: z.string().optional(),
});
