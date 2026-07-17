import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ProofOfDelivery } from '../models/ProofOfDelivery';
import { DeliveryOrder } from '../models/DeliveryOrder';
import { Driver } from '../models/Driver';
import { sendSuccess, sendError } from '../utils/response';
import { env } from '../config/env';

const isValidObjectId = (id: string): boolean => mongoose.Types.ObjectId.isValid(id);

/**
 * POST /api/orders/:id/proof
 * Upload proof of delivery (image + metadata).
 */
export const submitProof = async (req: Request, res: Response): Promise<void> => {
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

    // Drivers can only submit proof for their own orders
    if (req.user?.role === 'driver') {
      const driver = await Driver.findOne({ userId: req.user.userId });
      if (!driver || order.driverId?.toString() !== (driver._id as unknown as string).toString()) {
        sendError(res, 'Forbidden: this order is not assigned to you', 403);
        return;
      }
    }

    if (order.status !== 'on_the_way') {
      sendError(res, 'Proof can only be submitted when order is on_the_way', 400);
      return;
    }

    if (order.proofOfDeliveryId) {
      sendError(res, 'Proof of delivery already exists for this order', 409);
      return;
    }

    const { signedBy, latitude, longitude, notes, type = 'photo' } = req.body;

    // Build image URL from uploaded file or body URL
    let imageUrl: string | undefined;
    if (req.file) {
      imageUrl = `${env.uploadDir}/${req.file.filename}`;
    } else if (req.body.imageUrl) {
      imageUrl = req.body.imageUrl;
    }

    const proof = await ProofOfDelivery.create({
      orderId: order._id,
      type,
      imageUrl,
      signedBy,
      latitude: latitude ? parseFloat(latitude) : undefined,
      longitude: longitude ? parseFloat(longitude) : undefined,
      timestamp: new Date(),
      notes,
    });

    // Link proof to order and mark as delivered
    order.proofOfDeliveryId = proof._id as import('mongoose').Types.ObjectId;
    order.status = 'delivered';
    order.statusHistory.push({
      status: 'delivered',
      timestamp: new Date(),
      updatedBy: req.user?.userId as unknown as import('mongoose').Types.ObjectId,
      notes: 'Proof of delivery submitted',
    });

    await order.save();

    sendSuccess(res, { proof, order }, 'Proof of delivery submitted', 201);
  } catch (error) {
    console.error('[submitProof]', error);
    sendError(res, 'Failed to submit proof', 500);
  }
};

/**
 * GET /api/orders/:id/proof
 */
export const getProof = async (req: Request, res: Response): Promise<void> => {
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

    const proof = await ProofOfDelivery.findOne({ orderId: req.params.id });
    if (!proof) {
      sendError(res, 'No proof of delivery found for this order', 404);
      return;
    }

    sendSuccess(res, { proof });
  } catch (error) {
    console.error('[getProof]', error);
    sendError(res, 'Failed to fetch proof', 500);
  }
};
