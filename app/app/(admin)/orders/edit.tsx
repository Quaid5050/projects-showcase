import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Ionicons } from '@expo/vector-icons';

import { FormInput } from '../../../src/components/ui/FormInput';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { LoadingScreen } from '../../../src/components/ui/LoadingScreen';
import { Colors } from '../../../src/constants/colors';
import { useOrderStore } from '../../../src/store/orderStore';
import { Patient } from '../../../src/types/order.types';

const editSchema = z.object({
  deliveryStreet: z.string().min(3, 'Street is required'),
  deliveryCity: z.string().min(2, 'City is required'),
  deliveryState: z.string().min(2, 'State is required'),
  deliveryZip: z.string().min(4, 'ZIP is required'),
  medicationNotes: z.string().optional(),
  driverInstructions: z.string().optional(),
  codAmount: z.string().optional(),
});

type EditForm = z.infer<typeof editSchema>;

export default function EditOrderScreen() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const { selectedOrder, fetchOrderById, updateOrder, isLoading } = useOrderStore();

  const { control, handleSubmit, reset, formState: { errors } } = useForm<EditForm>({
    resolver: zodResolver(editSchema),
  });

  useEffect(() => {
    if (orderId) fetchOrderById(orderId);
  }, [orderId]);

  useEffect(() => {
    if (selectedOrder) {
      const addr = selectedOrder.deliveryAddress;
      reset({
        deliveryStreet: addr.street,
        deliveryCity: addr.city,
        deliveryState: addr.state,
        deliveryZip: addr.zip,
        medicationNotes: selectedOrder.medicationNotes || '',
        driverInstructions: selectedOrder.driverInstructions || '',
        codAmount: String(selectedOrder.codAmount || 0),
      });
    }
  }, [selectedOrder]);

  const onSubmit = async (data: EditForm) => {
    try {
      await updateOrder(orderId!, {
        deliveryAddress: {
          street: data.deliveryStreet,
          city: data.deliveryCity,
          state: data.deliveryState,
          zip: data.deliveryZip,
        },
        medicationNotes: data.medicationNotes,
        driverInstructions: data.driverInstructions,
        codAmount: parseFloat(data.codAmount || '0'),
      });
      Alert.alert('Saved', 'Order updated successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (e: unknown) {
      Alert.alert('Error', e instanceof Error ? e.message : 'Failed to update order');
    }
  };

  if (isLoading && !selectedOrder) return <LoadingScreen />;

  if (selectedOrder && !['pending', 'assigned'].includes(selectedOrder.status)) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Order</Text>
          <View style={{ width: 40 }} />
        </View>
        <View style={styles.centered}>
          <Ionicons name="lock-closed-outline" size={48} color={Colors.border} />
          <Text style={styles.lockedText}>
            This order cannot be edited because it is already in progress.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Order</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Patient (read-only) */}
          {selectedOrder && (
            <View style={styles.patientCard}>
              <Ionicons name="person-circle-outline" size={18} color={Colors.primaryBlue} />
              <Text style={styles.patientName}>
                {(selectedOrder.patientId as Patient)?.name || 'Patient'}
              </Text>
            </View>
          )}

          <Text style={styles.label}>Delivery Address</Text>
          <View style={styles.formSection}>
            <Controller control={control} name="deliveryStreet" render={({ field }) => (
              <FormInput label="Street" placeholder="456 Oak Avenue" value={field.value}
                onChangeText={field.onChange} error={errors.deliveryStreet?.message} required />
            )} />
            <View style={styles.row}>
              <View style={{ flex: 2 }}>
                <Controller control={control} name="deliveryCity" render={({ field }) => (
                  <FormInput label="City" placeholder="New York" value={field.value}
                    onChangeText={field.onChange} error={errors.deliveryCity?.message} required />
                )} />
              </View>
              <View style={{ flex: 1 }}>
                <Controller control={control} name="deliveryState" render={({ field }) => (
                  <FormInput label="State" placeholder="NY" value={field.value}
                    onChangeText={field.onChange} error={errors.deliveryState?.message} required />
                )} />
              </View>
            </View>
            <Controller control={control} name="deliveryZip" render={({ field }) => (
              <FormInput label="ZIP" placeholder="10001" keyboardType="numeric" value={field.value}
                onChangeText={field.onChange} error={errors.deliveryZip?.message} required />
            )} />
          </View>

          <Text style={styles.label}>Details</Text>
          <View style={styles.formSection}>
            <Controller control={control} name="medicationNotes" render={({ field }) => (
              <FormInput label="Medication Notes" value={field.value} onChangeText={field.onChange}
                multiline numberOfLines={3} style={{ height: 80, textAlignVertical: 'top' }} />
            )} />
            <Controller control={control} name="driverInstructions" render={({ field }) => (
              <FormInput label="Driver Instructions" value={field.value} onChangeText={field.onChange}
                multiline numberOfLines={2} style={{ height: 64, textAlignVertical: 'top' }} />
            )} />
            <Controller control={control} name="codAmount" render={({ field }) => (
              <FormInput label="COD Amount (USD)" keyboardType="decimal-pad"
                value={field.value} onChangeText={field.onChange} leftIcon="cash-outline" />
            )} />
          </View>

          <PrimaryButton title="Save Changes" onPress={handleSubmit(onSubmit)}
            isLoading={isLoading} size="lg" />
          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: Colors.primaryNavy },
  scroll: { padding: 20 },
  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#EFF6FF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  patientName: { fontSize: 14, fontWeight: '600', color: Colors.primaryBlue },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryNavy,
    marginBottom: 10,
  },
  formSection: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  row: { flexDirection: 'row', gap: 12 },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  lockedText: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 22,
  },
});
