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
import { OrderCard } from '../../src/components/orders/OrderCard';
import { LoadingScreen } from '../../src/components/ui/LoadingScreen';
import { ErrorState } from '../../src/components/ui/ErrorState';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { useAuthStore } from '../../src/store/authStore';
import { useOrderStore } from '../../src/store/orderStore';
import { reportService } from '../../src/services/reportService';
import { ReportSummary } from '../../src/types/api.types';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color, bg }) => (
  <Card style={[styles.statCard, { backgroundColor: bg }]} padding={14}>
    <Ionicons name={icon} size={22} color={color} />
    <Text style={[styles.statValue, { color }]}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </Card>
);

export default function AdminDashboard() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
  const { user } = useAuthStore();
  const { orders, fetchOrders, isLoading, error } = useOrderStore();
  const [summary, setSummary] = useState<ReportSummary | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    await fetchOrders({ limit: 5 });
    try {
      const data = await reportService.getSummary('today');
      setSummary(data);
    } catch {
      // Summary is non-critical
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  if (isLoading && !refreshing && orders.length === 0) {
    return <LoadingScreen message="Loading dashboard..." />;
  }

  if (error && orders.length === 0) {
    return <ErrorState message={error} onRetry={loadData} />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: scrollPaddingBottom }]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 👋</Text>
            <Text style={styles.userName}>{user?.name}</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>Today's Overview</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statsRow}
        >
          <StatCard
            label="Total"
            value={summary?.total ?? 0}
            icon="receipt-outline"
            color={Colors.primaryBlue}
            bg="#EFF6FF"
          />
          <StatCard
            label="Pending"
            value={summary?.pending ?? 0}
            icon="time-outline"
            color={Colors.warningAmber}
            bg="#FFFBEB"
          />
          <StatCard
            label="In Progress"
            value={summary?.inProgress ?? 0}
            icon="bicycle-outline"
            color="#4338CA"
            bg="#EEF2FF"
          />
          <StatCard
            label="Delivered"
            value={summary?.delivered ?? 0}
            icon="checkmark-circle-outline"
            color={Colors.successGreen}
            bg="#F0FDF4"
          />
          <StatCard
            label="Failed"
            value={summary?.failed ?? 0}
            icon="close-circle-outline"
            color={Colors.errorRed}
            bg="#FEF2F2"
          />
        </ScrollView>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/(admin)/orders/create')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#EFF6FF' }]}>
              <Ionicons name="add-circle-outline" size={24} color={Colors.primaryBlue} />
            </View>
            <Text style={styles.actionLabel}>New Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/(admin)/orders')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0FDF4' }]}>
              <Ionicons name="list-outline" size={24} color={Colors.successGreen} />
            </View>
            <Text style={styles.actionLabel}>All Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/(admin)/drivers')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F5F3FF' }]}>
              <Ionicons name="car-outline" size={24} color="#7C3AED" />
            </View>
            <Text style={styles.actionLabel}>Drivers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/(admin)/reports')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#FFFBEB' }]}>
              <Ionicons name="bar-chart-outline" size={24} color={Colors.warningAmber} />
            </View>
            <Text style={styles.actionLabel}>Reports</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Orders */}
        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <TouchableOpacity onPress={() => router.push('/(admin)/orders')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {orders.slice(0, 5).map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            onPress={() => router.push(`/(admin)/orders/${order._id}`)}
          />
        ))}

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  scrollContent: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.screenPadding,
    paddingTop: 8,
    paddingBottom: 4,
  },
  greeting: { fontSize: 14, color: Colors.textSecondary },
  userName: { fontSize: 24, fontWeight: '700', color: Colors.primaryNavy, marginTop: 2 },
  notifBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.primaryNavy,
    paddingHorizontal: Layout.screenPadding,
    marginTop: 24,
    marginBottom: 14,
  },
  statsRow: {
    paddingHorizontal: Layout.contentPadding,
    gap: 12,
    paddingBottom: 4,
  },
  statCard: {
    width: 108,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Layout.contentPadding,
    gap: 12,
  },
  actionBtn: {
    width: '47%',
    backgroundColor: Colors.white,
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  actionIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  actionLabel: {
    fontSize: 13,
    color: Colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: Layout.screenPadding,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.primaryBlue,
    fontWeight: '600',
    marginTop: 24,
  },
  bottomPad: { height: 8 },
});
