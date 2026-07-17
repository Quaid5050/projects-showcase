import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { FormInput } from '../../../src/components/ui/FormInput';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { Colors } from '../../../src/constants/colors';
import { useOrderStore } from '../../../src/store/orderStore';

const FAILED_REASONS = [
  { id: 'not_home', label: 'Patient not home', icon: 'home-outline' },
  { id: 'wrong_address', label: 'Wrong address', icon: 'location-outline' },
  { id: 'refused', label: 'Patient refused delivery', icon: 'close-circle-outline' },
  { id: 'other', label: 'Other', icon: 'help-circle-outline' },
];

export default function FailedReasonScreen() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const { updateStatus, isLoading } = useOrderStore();

  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [otherText, setOtherText] = useState('');

  const handleSubmit = async () => {
    if (!selectedReason) {
      Alert.alert('Select a reason', 'Please select a reason for the failed delivery.');
      return;
    }

    if (selectedReason === 'other' && !otherText.trim()) {
      Alert.alert('Enter reason', 'Please describe the reason for failure.');
      return;
    }

    const reason =
      selectedReason === 'other'
        ? otherText.trim()
        : FAILED_REASONS.find((r) => r.id === selectedReason)?.label || selectedReason;

    Alert.alert('Confirm Failed Delivery', `Report this delivery as failed?\n\nReason: ${reason}`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: async () => {
          try {
            await updateStatus(orderId!, 'failed', { failedReason: reason });
            Alert.alert('Reported', 'Delivery marked as failed.', [
              { text: 'OK', onPress: () => router.replace('/(driver)/home') },
            ]);
          } catch (e: unknown) {
            Alert.alert('Error', e instanceof Error ? e.message : 'Failed to update status');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Failed Delivery</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.alertBox}>
          <Ionicons name="warning" size={24} color={Colors.errorRed} />
          <Text style={styles.alertText}>
            Please select the reason this delivery could not be completed.
          </Text>
        </View>

        <Text style={styles.label}>Select Reason</Text>

        {FAILED_REASONS.map((reason) => (
          <TouchableOpacity
            key={reason.id}
            onPress={() => setSelectedReason(reason.id)}
            style={[
              styles.reasonCard,
              selectedReason === reason.id && styles.reasonCardSelected,
            ]}
          >
            <View style={[
              styles.reasonIcon,
              selectedReason === reason.id && styles.reasonIconSelected,
            ]}>
              <Ionicons
                name={reason.icon as keyof typeof Ionicons.glyphMap}
                size={20}
                color={selectedReason === reason.id ? Colors.white : Colors.textSecondary}
              />
            </View>
            <Text style={[
              styles.reasonText,
              selectedReason === reason.id && styles.reasonTextSelected,
            ]}>
              {reason.label}
            </Text>
            {selectedReason === reason.id && (
              <Ionicons name="checkmark-circle" size={20} color={Colors.errorRed} />
            )}
          </TouchableOpacity>
        ))}

        {selectedReason === 'other' && (
          <FormInput
            label="Describe the reason"
            placeholder="What happened?"
            multiline
            numberOfLines={3}
            value={otherText}
            onChangeText={setOtherText}
            style={{ height: 80, textAlignVertical: 'top' }}
            containerStyle={{ marginTop: 8 }}
          />
        )}

        <PrimaryButton
          title="Report Failed Delivery"
          onPress={handleSubmit}
          isLoading={isLoading}
          variant="danger"
          size="lg"
          style={styles.submitBtn}
          disabled={!selectedReason}
        />

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#DC2626',
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: Colors.white },
  scroll: { padding: 20 },
  alertBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#FEF2F2',
    borderRadius: 10,
    padding: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  alertText: {
    flex: 1,
    fontSize: 13,
    color: Colors.errorRed,
    lineHeight: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primaryNavy,
    marginBottom: 12,
  },
  reasonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  reasonCardSelected: {
    borderColor: Colors.errorRed,
    backgroundColor: '#FFF5F5',
  },
  reasonIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  reasonIconSelected: {
    backgroundColor: Colors.errorRed,
  },
  reasonText: {
    flex: 1,
    fontSize: 15,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  reasonTextSelected: {
    color: Colors.errorRed,
    fontWeight: '700',
  },
  submitBtn: { marginTop: 24 },
});
