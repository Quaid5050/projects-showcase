import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { OrderCard } from '../../../src/components/orders/OrderCard';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { EmptyState } from '../../../src/components/ui/EmptyState';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { ScreenHeader } from '../../../src/components/ui/ScreenHeader';
import { Colors } from '../../../src/constants/colors';
import { Layout } from '../../../src/constants/layout';
import { useLayoutInsets } from '../../../src/hooks/useLayoutInsets';
import { OrderStatus, STATUS_CONFIG } from '../../../src/constants/statusConfig';
import { useOrderStore } from '../../../src/store/orderStore';

const FILTER_OPTIONS: { label: string; value: OrderStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Assigned', value: 'assigned' },
  { label: 'In Transit', value: 'on_the_way' },
  { label: 'Delivered', value: 'delivered' },
  { label: 'Failed', value: 'failed' },
];

export default function OrdersListScreen() {
  const router = useRouter();
  const { scrollPaddingBottom, fabBottom } = useLayoutInsets();
  const { orders, total, fetchOrders, isLoading, error } = useOrderStore();
  const [selectedFilter, setSelectedFilter] = useState<OrderStatus | 'all'>('all');
  const [refreshing, setRefreshing] = useState(false);

  const loadOrders = (filter?: OrderStatus | 'all') => {
    const status = filter ?? selectedFilter;
    fetchOrders(status !== 'all' ? { status } : undefined);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const onFilterChange = (filter: OrderStatus | 'all') => {
    setSelectedFilter(filter);
    fetchOrders(filter !== 'all' ? { status: filter } : undefined);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadOrders();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Orders" subtitle={`${total} total`} />

      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}
      >
        {FILTER_OPTIONS.map((opt) => {
          const active = selectedFilter === opt.value;
          const config = opt.value !== 'all' ? STATUS_CONFIG[opt.value as OrderStatus] : null;
          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => onFilterChange(opt.value)}
              style={[
                styles.chip,
                active && { backgroundColor: config?.color || Colors.primaryNavy },
              ]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* List */}
      {isLoading && !refreshing && orders.length === 0 ? (
        <LoadingScreen message="Loading orders..." fullScreen={false} />
      ) : error && orders.length === 0 ? (
        <ErrorState message={error} onRetry={() => loadOrders()} />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <OrderCard
              order={item}
              onPress={() => router.push(`/(admin)/orders/${item._id}`)}
            />
          )}
          contentContainerStyle={
            orders.length === 0
              ? [styles.emptyContainer, { paddingBottom: scrollPaddingBottom }]
              : [styles.list, { paddingBottom: scrollPaddingBottom }]
          }
          ListEmptyComponent={
            <EmptyState
              icon="receipt-outline"
              title="No orders found"
              subtitle="Create a new delivery order to get started."
              actionLabel="Create Order"
              onAction={() => router.push('/(admin)/orders/create')}
            />
          }
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* FAB */}
      <TouchableOpacity
        style={[styles.fab, { bottom: fabBottom }]}
        onPress={() => router.push('/(admin)/orders/create')}
      >
        <Ionicons name="add" size={26} color={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  filters: { paddingHorizontal: Layout.contentPadding, paddingBottom: 12, gap: 8 },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipText: { fontSize: 13, color: Colors.textSecondary, fontWeight: '600' },
  chipTextActive: { color: Colors.white },
  list: { paddingTop: 4 },
  emptyContainer: { flex: 1 },
  fab: {
    position: 'absolute',
    right: Layout.screenPadding,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
});
