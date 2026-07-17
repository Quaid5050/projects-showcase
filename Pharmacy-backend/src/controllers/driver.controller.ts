import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { Driver } from '../models/Driver';
import { User } from '../models/User';
import { DeliveryOrder } from '../models/DeliveryOrder';
import { sendSuccess, sendError } from '../utils/response';

const isValidObjectId = (id: string): boolean => mongoose.Types.ObjectId.isValid(id);

export const getDrivers = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId || req.query.pharmacyId;
    const filter: Record<string, unknown> = {};
    if (pharmacyId) filter.pharmacyId = pharmacyId;
    if (req.query.isActive !== undefined) filter.isActive = req.query.isActive === 'true';

    const drivers = await Driver.find(filter).sort({ name: 1 });
    sendSuccess(res, { drivers, total: drivers.length });
  } catch (error) {
    console.error('[getDrivers]', error);
    sendError(res, 'Failed to fetch drivers', 500);
  }
};

export const createDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, vehicleType, vehicleNumber, password } = req.body;
    const pharmacyId = req.user?.pharmacyId || req.body.pharmacyId;

    // Create the user account for the driver
    const passwordHash = await bcrypt.hash(password || 'TempPass123!', 12);
    const user = await User.create({
      name,
      email,
      phone,
      passwordHash,
      role: 'driver',
      pharmacyId,
    });

    // Create the driver profile
    const driver = await Driver.create({
      userId: user._id,
      pharmacyId,
      name,
      phone,
      vehicleType,
      vehicleNumber,
    });

    sendSuccess(res, { driver, user }, 'Driver created', 201);
  } catch (error: unknown) {
    console.error('[createDriver]', error);
    if ((error as { code?: number }).code === 11000) {
      sendError(res, 'Email already in use', 409);
      return;
    }
    sendError(res, 'Failed to create driver', 500);
  }
};

export const getDriverById = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid driver ID', 400);
      return;
    }
    const driver = await Driver.findById(req.params.id).populate('userId', '-passwordHash');
    if (!driver) {
      sendError(res, 'Driver not found', 404);
      return;
    }
    sendSuccess(res, { driver });
  } catch (error) {
    console.error('[getDriverById]', error);
    sendError(res, 'Failed to fetch driver', 500);
  }
};

export const updateDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid driver ID', 400);
      return;
    }
    // If the caller is a driver, they may only update their own profile
    if (req.user?.role === 'driver') {
      const self = await Driver.findOne({ userId: req.user.userId });
      if (!self || (self._id as unknown as string).toString() !== req.params.id) {
        sendError(res, 'Forbidden: you can only update your own profile', 403);
        return;
      }
    }
    const allowed = ['name', 'phone', 'vehicleType', 'vehicleNumber', 'isActive', 'currentLocation'];
    const updateData: Record<string, unknown> = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) updateData[key] = req.body[key];
    }

    // If updating location, add updatedAt
    if (updateData.currentLocation) {
      (updateData.currentLocation as Record<string, unknown>).updatedAt = new Date();
    }

    const driver = await Driver.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!driver) {
      sendError(res, 'Driver not found', 404);
      return;
    }
    sendSuccess(res, { driver }, 'Driver updated');
  } catch (error) {
    console.error('[updateDriver]', error);
    sendError(res, 'Failed to update driver', 500);
  }
};

/**
 * GET /api/drivers/me/deliveries
 * Returns deliveries assigned to the currently logged-in driver.
 */
export const getMyDeliveries = async (req: Request, res: Response): Promise<void> => {
  try {
    const driver = await Driver.findOne({ userId: req.user?.userId });
    if (!driver) {
      sendError(res, 'Driver profile not found', 404);
      return;
    }

    const { status } = req.query;
    const filter: Record<string, unknown> = { driverId: driver._id };

    if (status) {
      filter.status = status;
    } else {
      // Default: active deliveries
      filter.status = { $in: ['assigned', 'picked_up', 'on_the_way'] };
    }

    const deliveries = await DeliveryOrder.find(filter)
      .populate('patientId', 'name phone address')
      .sort({ deliveryWindowStart: 1 });

    sendSuccess(res, { deliveries, total: deliveries.length });
  } catch (error) {
    console.error('[getMyDeliveries]', error);
    sendError(res, 'Failed to fetch deliveries', 500);
  }
};
