import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { OrderStatus, STATUS_CONFIG } from '../../constants/statusConfig';
import { StatusHistoryEntry } from '../../types/order.types';
import { formatDateTime } from '../../utils/formatters';

const ORDERED_STATUSES: OrderStatus[] = [
  'pending',
  'assigned',
  'picked_up',
  'on_the_way',
  'delivered',
];

interface OrderStatusTimelineProps {
  currentStatus: OrderStatus;
  statusHistory: StatusHistoryEntry[];
}

export const OrderStatusTimeline: React.FC<OrderStatusTimelineProps> = ({
  currentStatus,
  statusHistory,
}) => {
  // If failed or cancelled, show those specially
  const isFailed = currentStatus === 'failed';
  const isCancelled = currentStatus === 'cancelled';
  const displayStatuses = isFailed || isCancelled ? [...ORDERED_STATUSES, currentStatus] : ORDERED_STATUSES;

  const getStatusEntry = (status: OrderStatus) => {
    return statusHistory.find((h) => h.status === status);
  };

  const isCompleted = (status: OrderStatus): boolean => {
    const idx = ORDERED_STATUSES.indexOf(currentStatus);
    const sIdx = ORDERED_STATUSES.indexOf(status);
    if (isFailed || isCancelled) {
      return statusHistory.some((h) => h.status === status);
    }
    return sIdx <= idx;
  };

  return (
    <View style={styles.container}>
      {displayStatuses.map((status, index) => {
        const completed = isCompleted(status);
        const isCurrent = status === currentStatus;
        const entry = getStatusEntry(status);
        const config = STATUS_CONFIG[status];
        const isLast = index === displayStatuses.length - 1;

        return (
          <View key={status} style={styles.step}>
            {/* Line */}
            {!isLast && (
              <View
                style={[
                  styles.line,
                  completed && !isCurrent && styles.lineCompleted,
                ]}
              />
            )}
            {/* Dot */}
            <View
              style={[
                styles.dot,
                completed && styles.dotCompleted,
                isCurrent && { backgroundColor: config.color, borderColor: config.color },
              ]}
            >
              {completed && (
                <Ionicons
                  name={isCurrent && (isFailed || isCancelled) ? 'close' : 'checkmark'}
                  size={10}
                  color={Colors.white}
                />
              )}
            </View>

            {/* Content */}
            <View style={styles.content}>
              <Text
                style={[
                  styles.statusLabel,
                  isCurrent && { color: config.color, fontWeight: '700' },
                  !completed && styles.future,
                ]}
              >
                {config.label}
              </Text>
              {entry && (
                <Text style={styles.timestamp}>{formatDateTime(entry.timestamp)}</Text>
              )}
              {entry?.notes && (
                <Text style={styles.notes}>{entry.notes}</Text>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: 9,
    top: 20,
    width: 2,
    height: 28,
    backgroundColor: Colors.border,
    zIndex: 0,
  },
  lineCompleted: {
    backgroundColor: Colors.successGreen,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginTop: 2,
  },
  dotCompleted: {
    backgroundColor: Colors.successGreen,
    borderColor: Colors.successGreen,
  },
  content: {
    marginLeft: 12,
    flex: 1,
  },
  statusLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  future: {
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  timestamp: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  notes: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
    fontStyle: 'italic',
  },
});
