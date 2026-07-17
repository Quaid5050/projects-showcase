import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../src/components/ui/Card';
import { PrimaryButton } from '../../src/components/ui/PrimaryButton';
import { ScreenHeader } from '../../src/components/ui/ScreenHeader';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { useAuthStore } from '../../src/store/authStore';

export default function SettingsScreen() {
  const { user, logout } = useAuthStore();
  const { scrollPaddingBottom } = useLayoutInsets();

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: logout },
    ]);
  };

  const RoleLabel = () => {
    const labels: Record<string, string> = {
      super_admin: 'Super Admin',
      pharmacy_admin: 'Pharmacy Admin',
      staff: 'Staff',
      driver: 'Driver',
    };
    return (
      <View style={styles.roleChip}>
        <Text style={styles.roleText}>{labels[user?.role || 'staff'] || user?.role}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Settings" subtitle="Account & app preferences" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: scrollPaddingBottom }]}
      >
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name?.charAt(0).toUpperCase() || '?'}
          </Text>
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <RoleLabel />
      </View>

      {/* Info */}
      <Card style={styles.card}>
        <SettingRow icon="person-outline" label="Full Name" value={user?.name || '-'} />
        <SettingRow icon="mail-outline" label="Email" value={user?.email || '-'} />
        <SettingRow icon="call-outline" label="Phone" value={user?.phone || '-'} />
      </Card>

      {/* App */}
      <Card style={[styles.card, { marginTop: 16 }]}>
        <SettingRow icon="information-circle-outline" label="App Version" value="1.0.0" />
        <SettingRow icon="shield-checkmark-outline" label="Security" value="JWT Auth" />
      </Card>

      {/* Logout */}
      <View style={styles.logoutSection}>
        <PrimaryButton title="Sign Out" onPress={handleLogout} variant="danger" size="lg" />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const SettingRow = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) => (
  <View style={styles.settingRow}>
    <Ionicons name={icon} size={16} color={Colors.textSecondary} style={styles.settingIcon} />
    <View style={{ flex: 1 }}>
      <Text style={styles.settingLabel}>{label}</Text>
      <Text style={styles.settingValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scrollContent: {},
  profileSection: { alignItems: 'center', paddingVertical: 20, paddingHorizontal: Layout.screenPadding },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryNavy,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: { color: Colors.white, fontSize: 30, fontWeight: '700' },
  name: { fontSize: 22, fontWeight: '700', color: Colors.primaryNavy },
  email: { fontSize: 14, color: Colors.textSecondary, marginTop: 4 },
  roleChip: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
  },
  roleText: { fontSize: 12, fontWeight: '600', color: Colors.primaryBlue },
  card: { marginHorizontal: Layout.contentPadding, marginBottom: 4 },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingIcon: { marginRight: 14 },
  settingLabel: { fontSize: 12, color: Colors.textSecondary },
  settingValue: { fontSize: 15, fontWeight: '500', color: Colors.textPrimary, marginTop: 2 },
  logoutSection: { padding: Layout.screenPadding, marginTop: 24 },
});
