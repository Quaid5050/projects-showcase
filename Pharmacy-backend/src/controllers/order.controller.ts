import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { DeliveryOrder, OrderStatus } from '../models/DeliveryOrder';
import { Driver } from '../models/Driver';
import { Patient } from '../models/Patient';
import { generateTrackingToken } from '../utils/generateToken';
import { sendSuccess, sendError } from '../utils/response';

// Valid status transitions map
const VALID_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending: ['assigned', 'cancelled'],
  assigned: ['picked_up', 'cancelled'],
  picked_up: ['on_the_way', 'cancelled'],
  on_the_way: ['delivered', 'failed', 'cancelled'],
  delivered: [],
  failed: [],
  cancelled: [],
};

/** Validates a MongoDB ObjectId, returns false if invalid */
const isValidObjectId = (id: string): boolean => mongoose.Types.ObjectId.isValid(id);

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId || req.query.pharmacyId;
    const filter: Record<string, unknown> = {};

    if (pharmacyId) filter.pharmacyId = pharmacyId;
    if (req.query.status) filter.status = req.query.status;
    if (req.query.driverId) filter.driverId = req.query.driverId;

    // Date range filter
    if (req.query.dateFrom || req.query.dateTo) {
      const dateFilter: Record<string, Date> = {};
      if (req.query.dateFrom) dateFilter.$gte = new Date(req.query.dateFrom as string);
      if (req.query.dateTo) dateFilter.$lte = new Date(req.query.dateTo as string);
      filter.createdAt = dateFilter;
    }

    const page = parseInt(req.query.page as string) || 1;
    // Cap limit at 100 to prevent large unbounded queries
    const limit = Math.min(parseInt(req.query.limit as string) || 20, 100);
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
      DeliveryOrder.find(filter)
        .populate('patientId', 'name phone')
        .populate('driverId', 'name phone vehicleType')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      DeliveryOrder.countDocuments(filter),
    ]);

    sendSuccess(res, { orders, total, page, limit, pages: Math.ceil(total / limit) });
  } catch (error) {
    console.error('[getOrders]', error);
    sendError(res, 'Failed to fetch orders', 500);
  }
};

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId || req.body.pharmacyId;
    if (!pharmacyId) {
      sendError(res, 'pharmacyId is required', 400);
      return;
    }

    const trackingToken = generateTrackingToken();

    // If the request includes an inline patient object (no existing patientId),
    // create the patient record first then link it to the order.
    let patientId = req.body.patientId;
    if (!patientId && req.body.patient) {
      const { patient } = req.body;
      if (!patient.name || !patient.phone || !patient.address) {
        sendError(res, 'Patient name, phone and address are required', 400);
        return;
      }
      const newPatient = await Patient.create({ ...patient, pharmacyId });
      patientId = newPatient._id;
    }

    if (!patientId) {
      sendError(res, 'Either patientId or patient object is required', 400);
      return;
    }

    // Build the order payload — exclude the inline patient object
    const { patient: _patient, ...orderBody } = req.body;

    const order = await DeliveryOrder.create({
      ...orderBody,
      patientId,
      pharmacyId,
      trackingToken,
      status: 'pending',
      statusHistory: [
        {
          status: 'pending',
          timestamp: new Date(),
          updatedBy: req.user?.userId,
        },
      ],
    });

    const populated = await order.populate([
      { path: 'patientId', select: 'name phone address' },
    ]);

    sendSuccess(res, { order: populated }, 'Order created', 201);
  } catch (error) {
    console.error('[createOrder]', error);
    sendError(res, 'Failed to create order', 500);
  }
};

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid order ID', 400);
      return;
    }
    const order = await DeliveryOrder.findById(req.params.id)
      .populate('patientId')
      .populate('driverId', 'name phone vehicleType vehicleNumber')
      .populate('proofOfDeliveryId');

    if (!order) {
      sendError(res, 'Order not found', 404);
      return;
    }
    sendSuccess(res, { order });
  } catch (error) {
    console.error('[getOrderById]', error);
    sendError(res, 'Failed to fetch order', 500);
  }
};

export const updateOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid order ID', 400);
      return;
    }
    const order = await DeliveryOrder.findById(req.params.id);
    if (!order) {
      sendError(res, 'Order not found', 404);
      return;
    }

    // Restrict edits to pending/assigned orders
    if (!['pending', 'assigned'].includes(order.status)) {
      sendError(res, 'Cannot edit an order that is already in progress', 400);
      return;
    }

    const allowedFields = [
      'deliveryAddress', 'pickupAddress', 'deliveryWindowStart', 'deliveryWindowEnd',
      'medicationNotes', 'driverInstructions', 'codAmount', 'isRecurring',
    ];
    const updateData: Record<string, unknown> = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) updateData[field] = req.body[field];
    }

    const updated = await DeliveryOrder.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate('patientId').populate('driverId', 'name phone');

    sendSuccess(res, { order: updated }, 'Order updated');
  } catch (error) {
    console.error('[updateOrder]', error);
    sendError(res, 'Failed to update order', 500);
  }
};

export const updateOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid order ID', 400);
      return;
    }
    const { status, notes, failedReason } = req.body;
    if (!status) {
      sendError(res, 'status is required', 400);
      return;
    }
    const order = await DeliveryOrder.findById(req.params.id);

    if (!order) {
      sendError(res, 'Order not found', 404);
      return;
    }

    // Validate transition
    const allowed = VALID_TRANSITIONS[order.status];
    if (!allowed.includes(status)) {
      sendError(
        res,
        `Cannot transition from '${order.status}' to '${status}'`,
        400
      );
      return;
    }

    // Drivers can only update orders assigned to them
    if (req.user?.role === 'driver') {
      const driver = await Driver.findOne({ userId: req.user.userId });
      if (!driver || order.driverId?.toString() !== (driver._id as unknown as string).toString()) {
        sendError(res, 'Forbidden: this order is not assigned to you', 403);
        return;
      }
    }

    order.status = status;
    if (failedReason) order.failedReason = failedReason;

    order.statusHistory.push({
      status,
      timestamp: new Date(),
      updatedBy: req.user?.userId as unknown as import('mongoose').Types.ObjectId,
      notes,
    });

    await order.save();

    sendSuccess(res, { order }, `Order status updated to '${status}'`);
  } catch (error) {
    console.error('[updateOrderStatus]', error);
    sendError(res, 'Failed to update order status', 500);
  }
};

export const assignDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid order ID', 400);
      return;
    }
    const { driverId } = req.body;
    if (!driverId || !isValidObjectId(driverId)) {
      sendError(res, 'Valid driverId is required', 400);
      return;
    }
    const order = await DeliveryOrder.findById(req.params.id);

    if (!order) {
      sendError(res, 'Order not found', 404);
      return;
    }

    if (!['pending', 'assigned'].includes(order.status)) {
      sendError(res, 'Cannot assign driver to an order already in progress', 400);
      return;
    }

    const driver = await Driver.findById(driverId);
    if (!driver) {
      sendError(res, 'Driver not found', 404);
      return;
    }

    if (!driver.isActive) {
      sendError(res, 'Driver is not active', 400);
      return;
    }

    order.driverId = driverId;
    order.status = 'assigned';
    order.statusHistory.push({
      status: 'assigned',
      timestamp: new Date(),
      updatedBy: req.user?.userId as unknown as import('mongoose').Types.ObjectId,
      notes: `Assigned to driver: ${driver.name}`,
    });

    await order.save();
    await order.populate('driverId', 'name phone vehicleType');

    sendSuccess(res, { order }, 'Driver assigned successfully');
  } catch (error) {
    console.error('[assignDriver]', error);
    sendError(res, 'Failed to assign driver', 500);
  }
};
