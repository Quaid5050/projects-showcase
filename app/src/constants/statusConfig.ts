import { Colors } from './colors';

export type OrderStatus =
  | 'pending'
  | 'assigned'
  | 'picked_up'
  | 'on_the_way'
  | 'delivered'
  | 'failed'
  | 'cancelled';

export interface StatusConfig {
  label: string;
  color: string;
  bg: string;
}

export const STATUS_CONFIG: Record<OrderStatus, StatusConfig> = {
  pending: {
    label: 'Pending',
    color: Colors.statusPending,
    bg: Colors.statusPendingBg,
  },
  assigned: {
    label: 'Assigned',
    color: Colors.statusAssigned,
    bg: Colors.statusAssignedBg,
  },
  picked_up: {
    label: 'Picked Up',
    color: Colors.statusPickedUp,
    bg: Colors.statusPickedUpBg,
  },
  on_the_way: {
    label: 'On the Way',
    color: Colors.statusOnTheWay,
    bg: Colors.statusOnTheWayBg,
  },
  delivered: {
    label: 'Delivered',
    color: Colors.statusDelivered,
    bg: Colors.statusDeliveredBg,
  },
  failed: {
    label: 'Failed',
    color: Colors.statusFailed,
    bg: Colors.statusFailedBg,
  },
  cancelled: {
    label: 'Cancelled',
    color: Colors.statusCancelled,
    bg: Colors.statusCancelledBg,
  },
};

// Status transition options per current status (for admin manual override)
export const ADMIN_STATUS_TRANSITIONS: Partial<Record<OrderStatus, OrderStatus[]>> = {
  pending: ['assigned', 'cancelled'],
  assigned: ['picked_up', 'cancelled'],
  picked_up: ['on_the_way', 'cancelled'],
  on_the_way: ['delivered', 'failed', 'cancelled'],
};

// Driver-accessible next action per status
export const DRIVER_NEXT_STATUS: Partial<Record<OrderStatus, OrderStatus>> = {
  assigned: 'picked_up',
  picked_up: 'on_the_way',
  on_the_way: 'delivered',
};
