import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../ui/Card';
import { StatusBadge } from '../ui/StatusBadge';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';
import { DeliveryOrder, Patient } from '../../types/order.types';
import { formatAddress, formatCurrency, getDeliveryWindow } from '../../utils/formatters';

interface OrderCardProps {
  order: DeliveryOrder;
  onPress: () => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, onPress }) => {
  const patient = order.patientId as Patient;
  const patientName = typeof patient === 'string' ? 'Unknown Patient' : patient.name;
  const patientPhone = typeof patient === 'object' ? patient.phone : '';
  const address = typeof patient === 'object' ? patient.address : order.deliveryAddress;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <Card style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.patientName}>{patientName}</Text>
            <Text style={styles.trackingToken}>{order.trackingToken}</Text>
          </View>
          <StatusBadge status={order.status} />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Ionicons name="location-outline" size={14} color={Colors.textSecondary} />
          <Text style={styles.address} numberOfLines={1}>
            {formatAddress(address)}
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.row}>
            <Ionicons name="time-outline" size={13} color={Colors.textSecondary} />
            <Text style={styles.meta}>
              {getDeliveryWindow(order.deliveryWindowStart, order.deliveryWindowEnd)}
            </Text>
          </View>
          {order.codAmount > 0 && (
            <View style={styles.cod}>
              <Ionicons name="cash-outline" size={13} color={Colors.warningAmber} />
              <Text style={styles.codText}>{formatCurrency(order.codAmount)}</Text>
            </View>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Layout.contentPadding,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  headerLeft: {
    flex: 1,
    marginRight: 8,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  trackingToken: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
    fontFamily: 'monospace',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  address: {
    flex: 1,
    fontSize: 13,
    color: Colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  meta: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  cod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  codText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.warningAmber,
  },
});
