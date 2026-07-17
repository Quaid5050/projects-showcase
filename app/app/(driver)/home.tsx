import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../src/components/ui/Card';
import { StatusBadge } from '../../src/components/ui/StatusBadge';
import { LoadingScreen } from '../../src/components/ui/LoadingScreen';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { useAuthStore } from '../../src/store/authStore';
import { useDriverStore } from '../../src/store/driverStore';
import { formatAddress, getDeliveryWindow } from '../../src/utils/formatters';
import { Patient } from '../../src/types/order.types';

export default function DriverHomeScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
  const { user } = useAuthStore();
  const { assignedDeliveries, fetchAssignedDeliveries, isLoading } = useDriverStore();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchAssignedDeliveries();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAssignedDeliveries();
    setRefreshing(false);
  };

  const pending = assignedDeliveries.filter((d) => d.status === 'assigned').length;
  const inProgress = assignedDeliveries.filter((d) =>
    ['picked_up', 'on_the_way'].includes(d.status)
  ).length;
  const total = assignedDeliveries.length;

  const nextDelivery = assignedDeliveries[0];

  if (isLoading && !refreshing && assignedDeliveries.length === 0) {
    return <LoadingScreen message="Loading your deliveries..." />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: scrollPaddingBottom }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.driverName}>{user?.name}</Text>
          </View>
          <View style={styles.statusIndicator}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>On Duty</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.summaryRow}>
          <SummaryCard label="Assigned" value={pending} color={Colors.primaryBlue} bg="#EFF6FF" />
          <SummaryCard label="In Progress" value={inProgress} color="#4338CA" bg="#EEF2FF" />
          <SummaryCard label="Total Today" value={total} color={Colors.primaryNavy} bg="#F1F5F9" />
        </View>

        {/* Next Delivery */}
        {nextDelivery ? (
          <>
            <Text style={styles.sectionTitle}>Next Delivery</Text>
            <TouchableOpacity
              onPress={() => router.push(`/(driver)/delivery/${nextDelivery._id}`)}
              activeOpacity={0.9}
            >
              <Card style={styles.nextCard}>
                <View style={styles.nextCardHeader}>
                  <StatusBadge status={nextDelivery.status} />
                  <Text style={styles.tracking}>{nextDelivery.trackingToken}</Text>
                </View>
                <Text style={styles.patientName}>
                  {(nextDelivery.patientId as Patient)?.name || 'Patient'}
                </Text>
                <View style={styles.addressRow}>
                  <Ionicons name="location-outline" size={14} color={Colors.textSecondary} />
                  <Text style={styles.address} numberOfLines={2}>
                    {formatAddress((nextDelivery.patientId as Patient)?.address || nextDelivery.deliveryAddress)}
                  </Text>
                </View>
                <View style={styles.windowRow}>
                  <Ionicons name="time-outline" size={13} color={Colors.textSecondary} />
                  <Text style={styles.window}>
                    {getDeliveryWindow(nextDelivery.deliveryWindowStart, nextDelivery.deliveryWindowEnd)}
                  </Text>
                </View>
                {nextDelivery.codAmount > 0 && (
                  <View style={styles.codRow}>
                    <Ionicons name="cash-outline" size={13} color={Colors.warningAmber} />
                    <Text style={styles.codText}>
                      COD: ${nextDelivery.codAmount.toFixed(2)}
                    </Text>
                  </View>
                )}
                <View style={styles.startBtn}>
                  <Ionicons name="navigate-circle" size={20} color={Colors.white} />
                  <Text style={styles.startBtnText}>View Delivery</Text>
                </View>
              </Card>
            </TouchableOpacity>
          </>
        ) : (
          <Card style={styles.emptyCard}>
            <Ionicons name="checkmark-circle-outline" size={40} color={Colors.successGreen} />
            <Text style={styles.emptyTitle}>All caught up!</Text>
            <Text style={styles.emptySubtitle}>No deliveries assigned right now.</Text>
          </Card>
        )}

        {/* Upcoming */}
        {assignedDeliveries.length > 1 && (
          <>
            <View style={styles.upcomingHeader}>
              <Text style={styles.sectionTitle}>Upcoming</Text>
              <TouchableOpacity onPress={() => router.push('/(driver)/deliveries')}>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            {assignedDeliveries.slice(1, 4).map((d) => {
              const patient = d.patientId as Patient;
              return (
                <TouchableOpacity
                  key={d._id}
                  onPress={() => router.push(`/(driver)/delivery/${d._id}`)}
                  activeOpacity={0.85}
                >
                  <Card style={styles.upcomingCard}>
                    <View style={styles.upcomingRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.upcomingName}>{patient?.name || 'Patient'}</Text>
                        <Text style={styles.upcomingAddress} numberOfLines={1}>
                          {formatAddress(patient?.address || d.deliveryAddress)}
                        </Text>
                      </View>
                      <StatusBadge status={d.status} size="sm" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </>
        )}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const SummaryCard = ({
  label,
  value,
  color,
  bg,
}: {
  label: string;
  value: number;
  color: string;
  bg: string;
}) => (
  <View style={[styles.summaryCard, { backgroundColor: bg }]}>
    <Text style={[styles.summaryValue, { color }]}>{value}</Text>
    <Text style={styles.summaryLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.screenPadding,
    paddingTop: 8,
    paddingBottom: 4,
  },
  greeting: { fontSize: 14, color: Colors.textSecondary },
  driverName: { fontSize: 24, fontWeight: '700', color: Colors.primaryNavy, marginTop: 2 },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  onlineDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.successGreen },
  onlineText: { fontSize: 12, fontWeight: '600', color: Colors.successGreen },
  summaryRow: {
    flexDirection: 'row',
    paddingHorizontal: Layout.contentPadding,
    gap: 10,
    marginTop: 20,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  summaryValue: { fontSize: 26, fontWeight: '700' },
  summaryLabel: { fontSize: 11, color: Colors.textSecondary, marginTop: 4, textAlign: 'center' },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.primaryNavy,
    paddingHorizontal: Layout.screenPadding,
    marginTop: 24,
    marginBottom: 12,
  },
  nextCard: {
    marginHorizontal: Layout.contentPadding,
    backgroundColor: Colors.primaryNavy,
  },
  nextCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tracking: { fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' },
  patientName: { fontSize: 20, fontWeight: '700', color: Colors.white, marginBottom: 8 },
  addressRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 4, marginBottom: 4 },
  address: { flex: 1, fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 18 },
  windowRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 },
  window: { fontSize: 12, color: 'rgba(255,255,255,0.7)' },
  codRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 12 },
  codText: { fontSize: 12, color: Colors.warningAmber, fontWeight: '600' },
  startBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryBlue,
    borderRadius: 10,
    paddingVertical: 12,
    gap: 6,
    marginTop: 4,
  },
  startBtnText: { color: Colors.white, fontSize: 14, fontWeight: '700' },
  emptyCard: {
    marginHorizontal: Layout.contentPadding,
    alignItems: 'center',
    paddingVertical: 36,
  },
  emptyTitle: { fontSize: 16, fontWeight: '700', color: Colors.textPrimary, marginTop: 12 },
  emptySubtitle: { fontSize: 13, color: Colors.textSecondary, marginTop: 4 },
  upcomingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: Layout.screenPadding,
  },
  seeAll: { fontSize: 14, color: Colors.primaryBlue, fontWeight: '600', marginTop: 24 },
  upcomingCard: { marginHorizontal: Layout.contentPadding, marginBottom: 10 },
  upcomingRow: { flexDirection: 'row', alignItems: 'center' },
  upcomingName: { fontSize: 14, fontWeight: '600', color: Colors.textPrimary },
  upcomingAddress: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
});
