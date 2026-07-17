import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { User } from '../models/User';
import { sendSuccess, sendError } from '../utils/response';

const isValidObjectId = (id: string): boolean => mongoose.Types.ObjectId.isValid(id);

/**
 * GET /api/users
 * Super admin only — list all users.
 */
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pharmacyId, role, isActive } = req.query;
    const filter: Record<string, unknown> = {};

    if (pharmacyId) filter.pharmacyId = pharmacyId;
    if (role) filter.role = role;
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const users = await User.find(filter).sort({ createdAt: -1 });
    sendSuccess(res, { users, total: users.length });
  } catch (error) {
    console.error('[getUsers]', error);
    sendError(res, 'Failed to fetch users', 500);
  }
};

/**
 * GET /api/users/:id
 * Accessible by admins or the user themselves.
 */
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid user ID', 400);
      return;
    }
    // Non-admins can only view their own profile
    const role = req.user?.role;
    if (role !== 'super_admin' && role !== 'pharmacy_admin' && role !== 'staff') {
      if (req.user?.userId !== req.params.id) {
        sendError(res, 'Forbidden', 403);
        return;
      }
    }
    const user = await User.findById(req.params.id);
    if (!user) {
      sendError(res, 'User not found', 404);
      return;
    }
    sendSuccess(res, { user });
  } catch (error) {
    console.error('[getUserById]', error);
    sendError(res, 'Failed to fetch user', 500);
  }
};

/**
 * PATCH /api/users/:id
 * Admins can update any user. Non-admins can only update themselves,
 * and cannot change the isActive flag.
 */
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isValidObjectId(req.params.id)) {
      sendError(res, 'Invalid user ID', 400);
      return;
    }
    const role = req.user?.role;
    const isAdmin = role === 'super_admin' || role === 'pharmacy_admin' || role === 'staff';

    // Non-admins can only update themselves
    if (!isAdmin && req.user?.userId !== req.params.id) {
      sendError(res, 'Forbidden', 403);
      return;
    }

    const { name, phone, isActive } = req.body;
    const updateData: Record<string, unknown> = {};

    if (name !== undefined) updateData.name = name;
    if (phone !== undefined) updateData.phone = phone;
    // Only admins can change active status
    if (isActive !== undefined && isAdmin) updateData.isActive = isActive;

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      sendError(res, 'User not found', 404);
      return;
    }

    sendSuccess(res, { user }, 'User updated');
  } catch (error) {
    console.error('[updateUser]', error);
    sendError(res, 'Failed to update user', 500);
  }
};
