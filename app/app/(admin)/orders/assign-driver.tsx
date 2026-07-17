import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { EmptyState } from '../../../src/components/ui/EmptyState';
import { Colors } from '../../../src/constants/colors';
import { useOrderStore } from '../../../src/store/orderStore';
import { useDriverStore } from '../../../src/store/driverStore';
import { Driver } from '../../../src/types/order.types';

export default function AssignDriverScreen() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const { assignDriver, isLoading } = useOrderStore();
  const { drivers, fetchDrivers, isLoading: driversLoading } = useDriverStore();
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    fetchDrivers({ isActive: true });
  }, []);

  const handleAssign = async () => {
    if (!selected || !orderId) return;
    try {
      await assignDriver(orderId, selected);
      Alert.alert('Done', 'Driver assigned successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (e: unknown) {
      Alert.alert('Error', e instanceof Error ? e.message : 'Failed to assign driver');
    }
  };

  if (driversLoading && drivers.length === 0) return <LoadingScreen />;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assign Driver</Text>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        data={drivers.filter((d) => d.isActive)}
        keyExtractor={(item) => item._id}
        contentContainerStyle={drivers.length === 0 ? styles.empty : styles.list}
        ListEmptyComponent={
          <EmptyState icon="car-outline" title="No active drivers" subtitle="All drivers are inactive." />
        }
        renderItem={({ item }) => (
          <DriverSelectItem
            driver={item}
            selected={selected === item._id}
            onSelect={() => setSelected(item._id)}
          />
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <PrimaryButton
              title="Assign Driver"
              onPress={handleAssign}
              isLoading={isLoading}
              disabled={!selected}
              size="lg"
            />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const DriverSelectItem = ({
  driver,
  selected,
  onSelect,
}: {
  driver: Driver;
  selected: boolean;
  onSelect: () => void;
}) => (
  <TouchableOpacity onPress={onSelect} activeOpacity={0.85} style={styles.driverItem}>
    <View style={styles.driverAvatar}>
      <Text style={styles.driverAvatarText}>{driver.name.charAt(0).toUpperCase()}</Text>
    </View>
    <View style={styles.driverInfo}>
      <Text style={styles.driverName}>{driver.name}</Text>
      <Text style={styles.driverMeta}>
        {driver.vehicleType} · {driver.vehicleNumber}
      </Text>
      <Text style={styles.driverPhone}>{driver.phone}</Text>
    </View>
    <View style={[styles.radio, selected && styles.radioSelected]}>
      {selected && <View style={styles.radioDot} />}
    </View>
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
  list: { padding: 16, gap: 10 },
  empty: { flex: 1 },
  driverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  driverAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  driverAvatarText: { color: Colors.white, fontSize: 18, fontWeight: '700' },
  driverInfo: { flex: 1 },
  driverName: { fontSize: 15, fontWeight: '600', color: Colors.textPrimary },
  driverMeta: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  driverPhone: { fontSize: 12, color: Colors.textSecondary },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: { borderColor: Colors.primaryBlue },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryBlue,
  },
  footer: { padding: 16, paddingTop: 24 },
});
