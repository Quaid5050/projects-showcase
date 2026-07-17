import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a unique tracking token for delivery orders.
 * Format: TRK-XXXXXXXX (8 uppercase hex chars)
 */
export const generateTrackingToken = (): string => {
  const raw = uuidv4().replace(/-/g, '').toUpperCase().slice(0, 8);
  return `TRK-${raw}`;
};
