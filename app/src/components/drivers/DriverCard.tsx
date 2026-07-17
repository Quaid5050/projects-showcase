import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../ui/Card';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';
import { Driver } from '../../types/order.types';

const VEHICLE_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  car: 'car-outline',
  bike: 'bicycle-outline',
  van: 'bus-outline',
  motorcycle: 'bicycle-outline',
};

interface DriverCardProps {
  driver: Driver;
  onPress: () => void;
}

export const DriverCard: React.FC<DriverCardProps> = ({ driver, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <Card style={styles.card}>
        <View style={styles.row}>
          {/* Avatar */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {driver.name.charAt(0).toUpperCase()}
            </Text>
          </View>

          {/* Info */}
          <View style={styles.info}>
            <Text style={styles.name}>{driver.name}</Text>
            <View style={styles.meta}>
              <Ionicons
                name={VEHICLE_ICONS[driver.vehicleType] || 'car-outline'}
                size={13}
                color={Colors.textSecondary}
              />
              <Text style={styles.metaText}>
                {driver.vehicleType.charAt(0).toUpperCase() + driver.vehicleType.slice(1)}{' '}
                · {driver.vehicleNumber}
              </Text>
            </View>
            <View style={styles.meta}>
              <Ionicons name="call-outline" size={13} color={Colors.textSecondary} />
              <Text style={styles.metaText}>{driver.phone}</Text>
            </View>
          </View>

          {/* Status */}
          <View style={[styles.statusDot, driver.isActive ? styles.active : styles.inactive]} />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Layout.contentPadding,
    marginBottom: Layout.cardGap,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 3,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
  active: {
    backgroundColor: Colors.successGreen,
  },
  inactive: {
    backgroundColor: Colors.textSecondary,
  },
});
