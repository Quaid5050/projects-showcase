import { Request, Response } from 'express';
import { Patient } from '../models/Patient';
import { sendSuccess, sendError } from '../utils/response';

export const getPatients = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId || req.query.pharmacyId;
    const filter: Record<string, unknown> = {};
    if (pharmacyId) filter.pharmacyId = pharmacyId;

    const { search } = req.query;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
      ];
    }

    const patients = await Patient.find(filter).sort({ name: 1 });
    sendSuccess(res, { patients, total: patients.length });
  } catch (error) {
    console.error('[getPatients]', error);
    sendError(res, 'Failed to fetch patients', 500);
  }
};

export const createPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId || req.body.pharmacyId;
    const patient = await Patient.create({ ...req.body, pharmacyId });
    sendSuccess(res, { patient }, 'Patient created', 201);
  } catch (error) {
    console.error('[createPatient]', error);
    sendError(res, 'Failed to create patient', 500);
  }
};

export const getPatientById = async (req: Request, res: Response): Promise<void> => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      sendError(res, 'Patient not found', 404);
      return;
    }
    sendSuccess(res, { patient });
  } catch (error) {
    console.error('[getPatientById]', error);
    sendError(res, 'Failed to fetch patient', 500);
  }
};

export const updatePatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) {
      sendError(res, 'Patient not found', 404);
      return;
    }
    sendSuccess(res, { patient }, 'Patient updated');
  } catch (error) {
    console.error('[updatePatient]', error);
    sendError(res, 'Failed to update patient', 500);
  }
};
