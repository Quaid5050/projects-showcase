import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../../src/components/ui/Card';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { ScreenContainer } from '../../../src/components/ui/ScreenContainer';
import { ScreenHeader } from '../../../src/components/ui/ScreenHeader';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { Colors } from '../../../src/constants/colors';
import { Layout } from '../../../src/constants/layout';
import { useLayoutInsets } from '../../../src/hooks/useLayoutInsets';
import { patientService } from '../../../src/services/patientService';
import { Patient } from '../../../src/types/order.types';
import { formatAddress } from '../../../src/utils/formatters';
import { getErrorMessage } from '../../../src/services/api';

export default function PatientDetailScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
  const { patientId } = useLocalSearchParams<{ patientId: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (patientId) {
      setLoading(true);
      patientService
        .getPatientById(patientId)
        .then(setPatient)
        .catch((e) => setError(getErrorMessage(e)))
        .finally(() => setLoading(false));
    }
  }, [patientId]);

  if (loading) return <LoadingScreen message="Loading patient..." />;
  if (error || !patient) return <ErrorState message={error || 'Patient not found'} onRetry={() => router.back()} />;

  return (
    <ScreenContainer>
      <ScreenHeader title={patient.name} subtitle="Patient details" onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: scrollPaddingBottom }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{patient.name.charAt(0).toUpperCase()}</Text>
          </View>
        </View>

        <Card style={styles.card}>
          <InfoRow icon="call-outline" label="Phone" value={patient.phone} />
          <InfoRow icon="mail-outline" label="Email" value={patient.email || '—'} />
          <InfoRow icon="location-outline" label="Address" value={formatAddress(patient.address)} />
          {patient.notes ? (
            <InfoRow icon="document-text-outline" label="Notes" value={patient.notes} />
          ) : null}
        </Card>

        <PrimaryButton
          title="Create Order for Patient"
          onPress={() =>
            Alert.alert('Create Order', 'Use the Orders tab to create a new delivery for this patient.')
          }
          style={styles.cta}
        />
      </ScrollView>
    </ScreenContainer>
  );
}

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) => (
  <View style={styles.infoRow}>
    <Ionicons name={icon} size={16} color={Colors.textSecondary} style={styles.infoIcon} />
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scroll: { paddingTop: 4 },
  avatarSection: { alignItems: 'center', marginBottom: 20 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryNavy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: Colors.white, fontSize: 32, fontWeight: '700' },
  card: { marginHorizontal: Layout.contentPadding },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  infoIcon: { marginRight: 14, marginTop: 2 },
  infoContent: { flex: 1 },
  infoLabel: { fontSize: 12, color: Colors.textSecondary },
  infoValue: { fontSize: 15, fontWeight: '500', color: Colors.textPrimary, marginTop: 3, lineHeight: 22 },
  cta: { marginHorizontal: Layout.contentPadding, marginTop: 24 },
});
