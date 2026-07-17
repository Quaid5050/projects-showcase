import { Request, Response } from 'express';
import { Pharmacy } from '../models/Pharmacy';
import { sendSuccess, sendError } from '../utils/response';

export const getPharmacies = async (_req: Request, res: Response): Promise<void> => {
  try {
    const pharmacies = await Pharmacy.find().sort({ createdAt: -1 });
    sendSuccess(res, { pharmacies, total: pharmacies.length });
  } catch (error) {
    console.error('[getPharmacies]', error);
    sendError(res, 'Failed to fetch pharmacies', 500);
  }
};

export const createPharmacy = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacy = await Pharmacy.create(req.body);
    sendSuccess(res, { pharmacy }, 'Pharmacy created', 201);
  } catch (error) {
    console.error('[createPharmacy]', error);
    sendError(res, 'Failed to create pharmacy', 500);
  }
};

export const getPharmacyById = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy) {
      sendError(res, 'Pharmacy not found', 404);
      return;
    }
    sendSuccess(res, { pharmacy });
  } catch (error) {
    console.error('[getPharmacyById]', error);
    sendError(res, 'Failed to fetch pharmacy', 500);
  }
};

export const updatePharmacy = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacy = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pharmacy) {
      sendError(res, 'Pharmacy not found', 404);
      return;
    }
    sendSuccess(res, { pharmacy }, 'Pharmacy updated');
  } catch (error) {
    console.error('[updatePharmacy]', error);
    sendError(res, 'Failed to update pharmacy', 500);
  }
};
