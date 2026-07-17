import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../../src/components/ui/Card';
import { StatusBadge } from '../../../src/components/ui/StatusBadge';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { Colors } from '../../../src/constants/colors';
import { useOrderStore } from '../../../src/store/orderStore';
import { Patient } from '../../../src/types/order.types';
import { formatAddress, formatCurrency, getDeliveryWindow } from '../../../src/utils/formatters';
import { OrderStatus, DRIVER_NEXT_STATUS } from '../../../src/constants/statusConfig';

export default function DeliveryDetailScreen() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const { selectedOrder, fetchOrderById, updateStatus, isLoading, error } = useOrderStore();
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (orderId) fetchOrderById(orderId);
  }, [orderId]);

  const order = selectedOrder;
  const patient = order?.patientId as Patient | undefined;

  const openMaps = () => {
    if (!order?.deliveryAddress) return;
    const addr = order.deliveryAddress;
    const query = encodeURIComponent(`${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`);
    const url = Platform.OS === 'ios'
      ? `maps://maps.apple.com/?q=${query}`
      : `geo:0,0?q=${query}`;
    Linking.openURL(url).catch(() => {
      Linking.openURL(`https://maps.google.com/?q=${query}`);
    });
  };

  const handleNextStatus = async () => {
    if (!order) return;
    const nextStatus = DRIVER_NEXT_STATUS[order.status as OrderStatus];
    if (!nextStatus) return;

    if (nextStatus === 'delivered') {
      // Navigate to proof-of-delivery screen
      router.push(`/(driver)/proof/${order._id}`);
      return;
    }

    const statusLabels: Record<string, string> = {
      picked_up: 'Mark as Picked Up',
      on_the_way: 'Mark as On the Way',
    };

    Alert.alert(
      statusLabels[nextStatus] || 'Update Status',
      `Confirm you want to update this delivery?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: async () => {
            setActionLoading(true);
            try {
              await updateStatus(order._id, nextStatus as OrderStatus);
            } catch (e: unknown) {
              Alert.alert('Error', e instanceof Error ? e.message : 'Update failed');
            } finally {
              setActionLoading(false);
            }
          },
        },
      ]
    );
  };

  const handleFailed = () => {
    router.push(`/(driver)/failed-reason/${order!._id}`);
  };

  if (isLoading && !order) return <LoadingScreen />;
  if (error && !order) return <ErrorState message={error} onRetry={() => fetchOrderById(orderId!)} />;
  if (!order) return <ErrorState message="Delivery not found" />;

  const nextStatus = DRIVER_NEXT_STATUS[order.status as OrderStatus];
  const canFail = order.status === 'on_the_way';

  const nextStatusLabels: Record<string, string> = {
    picked_up: '📦  Mark as Picked Up',
    on_the_way: '🚗  Mark as On the Way',
    delivered: '✅  Mark as Delivered',
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Status */}
        <View style={styles.statusSection}>
          <StatusBadge status={order.status} />
          <Text style={styles.tracking}>{order.trackingToken}</Text>
        </View>

        {/* Patient */}
        <Card style={styles.card}>
          <Text style={styles.sectionLabel}>PATIENT</Text>
          <Text style={styles.patientName}>{patient?.name || 'Unknown'}</Text>
          {patient?.phone && (
            <TouchableOpacity
              style={styles.callRow}
              onPress={() => Linking.openURL(`tel:${patient.phone}`)}
            >
              <Ionicons name="call" size={16} color={Colors.white} />
              <Text style={styles.callText}>{patient.phone}</Text>
            </TouchableOpacity>
          )}
        </Card>

        {/* Address */}
        <Card style={styles.card}>
          <Text style={styles.sectionLabel}>DELIVERY ADDRESS</Text>
          <Text style={styles.addressText}>
            {formatAddress(patient?.address || order.deliveryAddress)}
          </Text>
          <TouchableOpacity style={styles.mapsBtn} onPress={openMaps}>
            <Ionicons name="navigate" size={16} color={Colors.primaryBlue} />
            <Text style={styles.mapsBtnText}>Open in Maps</Text>
          </TouchableOpacity>
        </Card>

        {/* Delivery details */}
        <Card style={styles.card}>
          <Text style={styles.sectionLabel}>DETAILS</Text>
          {order.deliveryWindowStart && (
            <DetailRow icon="time-outline" label="Window" value={getDeliveryWindow(order.deliveryWindowStart, order.deliveryWindowEnd)} />
          )}
          {order.medicationNotes && (
            <DetailRow icon="medical-outline" label="Medication" value={order.medicationNotes} />
          )}
          {order.driverInstructions && (
            <DetailRow icon="information-circle-outline" label="Instructions" value={order.driverInstructions} />
          )}
          {order.codAmount > 0 && (
            <DetailRow icon="cash-outline" label="Cash to Collect" value={formatCurrency(order.codAmount)} highlight />
          )}
        </Card>

        {/* Action buttons */}
        {nextStatus && (
          <View style={styles.actions}>
            <PrimaryButton
              title={nextStatusLabels[nextStatus] || 'Update Status'}
              onPress={handleNextStatus}
              isLoading={actionLoading}
              size="lg"
            />
          </View>
        )}

        {canFail && (
          <View style={styles.failAction}>
            <PrimaryButton
              title="❌  Report Failed Delivery"
              onPress={handleFailed}
              variant="danger"
              size="lg"
            />
          </View>
        )}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const DetailRow = ({
  icon,
  label,
  value,
  highlight,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <View style={styles.detailRow}>
    <Ionicons name={icon} size={15} color={Colors.textSecondary} style={{ marginTop: 2 }} />
    <View style={{ flex: 1, marginLeft: 8 }}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={[styles.detailValue, highlight && styles.highlight]}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.primaryNavy,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: Colors.white },
  statusSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tracking: { fontSize: 11, color: Colors.textSecondary, fontFamily: 'monospace' },
  card: { marginHorizontal: 16, marginTop: 12 },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 1,
    marginBottom: 8,
  },
  patientName: { fontSize: 20, fontWeight: '700', color: Colors.primaryNavy, marginBottom: 8 },
  callRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.primaryBlue,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  callText: { color: Colors.white, fontWeight: '600', fontSize: 14 },
  addressText: { fontSize: 15, color: Colors.textPrimary, lineHeight: 22, marginBottom: 12 },
  mapsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  mapsBtnText: { fontSize: 14, color: Colors.primaryBlue, fontWeight: '600' },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  detailLabel: { fontSize: 11, color: Colors.textSecondary },
  detailValue: { fontSize: 14, color: Colors.textPrimary, fontWeight: '500', marginTop: 2 },
  highlight: { color: Colors.warningAmber, fontWeight: '700' },
  actions: { paddingHorizontal: 16, marginTop: 24 },
  failAction: { paddingHorizontal: 16, marginTop: 10 },
});
