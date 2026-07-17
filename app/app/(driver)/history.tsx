import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../src/components/ui/Card';
import { StatusBadge } from '../../src/components/ui/StatusBadge';
import { EmptyState } from '../../src/components/ui/EmptyState';
import { LoadingScreen } from '../../src/components/ui/LoadingScreen';
import { ScreenContainer } from '../../src/components/ui/ScreenContainer';
import { ScreenHeader } from '../../src/components/ui/ScreenHeader';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { driverService } from '../../src/services/driverService';
import { DeliveryOrder, Patient } from '../../src/types/order.types';
import { formatAddress, formatDate } from '../../src/utils/formatters';

type RangeFilter = 'week' | 'month';

export default function DeliveryHistoryScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
  const [deliveries, setDeliveries] = useState<DeliveryOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [range, setRange] = useState<RangeFilter>('week');

  const load = async (r = range) => {
    setLoading(true);
    try {
      // Fetch delivered and failed orders
      const [done, failed] = await Promise.all([
        driverService.getMyDeliveries('delivered'),
        driverService.getMyDeliveries('failed'),
      ]);
      const combined = [...done.deliveries, ...failed.deliveries].sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
      setDeliveries(combined);
    } catch {
      setDeliveries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  if (loading && !refreshing && deliveries.length === 0) return <LoadingScreen />;

  return (
    <ScreenContainer>
      <ScreenHeader title="Delivery History" subtitle={`${deliveries.length} deliveries`} />

      <View style={styles.rangeRow}>
        {(['week', 'month'] as RangeFilter[]).map((r) => (
          <TouchableOpacity
            key={r}
            onPress={() => { setRange(r); load(r); }}
            style={[styles.rangeBtn, range === r && styles.rangeBtnActive]}
          >
            <Text style={[styles.rangeText, range === r && styles.rangeTextActive]}>
              {r === 'week' ? 'This Week' : 'This Month'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={deliveries}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          const patient = item.patientId as Patient;
          return (
            <TouchableOpacity
              onPress={() => router.push(`/(driver)/delivery/${item._id}`)}
              activeOpacity={0.85}
            >
              <Card style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.patientName}>{patient?.name || 'Patient'}</Text>
                  <StatusBadge status={item.status} size="sm" />
                </View>
                <View style={styles.row}>
                  <Ionicons name="location-outline" size={13} color={Colors.textSecondary} />
                  <Text style={styles.address} numberOfLines={1}>
                    {formatAddress(patient?.address || item.deliveryAddress)}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Ionicons name="calendar-outline" size={13} color={Colors.textSecondary} />
                  <Text style={styles.date}>{formatDate(item.updatedAt)}</Text>
                </View>
                {item.failedReason && (
                  <View style={styles.failedReason}>
                    <Ionicons name="close-circle-outline" size={13} color={Colors.errorRed} />
                    <Text style={styles.failedText} numberOfLines={1}>{item.failedReason}</Text>
                  </View>
                )}
              </Card>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={
          deliveries.length === 0
            ? [styles.emptyContainer, { paddingBottom: scrollPaddingBottom }]
            : [styles.list, { paddingBottom: scrollPaddingBottom }]
        }
        ListEmptyComponent={
          <EmptyState
            icon="time-outline"
            title="No history yet"
            subtitle="Your completed deliveries will appear here."
          />
        }
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  rangeRow: {
    flexDirection: 'row',
    paddingHorizontal: Layout.contentPadding,
    gap: 10,
    marginBottom: 12,
  },
  rangeBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  rangeBtnActive: { backgroundColor: Colors.primaryNavy, borderColor: Colors.primaryNavy },
  rangeText: { fontSize: 13, color: Colors.textSecondary, fontWeight: '500' },
  rangeTextActive: { color: Colors.white },
  list: { paddingTop: 4, paddingHorizontal: Layout.contentPadding },
  emptyContainer: { flex: 1 },
  card: { marginBottom: Layout.cardGap },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  patientName: { fontSize: 14, fontWeight: '600', color: Colors.textPrimary, flex: 1, marginRight: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 3 },
  address: { flex: 1, fontSize: 12, color: Colors.textSecondary },
  date: { fontSize: 12, color: Colors.textSecondary },
  failedReason: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  failedText: { flex: 1, fontSize: 12, color: Colors.errorRed },
});
