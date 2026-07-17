import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../ui/Card';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';
import { Patient } from '../../types/order.types';
import { formatAddress } from '../../utils/formatters';

interface PatientCardProps {
  patient: Patient;
  onPress: () => void;
}

export const PatientCard: React.FC<PatientCardProps> = ({ patient, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
    <Card style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{patient.name.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{patient.name}</Text>
          <View style={styles.metaRow}>
            <Ionicons name="call-outline" size={13} color={Colors.textSecondary} />
            <Text style={styles.meta}>{patient.phone}</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="location-outline" size={13} color={Colors.textSecondary} />
            <Text style={styles.meta} numberOfLines={1}>
              {formatAddress(patient.address)}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color={Colors.textDisabled} />
      </View>
    </Card>
  </TouchableOpacity>
);

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
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: Colors.primaryNavy,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  info: {
    flex: 1,
    paddingRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 2,
  },
  meta: {
    flex: 1,
    fontSize: 12,
    color: Colors.textSecondary,
  },
});
