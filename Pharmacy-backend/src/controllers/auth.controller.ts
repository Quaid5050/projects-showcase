import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';
import { User } from '../models/User';
import { Driver } from '../models/Driver';
import { signToken } from '../utils/jwt';
import { sendSuccess, sendError } from '../utils/response';

const BCRYPT_ROUNDS = 12;

// ─── Validation Rules ────────────────────────────────────────────────────────

export const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
  body('role')
    .isIn(['super_admin', 'pharmacy_admin', 'staff', 'driver'])
    .withMessage('Invalid role'),
];

export const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

// ─── Controllers ─────────────────────────────────────────────────────────────

/**
 * POST /api/auth/register
 * Creates a new user account.
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    sendError(res, 'Validation failed', 400, errors.array());
    return;
  }

  const { name, email, phone, password, role, pharmacyId } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      sendError(res, 'Email already in use', 409);
      return;
    }

    const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

    const user = await User.create({
      name,
      email,
      phone,
      passwordHash,
      role,
      pharmacyId: pharmacyId || undefined,
    });

    const token = signToken({
      userId: (user._id as unknown as string).toString(),
      role: user.role,
      pharmacyId: user.pharmacyId?.toString(),
    });

    sendSuccess(res, { user, token }, 'Account created successfully', 201);
  } catch (error) {
    console.error('[register]', error);
    sendError(res, 'Registration failed', 500);
  }
};

/**
 * POST /api/auth/login
 * Authenticates a user and returns a JWT.
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    sendError(res, 'Validation failed', 400, errors.array());
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user) {
      sendError(res, 'Invalid email or password', 401);
      return;
    }

    if (!user.isActive) {
      sendError(res, 'Account is deactivated. Contact your administrator.', 403);
      return;
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      sendError(res, 'Invalid email or password', 401);
      return;
    }

    // If driver, fetch driver profile to include driverId in response
    let driverProfile = null;
    if (user.role === 'driver') {
      driverProfile = await Driver.findOne({ userId: user._id });
    }

    const token = signToken({
      userId: (user._id as unknown as string).toString(),
      role: user.role,
      pharmacyId: user.pharmacyId?.toString(),
    });

    sendSuccess(
      res,
      { user, token, driverProfile },
      'Login successful'
    );
  } catch (error) {
    console.error('[login]', error);
    sendError(res, 'Login failed', 500);
  }
};

/**
 * GET /api/auth/me
 * Returns the currently authenticated user.
 */
export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user?.userId);
    if (!user) {
      sendError(res, 'User not found', 404);
      return;
    }

    let driverProfile = null;
    if (user.role === 'driver') {
      driverProfile = await Driver.findOne({ userId: user._id });
    }

    sendSuccess(res, { user, driverProfile });
  } catch (error) {
    console.error('[getMe]', error);
    sendError(res, 'Failed to fetch user', 500);
  }
};

/**
 * POST /api/auth/logout
 * Client is responsible for clearing the token. This endpoint is a no-op
 * on the server (stateless JWT) but provided for completeness.
 */
export const logout = (_req: Request, res: Response): void => {
  sendSuccess(res, null, 'Logged out successfully');
};
