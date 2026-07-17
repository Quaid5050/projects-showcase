import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  TextInput,
  View,
} from 'react-native';
import { useRouter, Href } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { PatientCard } from '../../../src/components/patients/PatientCard';
import { ScreenContainer } from '../../../src/components/ui/ScreenContainer';
import { ScreenHeader } from '../../../src/components/ui/ScreenHeader';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { EmptyState } from '../../../src/components/ui/EmptyState';
import { ErrorState } from '../../../src/components/ui/ErrorState';
import { Colors } from '../../../src/constants/colors';
import { Layout } from '../../../src/constants/layout';
import { useLayoutInsets } from '../../../src/hooks/useLayoutInsets';
import { patientService } from '../../../src/services/patientService';
import { Patient } from '../../../src/types/order.types';
import { getErrorMessage } from '../../../src/services/api';

export default function PatientsListScreen() {
  const router = useRouter();
  const { scrollPaddingBottom, fabBottom } = useLayoutInsets();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPatients = async (query?: string) => {
    setError(null);
    try {
      const data = await patientService.getPatients(query ? { search: query } : undefined);
      setPatients(data.patients);
      setTotal(data.total);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPatients(search || undefined);
    setRefreshing(false);
  };

  const onSearch = (text: string) => {
    setSearch(text);
    loadPatients(text || undefined);
  };

  if (loading && !refreshing && patients.length === 0) {
    return <LoadingScreen message="Loading patients..." />;
  }

  if (error && patients.length === 0) {
    return <ErrorState message={error} onRetry={() => loadPatients()} />;
  }

  return (
    <ScreenContainer>
      <ScreenHeader title="Patients" subtitle={`${total} registered`} />

      <View style={styles.searchWrap}>
        <Ionicons name="search-outline" size={18} color={Colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or phone..."
          placeholderTextColor={Colors.textDisabled}
          value={search}
          onChangeText={onSearch}
        />
      </View>

      <FlatList
        data={patients}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <PatientCard
            patient={item}
            onPress={() => router.push(`/(admin)/patients/${item._id}` as Href)}
          />
        )}
        contentContainerStyle={
          patients.length === 0
            ? [styles.emptyContainer, { paddingBottom: scrollPaddingBottom }]
            : { paddingBottom: scrollPaddingBottom }
        }
        ListEmptyComponent={
          <EmptyState
            icon="people-outline"
            title="No patients found"
            subtitle="Add a patient to use them in delivery orders."
            actionLabel="Add Patient"
            onAction={() => router.push('/(admin)/patients/create' as Href)}
          />
        }
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={[styles.fab, { bottom: fabBottom }]}
        onPress={() => router.push('/(admin)/patients/create' as Href)}
      >
        <Ionicons name="add" size={26} color={Colors.white} />
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Layout.contentPadding,
    marginBottom: 12,
    paddingHorizontal: 14,
    height: 46,
    borderRadius: 12,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.textPrimary,
  },
  emptyContainer: { flex: 1 },
  fab: {
    position: 'absolute',
    right: Layout.screenPadding,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
});
