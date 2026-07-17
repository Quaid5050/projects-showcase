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

import { DriverCard } from '../../../src/components/drivers/DriverCard';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { EmptyState } from '../../../src/components/ui/EmptyState';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { ScreenHeader } from '../../../src/components/ui/ScreenHeader';
import { Colors } from '../../../src/constants/colors';
import { Layout } from '../../../src/constants/layout';
import { useLayoutInsets } from '../../../src/hooks/useLayoutInsets';
import { useDriverStore } from '../../../src/store/driverStore';

type FilterType = 'all' | 'active' | 'inactive';

export default function DriversListScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
  const { drivers, totalDrivers, fetchDrivers, isLoading, error } = useDriverStore();
  const [filter, setFilter] = useState<FilterType>('all');
  const [refreshing, setRefreshing] = useState(false);

  const loadDrivers = (f = filter) => {
    if (f === 'all') fetchDrivers();
    else fetchDrivers({ isActive: f === 'active' });
  };

  useEffect(() => {
    loadDrivers();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadDrivers();
    setRefreshing(false);
  };

  const FilterChip = ({ label, value }: { label: string; value: FilterType }) => (
    <TouchableOpacity
      onPress={() => { setFilter(value); loadDrivers(value); }}
      style={[styles.chip, filter === value && styles.chipActive]}
    >
      <Text style={[styles.chipText, filter === value && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
  );

  if (isLoading && !refreshing && drivers.length === 0) return <LoadingScreen />;
  if (error && drivers.length === 0) return <ErrorState message={error} onRetry={loadDrivers} />;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title="Drivers"
        subtitle={`${totalDrivers} registered`}
        rightAction={
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => router.push('/(admin)/drivers/create')}
          >
            <Ionicons name="add" size={24} color={Colors.white} />
          </TouchableOpacity>
        }
      />

      <View style={styles.filters}>
        <FilterChip label="All" value="all" />
        <FilterChip label="Active" value="active" />
        <FilterChip label="Inactive" value="inactive" />
      </View>

      <FlatList
        data={drivers}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <DriverCard
            driver={item}
            onPress={() => router.push(`/(admin)/drivers/${item._id}`)}
          />
        )}
        contentContainerStyle={
          drivers.length === 0
            ? [styles.emptyContainer, { paddingBottom: scrollPaddingBottom }]
            : [styles.list, { paddingBottom: scrollPaddingBottom }]
        }
        ListEmptyComponent={
          <EmptyState icon="car-outline" title="No drivers found" subtitle="Add your first driver to get started." />
        }
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  addBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filters: {
    flexDirection: 'row',
    paddingHorizontal: Layout.contentPadding,
    gap: 10,
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: {
    backgroundColor: Colors.primaryNavy,
    borderColor: Colors.primaryNavy,
  },
  chipText: { fontSize: 13, color: Colors.textSecondary, fontWeight: '600' },
  chipTextActive: { color: Colors.white },
  list: { paddingTop: 4 },
  emptyContainer: { flex: 1 },
});
