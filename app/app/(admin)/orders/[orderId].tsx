import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../../src/components/ui/Card';
import { StatusBadge } from '../../../src/components/ui/StatusBadge';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { OrderStatusTimeline } from '../../../src/components/orders/OrderStatusTimeline';
import { Colors } from '../../../src/constants/colors';
import { useOrderStore } from '../../../src/store/orderStore';
import { formatAddress, formatCurrency, formatDateTime } from '../../../src/utils/formatters';
import { Patient, Driver, ProofOfDelivery } from '../../../src/types/order.types';
import { OrderStatus } from '../../../src/constants/statusConfig';
import { orderService } from '../../../src/services/orderService';

export default function OrderDetailsScreen() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const { selectedOrder, fetchOrderById, updateStatus, isLoading, error } = useOrderStore();
  const [proof, setProof] = useState<ProofOfDelivery | null>(null);

  const order = selectedOrder;

  useEffect(() => {
    if (orderId) {
      fetchOrderById(orderId);
    }
  }, [orderId]);

  useEffect(() => {
    if (order?.status === 'delivered' && order.proofOfDeliveryId) {
      orderService.getProof(order._id).then(setProof).catch(() => {});
    }
  }, [order?.status]);

  const handleCancel = () => {
    Alert.alert('Cancel Order', 'Are you sure you want to cancel this order?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes, Cancel',
        style: 'destructive',
        onPress: async () => {
          try {
            await updateStatus(orderId!, 'cancelled' as OrderStatus);
            Alert.alert('Done', 'Order cancelled.');
          } catch (e: unknown) {
            Alert.alert('Error', e instanceof Error ? e.message : 'Failed to cancel');
          }
        },
      },
    ]);
  };

  if (isLoading && !order) return <LoadingScreen />;
  if (error && !order) return <ErrorState message={error} onRetry={() => fetchOrderById(orderId!)} />;
  if (!order) return <ErrorState message="Order not found" />;

  const patient = order.patientId as Patient;
  const driver = order.driverId as Driver | null;
  const isCancellable = !['delivered', 'failed', 'cancelled'].includes(order.status);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <TouchableOpacity onPress={() => router.push(`/(admin)/orders/edit?orderId=${orderId}`)}>
          <Ionicons name="create-outline" size={22} color={Colors.primaryBlue} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Status card */}
        <Card style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.trackingLabel}>Tracking</Text>
              <Text style={styles.tracking}>{order.trackingToken}</Text>
            </View>
            <StatusBadge status={order.status} />
          </View>
          <Text style={styles.createdAt}>
            Created {formatDateTime(order.createdAt)}
          </Text>
        </Card>

        {/* Patient */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Patient</Text>
          <Card style={styles.card}>
            <InfoRow icon="person-outline" label="Name" value={patient?.name || 'N/A'} />
            <InfoRow icon="call-outline" label="Phone" value={patient?.phone || 'N/A'}
              onPress={() => patient?.phone && Linking.openURL(`tel:${patient.phone}`)} />
            {patient?.email && (
              <InfoRow icon="mail-outline" label="Email" value={patient.email} />
            )}
            {patient?.address && (
              <InfoRow icon="location-outline" label="Address" value={formatAddress(patient.address)} />
            )}
          </Card>
        </View>

        {/* Driver */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Driver</Text>
          {driver ? (
            <Card style={styles.card}>
              <InfoRow icon="person-circle-outline" label="Name" value={driver.name} />
              <InfoRow icon="call-outline" label="Phone" value={driver.phone}
                onPress={() => Linking.openURL(`tel:${driver.phone}`)} />
              <InfoRow icon="car-outline" label="Vehicle" value={`${driver.vehicleType} · ${driver.vehicleNumber}`} />
            </Card>
          ) : (
            <Card style={styles.card}>
              <View style={styles.unassigned}>
                <Ionicons name="person-add-outline" size={20} color={Colors.textSecondary} />
                <Text style={styles.unassignedText}>No driver assigned</Text>
              </View>
              <PrimaryButton title="Assign Driver" onPress={() =>
                router.push(`/(admin)/orders/assign-driver?orderId=${orderId}`)}
                variant="outline" size="sm" style={{ marginTop: 10 }} />
            </Card>
          )}
        </View>

        {/* Delivery Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Info</Text>
          <Card style={styles.card}>
            {order.medicationNotes && (
              <InfoRow icon="medical-outline" label="Medication Notes" value={order.medicationNotes} />
            )}
            {order.driverInstructions && (
              <InfoRow icon="information-circle-outline" label="Instructions" value={order.driverInstructions} />
            )}
            {order.codAmount > 0 && (
              <InfoRow icon="cash-outline" label="COD Amount" value={formatCurrency(order.codAmount)} />
            )}
            {order.failedReason && (
              <InfoRow icon="close-circle-outline" label="Failed Reason" value={order.failedReason} />
            )}
          </Card>
        </View>

        {/* Status Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status History</Text>
          <Card style={styles.card}>
            <OrderStatusTimeline currentStatus={order.status} statusHistory={order.statusHistory} />
          </Card>
        </View>

        {/* Proof of Delivery */}
        {proof && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Proof of Delivery</Text>
            <Card style={styles.card}>
              {proof.signedBy && (
                <InfoRow icon="checkmark-circle-outline" label="Signed By" value={proof.signedBy} />
              )}
              <InfoRow icon="time-outline" label="Timestamp" value={formatDateTime(proof.timestamp)} />
              {proof.notes && (
                <InfoRow icon="document-text-outline" label="Notes" value={proof.notes} />
              )}
              {proof.imageUrl && (
                <Text style={styles.photoLink}>📸 Photo captured</Text>
              )}
            </Card>
          </View>
        )}

        {/* Actions */}
        <View style={styles.actions}>
          {['pending', 'assigned'].includes(order.status) && !driver && (
            <PrimaryButton title="Assign Driver" onPress={() =>
              router.push(`/(admin)/orders/assign-driver?orderId=${orderId}`)}
              style={styles.actionBtn} />
          )}
          {isCancellable && (
            <PrimaryButton title="Cancel Order" onPress={handleCancel}
              variant="danger" style={styles.actionBtn} />
          )}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const InfoRow = ({
  icon,
  label,
  value,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={!onPress}
    style={styles.infoRow}
    activeOpacity={onPress ? 0.7 : 1}
  >
    <Ionicons name={icon} size={15} color={Colors.textSecondary} style={styles.infoIcon} />
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={[styles.infoValue, onPress && styles.link]}>{value}</Text>
    </View>
    {onPress && <Ionicons name="chevron-forward" size={14} color={Colors.border} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: Colors.primaryNavy },
  card: { marginHorizontal: 16, marginBottom: 4 },
  section: { marginTop: 20 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  trackingLabel: { fontSize: 11, color: Colors.textSecondary },
  tracking: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryNavy,
    fontFamily: 'monospace',
  },
  createdAt: { fontSize: 12, color: Colors.textSecondary, marginTop: 6 },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  infoIcon: { marginTop: 2, marginRight: 10 },
  infoContent: { flex: 1 },
  infoLabel: { fontSize: 11, color: Colors.textSecondary, marginBottom: 1 },
  infoValue: { fontSize: 14, color: Colors.textPrimary, fontWeight: '500' },
  link: { color: Colors.primaryBlue },
  unassigned: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  unassignedText: { color: Colors.textSecondary, fontSize: 14 },
  photoLink: { fontSize: 13, color: Colors.primaryBlue, marginTop: 8 },
  actions: { paddingHorizontal: 16, marginTop: 24, gap: 10 },
  actionBtn: { marginBottom: 4 },
});
