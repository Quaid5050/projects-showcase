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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../src/components/ui/Card';
import { StatusBadge } from '../../src/components/ui/StatusBadge';
import { EmptyState } from '../../src/components/ui/EmptyState';
import { LoadingScreen } from '../../src/components/ui/LoadingScreen';
import { ScreenHeader } from '../../src/components/ui/ScreenHeader';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { useDriverStore } from '../../src/store/driverStore';
import { Patient, DeliveryOrder } from '../../src/types/order.types';
import { formatAddress, getDeliveryWindow, formatCurrency } from '../../src/utils/formatters';

export default function AssignedDeliveriesScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
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

  if (isLoading && !refreshing && assignedDeliveries.length === 0) {
    return <LoadingScreen message="Loading deliveries..." />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="My Deliveries" subtitle={`${assignedDeliveries.length} active`} />

      <FlatList
        data={assignedDeliveries}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <DeliveryItem
            order={item}
            onPress={() => router.push(`/(driver)/delivery/${item._id}`)}
          />
        )}
        contentContainerStyle={
          assignedDeliveries.length === 0
            ? [styles.emptyContainer, { paddingBottom: scrollPaddingBottom }]
            : [styles.list, { paddingBottom: scrollPaddingBottom }]
        }
        ListEmptyComponent={
          <EmptyState
            icon="bicycle-outline"
            title="No active deliveries"
            subtitle="You'll see your assigned deliveries here."
          />
        }
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const DeliveryItem = ({
  order,
  onPress,
}: {
  order: DeliveryOrder;
  onPress: () => void;
}) => {
  const patient = order.patientId as Patient;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <Card style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.patientName}>{patient?.name || 'Patient'}</Text>
          <StatusBadge status={order.status} size="sm" />
        </View>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={13} color={Colors.textSecondary} />
          <Text style={styles.address} numberOfLines={2}>
            {formatAddress(patient?.address || order.deliveryAddress)}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.row}>
            <Ionicons name="time-outline" size={12} color={Colors.textSecondary} />
            <Text style={styles.meta}>
              {getDeliveryWindow(order.deliveryWindowStart, order.deliveryWindowEnd)}
            </Text>
          </View>
          {order.codAmount > 0 && (
            <View style={styles.cod}>
              <Text style={styles.codText}>COD {formatCurrency(order.codAmount)}</Text>
            </View>
          )}
        </View>

        <View style={styles.goRow}>
          <Ionicons name="chevron-forward" size={16} color={Colors.primaryBlue} />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  list: { paddingTop: 4, paddingHorizontal: Layout.contentPadding },
  emptyContainer: { flex: 1 },
  card: { marginBottom: 12 },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  patientName: { fontSize: 15, fontWeight: '600', color: Colors.textPrimary, flex: 1, marginRight: 8 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 4, marginBottom: 4 },
  address: { flex: 1, fontSize: 13, color: Colors.textSecondary, lineHeight: 18 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  meta: { fontSize: 12, color: Colors.textSecondary },
  cod: {
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  codText: { fontSize: 11, fontWeight: '600', color: Colors.warningAmber },
  goRow: { alignItems: 'flex-end', marginTop: 4 },
});
