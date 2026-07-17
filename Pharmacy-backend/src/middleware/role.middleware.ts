import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';

type Role = 'super_admin' | 'pharmacy_admin' | 'staff' | 'driver';

/**
 * Middleware factory — restricts access to the specified roles.
 * Must be used AFTER the `authenticate` middleware.
 */
export const requireRole = (...roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      sendError(res, 'Unauthorized', 401);
      return;
    }

    if (!roles.includes(req.user.role as Role)) {
      sendError(res, 'Forbidden: insufficient permissions', 403);
      return;
    }

    next();
  };
};
