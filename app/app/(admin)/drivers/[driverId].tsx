import React, { useEffect } from 'react';
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
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { Colors } from '../../../src/constants/colors';
import { useDriverStore } from '../../../src/store/driverStore';
import { driverService } from '../../../src/services/driverService';

export default function DriverDetailScreen() {
  const router = useRouter();
  const { driverId } = useLocalSearchParams<{ driverId: string }>();
  const { selectedDriver, fetchDriverById, isLoading, error } = useDriverStore();

  useEffect(() => {
    if (driverId) fetchDriverById(driverId);
  }, [driverId]);

  const toggleActive = async () => {
    if (!selectedDriver) return;
    const action = selectedDriver.isActive ? 'deactivate' : 'activate';
    Alert.alert(
      `${action.charAt(0).toUpperCase() + action.slice(1)} Driver`,
      `Are you sure you want to ${action} ${selectedDriver.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: async () => {
            try {
              await driverService.updateDriver(driverId!, { isActive: !selectedDriver.isActive } as Parameters<typeof driverService.updateDriver>[1]);
              fetchDriverById(driverId!);
            } catch (e: unknown) {
              Alert.alert('Error', e instanceof Error ? e.message : 'Failed to update driver');
            }
          },
        },
      ]
    );
  };

  if (isLoading && !selectedDriver) return <LoadingScreen />;
  if (error && !selectedDriver) return <ErrorState message={error} onRetry={() => fetchDriverById(driverId!)} />;
  if (!selectedDriver) return <ErrorState message="Driver not found" />;

  const d = selectedDriver;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Driver Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Avatar + status */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{d.name.charAt(0).toUpperCase()}</Text>
          </View>
          <Text style={styles.name}>{d.name}</Text>
          <View style={[styles.statusBadge, d.isActive ? styles.active : styles.inactive]}>
            <View style={[styles.dot, d.isActive ? styles.dotActive : styles.dotInactive]} />
            <Text style={[styles.statusText, d.isActive ? styles.activeText : styles.inactiveText]}>
              {d.isActive ? 'Active' : 'Inactive'}
            </Text>
          </View>
        </View>

        {/* Details card */}
        <Card style={styles.card}>
          <DetailRow icon="call-outline" label="Phone" value={d.phone}
            onPress={() => Linking.openURL(`tel:${d.phone}`)} />
          <DetailRow icon="car-outline" label="Vehicle Type"
            value={d.vehicleType.charAt(0).toUpperCase() + d.vehicleType.slice(1)} />
          <DetailRow icon="barcode-outline" label="Vehicle Number" value={d.vehicleNumber} />
          {d.currentLocation && (
            <DetailRow icon="location-outline" label="Last Location"
              value={`${d.currentLocation.lat.toFixed(4)}, ${d.currentLocation.lng.toFixed(4)}`} />
          )}
        </Card>

        {/* Actions */}
        <View style={styles.actions}>
          <PrimaryButton
            title={d.isActive ? 'Deactivate Driver' : 'Activate Driver'}
            onPress={toggleActive}
            variant={d.isActive ? 'danger' : 'primary'}
            size="lg"
          />
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const DetailRow = ({
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
    style={styles.detailRow}
    activeOpacity={onPress ? 0.7 : 1}
  >
    <Ionicons name={icon} size={16} color={Colors.textSecondary} style={styles.detailIcon} />
    <View style={{ flex: 1 }}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={[styles.detailValue, onPress && { color: Colors.primaryBlue }]}>{value}</Text>
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
  profileSection: { alignItems: 'center', paddingVertical: 32 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: { color: Colors.white, fontSize: 32, fontWeight: '700' },
  name: { fontSize: 22, fontWeight: '700', color: Colors.primaryNavy, marginBottom: 10 },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  active: { backgroundColor: '#F0FDF4' },
  inactive: { backgroundColor: '#F9FAFB' },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotActive: { backgroundColor: Colors.successGreen },
  dotInactive: { backgroundColor: Colors.textSecondary },
  statusText: { fontSize: 13, fontWeight: '600' },
  activeText: { color: Colors.successGreen },
  inactiveText: { color: Colors.textSecondary },
  card: { marginHorizontal: 16 },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  detailIcon: { marginRight: 12 },
  detailLabel: { fontSize: 11, color: Colors.textSecondary },
  detailValue: { fontSize: 14, fontWeight: '500', color: Colors.textPrimary, marginTop: 2 },
  actions: { padding: 16, marginTop: 24 },
});
