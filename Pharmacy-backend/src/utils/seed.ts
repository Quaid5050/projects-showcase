/**
 * Demo database seeder — idempotent local testing data for PharmaDeliver.
 *
 * Run: npm run seed
 *
 * Clears and recreates demo orders/patients/proofs/drivers for the demo pharmacy only.
 * Upserts demo user accounts (passwords reset to documented demo values).
 */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

import { connectDB } from '../config/db';
import { Pharmacy } from '../models/Pharmacy';
import { User } from '../models/User';
import { Driver } from '../models/Driver';
import { Patient } from '../models/Patient';
import { DeliveryOrder, OrderStatus, PaymentStatus } from '../models/DeliveryOrder';
import { ProofOfDelivery } from '../models/ProofOfDelivery';
import { generateTrackingToken } from './generateToken';

// ─── Demo identifiers ────────────────────────────────────────────────────────

const DEMO_PHARMACY_NAME = 'Demo Care Pharmacy';
const DEMO_PHARMACY_EMAIL = 'info@democarepharmacy.com';
const LEGACY_PHARMACY_NAME = 'Demo Pharmacy';

const PHARMACY_PICKUP = {
  street: '221B Baker Street',
  city: 'London',
  state: 'Greater London',
  zip: 'NW1 6XE',
  coordinates: { lat: 51.5237, lng: -0.1585 },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const log = (msg: string) => console.log(msg);

const hashPassword = (password: string) => bcrypt.hash(password, 12);

const minutesAgo = (mins: number): Date => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - mins);
  return d;
};

const todayWindow = (startHour: number, endHour: number) => {
  const start = new Date();
  start.setHours(startHour, 0, 0, 0);
  const end = new Date();
  end.setHours(endHour, 0, 0, 0);
  return { start, end };
};

const tomorrowWindow = (startHour: number, endHour: number) => {
  const start = new Date();
  start.setDate(start.getDate() + 1);
  start.setHours(startHour, 0, 0, 0);
  const end = new Date();
  end.setDate(end.getDate() + 1);
  end.setHours(endHour, 0, 0, 0);
  return { start, end };
};

async function upsertUser(data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'pharmacy_admin' | 'staff' | 'driver';
  pharmacyId: mongoose.Types.ObjectId;
}) {
  const passwordHash = await hashPassword(data.password);
  const user = await User.findOneAndUpdate(
    { email: data.email.toLowerCase() },
    {
      name: data.name,
      email: data.email.toLowerCase(),
      phone: data.phone,
      passwordHash,
      role: data.role,
      pharmacyId: data.pharmacyId,
      isActive: true,
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  log(`  ✓ User: ${data.email} (${data.role})`);
  return user;
}

async function clearDemoTransactionalData(pharmacyId: mongoose.Types.ObjectId) {
  log('\nClearing existing demo orders, patients, proofs, and driver profiles...');

  const orderIds = await DeliveryOrder.find({ pharmacyId }).distinct('_id');
  if (orderIds.length > 0) {
    await ProofOfDelivery.deleteMany({ orderId: { $in: orderIds } });
    await DeliveryOrder.deleteMany({ pharmacyId });
  }
  await Patient.deleteMany({ pharmacyId });
  await Driver.deleteMany({ pharmacyId });

  log(`  ✓ Cleared transactional demo data for pharmacy ${pharmacyId.toString()}`);
}

function buildStatusHistory(
  steps: Array<{ status: OrderStatus; minutesAgo: number; notes?: string }>,
  updatedBy: mongoose.Types.ObjectId
) {
  return steps.map((s) => ({
    status: s.status,
    timestamp: minutesAgo(s.minutesAgo),
    updatedBy,
    notes: s.notes,
  }));
}

async function ensureDemoProofPlaceholder() {
  const uploadDir = process.env.UPLOAD_DIR || 'uploads';
  const proofPath = path.join(process.cwd(), uploadDir, 'demo-proof.jpg');
  if (!fs.existsSync(proofPath)) {
    fs.mkdirSync(path.dirname(proofPath), { recursive: true });
    // Minimal valid 1×1 JPEG so /uploads/demo-proof.jpg resolves locally
    const minimalJpeg = Buffer.from(
      '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//AP//Z',
      'base64'
    );
    fs.writeFileSync(proofPath, minimalJpeg);
    log('  ✓ Created uploads/demo-proof.jpg placeholder');
  }
}

// ─── Main seed ───────────────────────────────────────────────────────────────

const seed = async (): Promise<void> => {
  await connectDB();
  log('🌱 Seeding demo data for local testing...\n');

  // 1. Pharmacy — migrate legacy name if present
  let pharmacy = await Pharmacy.findOne({ email: DEMO_PHARMACY_EMAIL });
  if (!pharmacy) {
    pharmacy = await Pharmacy.findOne({ name: { $in: [DEMO_PHARMACY_NAME, LEGACY_PHARMACY_NAME] } });
  }

  if (pharmacy) {
    pharmacy.name = DEMO_PHARMACY_NAME;
    pharmacy.email = DEMO_PHARMACY_EMAIL;
    pharmacy.phone = '+44 20 7946 0100';
    pharmacy.address = PHARMACY_PICKUP;
    pharmacy.operatingHours = { open: '08:00', close: '20:00' };
    await pharmacy.save();
    log('✓ Demo pharmacy updated: Demo Care Pharmacy');
  } else {
    pharmacy = await Pharmacy.create({
      name: DEMO_PHARMACY_NAME,
      email: DEMO_PHARMACY_EMAIL,
      phone: '+44 20 7946 0100',
      address: PHARMACY_PICKUP,
      operatingHours: { open: '08:00', close: '20:00' },
      settings: { defaultDeliveryRadius: 20 },
    });
    log('✓ Demo pharmacy created: Demo Care Pharmacy');
  }

  const pharmacyId = pharmacy._id;

  // 2. Clear demo transactional data (orders/patients/proofs/drivers only)
  await clearDemoTransactionalData(pharmacyId);
  await ensureDemoProofPlaceholder();

  // 3. Demo users
  log('\nUpserting demo users...');
  const admin = await upsertUser({
    name: 'Demo Admin',
    email: 'admin@demopharmacy.com',
    phone: '+44 20 7946 0101',
    password: 'Admin123!',
    role: 'pharmacy_admin',
    pharmacyId,
  });

  await upsertUser({
    name: 'Demo Staff',
    email: 'staff@demopharmacy.com',
    phone: '+44 20 7946 0102',
    password: 'Staff123!',
    role: 'staff',
    pharmacyId,
  });

  const aliUser = await upsertUser({
    name: 'Ali Khan',
    email: 'ali.driver@demopharmacy.com',
    phone: '+44 7700 900101',
    password: 'Driver123!',
    role: 'driver',
    pharmacyId,
  });

  const saraUser = await upsertUser({
    name: 'Sara Ahmed',
    email: 'sara.driver@demopharmacy.com',
    phone: '+44 7700 900102',
    password: 'Driver123!',
    role: 'driver',
    pharmacyId,
  });

  const johnUser = await upsertUser({
    name: 'John Smith',
    email: 'john.driver@demopharmacy.com',
    phone: '+44 7700 900103',
    password: 'Driver123!',
    role: 'driver',
    pharmacyId,
  });

  // 4. Driver profiles
  log('\nCreating driver profiles...');
  const aliDriver = await Driver.create({
    userId: aliUser._id,
    pharmacyId,
    name: 'Ali Khan',
    phone: '+44 7700 900101',
    vehicleType: 'bike',
    vehicleNumber: 'BIKE-101',
    isActive: true,
    currentLocation: { lat: 51.515, lng: -0.14, updatedAt: new Date() },
  });

  const saraDriver = await Driver.create({
    userId: saraUser._id,
    pharmacyId,
    name: 'Sara Ahmed',
    phone: '+44 7700 900102',
    vehicleType: 'car',
    vehicleNumber: 'CAR-102',
    isActive: true,
    currentLocation: { lat: 51.507, lng: -0.127, updatedAt: new Date() },
  });

  const johnDriver = await Driver.create({
    userId: johnUser._id,
    pharmacyId,
    name: 'John Smith',
    phone: '+44 7700 900103',
    vehicleType: 'van',
    vehicleNumber: 'VAN-103',
    isActive: true,
    currentLocation: { lat: 51.52, lng: -0.11, updatedAt: new Date() },
  });

  log('  ✓ 3 driver profiles created');

  // 5. Patients
  log('\nCreating patients...');
  const patientDefs = [
    {
      name: 'Mary Johnson',
      phone: '+44 7700 900201',
      email: 'mary.johnson@example.com',
      address: { street: '10 Downing Street', city: 'London', state: 'Greater London', zip: 'SW1A 2AA', coordinates: { lat: 51.5034, lng: -0.1276 } },
      notes: 'Ring doorbell twice. Leave with neighbour if not home.',
    },
    {
      name: 'Ahmed Rahman',
      phone: '+44 7700 900202',
      email: 'ahmed.rahman@example.com',
      address: { street: '42 Brick Lane', city: 'London', state: 'Greater London', zip: 'E1 6RF', coordinates: { lat: 51.5194, lng: -0.0719 } },
      notes: 'Call before arrival.',
    },
    {
      name: 'Elizabeth Brown',
      phone: '+44 7700 900203',
      email: 'elizabeth.brown@example.com',
      address: { street: '15 Kensington High Street', city: 'London', state: 'Greater London', zip: 'W8 5NP', coordinates: { lat: 51.502, lng: -0.192 } },
      notes: 'Fragile — handle with care.',
    },
    {
      name: 'David Wilson',
      phone: '+44 7700 900204',
      email: 'david.wilson@example.com',
      address: { street: '88 Camden High Street', city: 'London', state: 'Greater London', zip: 'NW1 0LT', coordinates: { lat: 51.539, lng: -0.143 } },
      notes: 'Gate code: 4455',
    },
    {
      name: 'Fatima Hussain',
      phone: '+44 7700 900205',
      email: 'fatima.hussain@example.com',
      address: { street: '3 Whitechapel Road', city: 'London', state: 'Greater London', zip: 'E1 1DU', coordinates: { lat: 51.516, lng: -0.066 } },
      notes: 'Deliver to reception desk.',
    },
    {
      name: 'George Taylor',
      phone: '+44 7700 900206',
      email: 'george.taylor@example.com',
      address: { street: '27 Oxford Street', city: 'London', state: 'Greater London', zip: 'W1D 2HH', coordinates: { lat: 51.5154, lng: -0.141 } },
      notes: 'Elderly patient — allow extra time.',
    },
    {
      name: 'Aisha Patel',
      phone: '+44 7700 900207',
      email: 'aisha.patel@example.com',
      address: { street: '5 Greenwich High Road', city: 'London', state: 'Greater London', zip: 'SE10 8NN', coordinates: { lat: 51.482, lng: -0.007 } },
      notes: 'Signature required.',
    },
    {
      name: 'Michael Evans',
      phone: '+44 7700 900208',
      email: 'michael.evans@example.com',
      address: { street: '19 Clapham High Street', city: 'London', state: 'Greater London', zip: 'SW4 7TS', coordinates: { lat: 51.463, lng: -0.138 } },
      notes: 'Park on side street.',
    },
    {
      name: 'Sophia Clark',
      phone: '+44 7700 900209',
      email: 'sophia.clark@example.com',
      address: { street: '12 Richmond Road', city: 'London', state: 'Greater London', zip: 'TW9 2TN', coordinates: { lat: 51.461, lng: -0.303 } },
      notes: 'Dog in garden — use front door.',
    },
    {
      name: 'Robert Walker',
      phone: '+44 7700 900210',
      email: 'robert.walker@example.com',
      address: { street: '7 Brixton Road', city: 'London', state: 'Greater London', zip: 'SW9 6DE', coordinates: { lat: 51.462, lng: -0.115 } },
      notes: 'Contactless delivery preferred.',
    },
  ];

  const patients = await Patient.insertMany(
    patientDefs.map((p) => ({ ...p, pharmacyId }))
  );
  log(`  ✓ ${patients.length} patients created`);

  const p = (index: number) => patients[index];

  // 6. Delivery orders (15 total — mixed statuses for dashboard & reports)
  log('\nCreating delivery orders...');

  type OrderDef = {
    patientIndex: number;
    status: OrderStatus;
    driver?: typeof aliDriver;
    codAmount: number;
    paymentStatus: PaymentStatus;
    medicationNotes: string;
    driverInstructions: string;
    window: { start: Date; end: Date };
    createdMinutesAgo: number;
    history: Array<{ status: OrderStatus; minutesAgo: number; notes?: string }>;
    failedReason?: string;
    isRecurring?: boolean;
  };

  const orderDefs: OrderDef[] = [
    // 3 pending
    { patientIndex: 0, status: 'pending', codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Amoxicillin 500mg', driverInstructions: 'Standard delivery', window: todayWindow(14, 16), createdMinutesAgo: 45, history: [{ status: 'pending', minutesAgo: 45 }] },
    { patientIndex: 1, status: 'pending', codAmount: 12.5, paymentStatus: 'pending', medicationNotes: 'Metformin 850mg', driverInstructions: 'Collect COD', window: todayWindow(16, 18), createdMinutesAgo: 30, history: [{ status: 'pending', minutesAgo: 30 }] },
    { patientIndex: 2, status: 'pending', codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Insulin pens x2', driverInstructions: 'Keep refrigerated', window: tomorrowWindow(9, 11), createdMinutesAgo: 20, history: [{ status: 'pending', minutesAgo: 20 }], isRecurring: true },

    // 3 assigned
    { patientIndex: 3, status: 'assigned', driver: aliDriver, codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Blood pressure tablets', driverInstructions: 'Call on arrival', window: todayWindow(13, 15), createdMinutesAgo: 180, history: [{ status: 'pending', minutesAgo: 180 }, { status: 'assigned', minutesAgo: 120 }] },
    { patientIndex: 4, status: 'assigned', driver: saraDriver, codAmount: 8.99, paymentStatus: 'pending', medicationNotes: 'Antihistamine syrup', driverInstructions: 'Reception delivery', window: todayWindow(15, 17), createdMinutesAgo: 150, history: [{ status: 'pending', minutesAgo: 150 }, { status: 'assigned', minutesAgo: 90 }] },
    { patientIndex: 5, status: 'assigned', driver: johnDriver, codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Vitamin D supplements', driverInstructions: 'Allow extra time', window: todayWindow(17, 19), createdMinutesAgo: 120, history: [{ status: 'pending', minutesAgo: 120 }, { status: 'assigned', minutesAgo: 60 }] },

    // 2 picked_up
    { patientIndex: 6, status: 'picked_up', driver: aliDriver, codAmount: 15, paymentStatus: 'pending', medicationNotes: 'Pain relief gel', driverInstructions: 'Signature required', window: todayWindow(11, 13), createdMinutesAgo: 240, history: [{ status: 'pending', minutesAgo: 240 }, { status: 'assigned', minutesAgo: 200 }, { status: 'picked_up', minutesAgo: 45 }] },
    { patientIndex: 7, status: 'picked_up', driver: saraDriver, codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Eye drops', driverInstructions: 'Park on side street', window: todayWindow(12, 14), createdMinutesAgo: 210, history: [{ status: 'pending', minutesAgo: 210 }, { status: 'assigned', minutesAgo: 170 }, { status: 'picked_up', minutesAgo: 35 }] },

    // 2 on_the_way
    { patientIndex: 8, status: 'on_the_way', driver: johnDriver, codAmount: 22, paymentStatus: 'pending', medicationNotes: 'Antibiotics course', driverInstructions: 'Use front door', window: todayWindow(10, 12), createdMinutesAgo: 300, history: [{ status: 'pending', minutesAgo: 300 }, { status: 'assigned', minutesAgo: 260 }, { status: 'picked_up', minutesAgo: 90 }, { status: 'on_the_way', minutesAgo: 25 }] },
    { patientIndex: 9, status: 'on_the_way', driver: aliDriver, codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Asthma inhaler', driverInstructions: 'Contactless preferred', window: todayWindow(11, 13), createdMinutesAgo: 280, history: [{ status: 'pending', minutesAgo: 280 }, { status: 'assigned', minutesAgo: 240 }, { status: 'picked_up', minutesAgo: 70 }, { status: 'on_the_way', minutesAgo: 15 }] },

    // 3 delivered (Ali high performer ×2, Sara ×1)
    { patientIndex: 0, status: 'delivered', driver: aliDriver, codAmount: 18.5, paymentStatus: 'collected', medicationNotes: 'Paracetamol 500mg', driverInstructions: 'Delivered to patient', window: todayWindow(9, 11), createdMinutesAgo: 480, history: [{ status: 'pending', minutesAgo: 480 }, { status: 'assigned', minutesAgo: 450 }, { status: 'picked_up', minutesAgo: 400 }, { status: 'on_the_way', minutesAgo: 360 }, { status: 'delivered', minutesAgo: 300, notes: 'COD collected' }] },
    { patientIndex: 1, status: 'delivered', driver: aliDriver, codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Thyroid medication', driverInstructions: 'Left with neighbour', window: todayWindow(8, 10), createdMinutesAgo: 520, history: [{ status: 'pending', minutesAgo: 520 }, { status: 'assigned', minutesAgo: 490 }, { status: 'picked_up', minutesAgo: 440 }, { status: 'on_the_way', minutesAgo: 400 }, { status: 'delivered', minutesAgo: 350 }] },
    { patientIndex: 2, status: 'delivered', driver: saraDriver, codAmount: 9.99, paymentStatus: 'collected', medicationNotes: 'Cough syrup', driverInstructions: 'Photo proof taken', window: todayWindow(7, 9), createdMinutesAgo: 560, history: [{ status: 'pending', minutesAgo: 560 }, { status: 'assigned', minutesAgo: 530 }, { status: 'picked_up', minutesAgo: 500 }, { status: 'on_the_way', minutesAgo: 470 }, { status: 'delivered', minutesAgo: 420 }] },

    // 2 failed (Sara ×1, John ×1)
    { patientIndex: 3, status: 'failed', driver: saraDriver, codAmount: 0, paymentStatus: 'waived', medicationNotes: 'Skin cream', driverInstructions: 'Attempted twice', window: todayWindow(6, 8), createdMinutesAgo: 600, failedReason: 'Patient not home', history: [{ status: 'pending', minutesAgo: 600 }, { status: 'assigned', minutesAgo: 570 }, { status: 'picked_up', minutesAgo: 540 }, { status: 'on_the_way', minutesAgo: 510 }, { status: 'failed', minutesAgo: 480, notes: 'Patient not home after 2 attempts' }] },
    { patientIndex: 4, status: 'failed', driver: johnDriver, codAmount: 14, paymentStatus: 'pending', medicationNotes: 'Antibiotic cream', driverInstructions: 'Verify address', window: todayWindow(5, 7), createdMinutesAgo: 640, failedReason: 'Wrong address', history: [{ status: 'pending', minutesAgo: 640 }, { status: 'assigned', minutesAgo: 610 }, { status: 'picked_up', minutesAgo: 580 }, { status: 'on_the_way', minutesAgo: 550 }, { status: 'failed', minutesAgo: 520, notes: 'Address did not match patient record' }] },
  ];

  const createdOrders: Array<{ order: typeof DeliveryOrder.prototype; def: OrderDef }> = [];

  for (const def of orderDefs) {
    const patient = p(def.patientIndex);
    const createdAt = minutesAgo(def.createdMinutesAgo);
    const updatedAt = minutesAgo(def.history[0]?.minutesAgo ?? def.createdMinutesAgo);

    const order = await DeliveryOrder.create({
      pharmacyId,
      patientId: patient._id,
      driverId: def.driver?._id,
      status: def.status,
      pickupAddress: PHARMACY_PICKUP,
      deliveryAddress: patient.address,
      deliveryWindowStart: def.window.start,
      deliveryWindowEnd: def.window.end,
      medicationNotes: def.medicationNotes,
      driverInstructions: def.driverInstructions,
      failedReason: def.failedReason,
      isRecurring: def.isRecurring ?? false,
      codAmount: def.codAmount,
      paymentStatus: def.paymentStatus,
      trackingToken: generateTrackingToken(),
      statusHistory: buildStatusHistory(def.history, admin._id),
      createdAt,
      updatedAt,
    });

    createdOrders.push({ order, def });
  }

  log(`  ✓ ${createdOrders.length} delivery orders created`);

  // 7. Proof of delivery for delivered orders
  log('\nCreating proof-of-delivery records...');
  let proofCount = 0;

  for (const { order, def } of createdOrders) {
    if (def.status !== 'delivered' || !def.driver) continue;

    const patient = p(def.patientIndex);
    const proof = await ProofOfDelivery.create({
      orderId: order._id,
      type: 'photo',
      imageUrl: '/uploads/demo-proof.jpg',
      signedBy: patient.name,
      latitude: patient.address.coordinates?.lat ?? 51.5074,
      longitude: patient.address.coordinates?.lng ?? -0.1278,
      timestamp: minutesAgo(def.history.find((h) => h.status === 'delivered')?.minutesAgo ?? 300),
      notes: def.codAmount > 0 ? `COD £${def.codAmount.toFixed(2)} collected` : 'Delivered successfully',
    });

    order.proofOfDeliveryId = proof._id;
    await order.save();
    proofCount++;
  }

  log(`  ✓ ${proofCount} proof-of-delivery records created`);

  // Summary
  log('\n══════════════════════════════════════════════════════════');
  log('✅ Demo seed complete');
  log('══════════════════════════════════════════════════════════');
  log('\nPharmacy: Demo Care Pharmacy (221B Baker Street, London)');
  log(`Patients: ${patients.length}`);
  log(`Orders: ${createdOrders.length} (3 pending, 3 assigned, 2 picked_up, 2 on_the_way, 3 delivered, 2 failed)`);
  log(`Drivers: Ali Khan (high performer), Sara Ahmed (has failed), John Smith (active deliveries)`);
  log('\n── Demo login credentials ──');
  log('Admin:  admin@demopharmacy.com  /  Admin123!');
  log('Staff:  staff@demopharmacy.com  /  Staff123!');
  log('Driver: ali.driver@demopharmacy.com  /  Driver123!  (Ali Khan — bike)');
  log('Driver: sara.driver@demopharmacy.com /  Driver123!  (Sara Ahmed — car)');
  log('Driver: john.driver@demopharmacy.com /  Driver123!  (John Smith — van)');
  log('\nRe-run `npm run seed` anytime to reset demo orders/patients while keeping accounts.');
  log('Only demo pharmacy data (@demopharmacy.com) is affected.\n');

  await mongoose.disconnect();
};

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
