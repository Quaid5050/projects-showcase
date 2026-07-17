import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../src/components/ui/Card';
import { FormInput } from '../../src/components/ui/FormInput';
import { PrimaryButton } from '../../src/components/ui/PrimaryButton';
import { ScreenHeader } from '../../src/components/ui/ScreenHeader';
import { ScreenContainer } from '../../src/components/ui/ScreenContainer';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { useAuthStore } from '../../src/store/authStore';
import { driverService } from '../../src/services/driverService';

export default function DriverProfileScreen() {
  const { scrollPaddingBottom } = useLayoutInsets();
  const { user, driverProfile, logout } = useAuthStore();
  const [editing, setEditing] = useState(false);
  const [phone, setPhone] = useState(driverProfile?.phone || user?.phone || '');
  const [vehicleNumber, setVehicleNumber] = useState(driverProfile?.vehicleNumber || '');
  const [saving, setSaving] = useState(false);

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: logout },
    ]);
  };

  const handleSave = async () => {
    if (!driverProfile?._id) return;
    setSaving(true);
    try {
      await driverService.updateDriver(driverProfile._id, { phone, vehicleNumber } as Parameters<typeof driverService.updateDriver>[1]);
      Alert.alert('Saved', 'Profile updated successfully.');
      setEditing(false);
    } catch (e: unknown) {
      Alert.alert('Error', e instanceof Error ? e.message : 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const vehicleLabel = driverProfile?.vehicleType
    ? driverProfile.vehicleType.charAt(0).toUpperCase() + driverProfile.vehicleType.slice(1)
    : '-';

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Profile"
        subtitle="Your account details"
        rightAction={
          <TouchableOpacity onPress={() => setEditing(!editing)} style={styles.editBtn}>
            <Ionicons name={editing ? 'close' : 'create-outline'} size={22} color={Colors.primaryBlue} />
          </TouchableOpacity>
        }
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: scrollPaddingBottom }]}
      >
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0).toUpperCase() || '?'}
            </Text>
          </View>
          <Text style={styles.name}>{user?.name}</Text>
          <View style={styles.driverBadge}>
            <Ionicons name="car-outline" size={12} color={Colors.primaryBlue} />
            <Text style={styles.driverBadgeText}>Driver</Text>
          </View>
          {driverProfile?.isActive && (
            <View style={styles.activeBadge}>
              <View style={styles.activeDot} />
              <Text style={styles.activeText}>Active</Text>
            </View>
          )}
        </View>

        {/* Info / Edit */}
        <Card style={styles.card}>
          {editing ? (
            <>
              <FormInput
                label="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                leftIcon="call-outline"
              />
              <FormInput
                label="Vehicle Number"
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                autoCapitalize="characters"
                leftIcon="barcode-outline"
              />
              <PrimaryButton title="Save Changes" onPress={handleSave} isLoading={saving} size="md" />
            </>
          ) : (
            <>
              <ProfileRow icon="mail-outline" label="Email" value={user?.email || '-'} />
              <ProfileRow icon="call-outline" label="Phone" value={phone || '-'} />
              <ProfileRow icon="car-outline" label="Vehicle" value={vehicleLabel} />
              <ProfileRow icon="barcode-outline" label="Vehicle Number" value={vehicleNumber || '-'} />
            </>
          )}
        </Card>

        <View style={styles.logoutSection}>
          <PrimaryButton title="Sign Out" onPress={handleLogout} variant="danger" size="lg" />
        </View>

        <View style={{ height: 16 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const ProfileRow = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) => (
  <View style={styles.profileRow}>
    <Ionicons name={icon} size={16} color={Colors.textSecondary} style={styles.rowIcon} />
    <View>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollContent: {},
  editBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSection: { alignItems: 'center', paddingVertical: 8, paddingBottom: 24 },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: { color: Colors.white, fontSize: 34, fontWeight: '700' },
  name: { fontSize: 22, fontWeight: '700', color: Colors.primaryNavy },
  driverBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },
  driverBadgeText: { fontSize: 12, fontWeight: '600', color: Colors.primaryBlue },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  activeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.successGreen },
  activeText: { fontSize: 13, color: Colors.successGreen, fontWeight: '600' },
  card: { marginHorizontal: Layout.contentPadding },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  rowIcon: { marginRight: 14 },
  rowLabel: { fontSize: 12, color: Colors.textSecondary },
  rowValue: { fontSize: 15, fontWeight: '500', color: Colors.textPrimary, marginTop: 2 },
  logoutSection: { padding: Layout.screenPadding, marginTop: 24 },
});
