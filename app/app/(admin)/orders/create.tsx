import React, { useState } from 'react';
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
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Ionicons } from '@expo/vector-icons';

import { FormInput } from '../../../src/components/ui/FormInput';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { Colors } from '../../../src/constants/colors';
import { useOrderStore } from '../../../src/store/orderStore';

const createOrderSchema = z.object({
  patientName: z.string().min(2, 'Patient name is required'),
  patientPhone: z.string().min(7, 'Phone number is required'),
  patientEmail: z.string().email('Invalid email').optional().or(z.literal('')),
  deliveryStreet: z.string().min(3, 'Street is required'),
  deliveryCity: z.string().min(2, 'City is required'),
  deliveryState: z.string().min(2, 'State is required'),
  deliveryZip: z.string().min(4, 'ZIP is required'),
  pickupStreet: z.string().min(3, 'Pickup street is required'),
  pickupCity: z.string().min(2, 'Pickup city is required'),
  pickupState: z.string().min(2, 'Pickup state is required'),
  pickupZip: z.string().min(4, 'Pickup ZIP is required'),
  medicationNotes: z.string().optional(),
  driverInstructions: z.string().optional(),
  codAmount: z.string().optional(),
  deliveryNotes: z.string().optional(),
});

type CreateOrderForm = z.infer<typeof createOrderSchema>;

export default function CreateOrderScreen() {
  const router = useRouter();
  const { createOrder, isLoading } = useOrderStore();
  const [section, setSection] = useState<'patient' | 'address' | 'details'>('patient');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrderForm>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      patientName: '',
      patientPhone: '',
      patientEmail: '',
      deliveryStreet: '',
      deliveryCity: '',
      deliveryState: '',
      deliveryZip: '',
      pickupStreet: '',
      pickupCity: '',
      pickupState: '',
      pickupZip: '',
      medicationNotes: '',
      driverInstructions: '',
      codAmount: '0',
    },
  });

  const onSubmit = async (data: CreateOrderForm) => {
    try {
      await createOrder({
        patient: {
          name: data.patientName,
          phone: data.patientPhone,
          email: data.patientEmail || undefined,
          address: {
            street: data.deliveryStreet,
            city: data.deliveryCity,
            state: data.deliveryState,
            zip: data.deliveryZip,
          },
        },
        pickupAddress: {
          street: data.pickupStreet,
          city: data.pickupCity,
          state: data.pickupState,
          zip: data.pickupZip,
        },
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
      Alert.alert('Success', 'Delivery order created successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Failed to create order';
      Alert.alert('Error', msg);
    }
  };

  const SectionHeader = ({ title, step }: { title: string; step: number }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.stepBadge}>
        <Text style={styles.stepNumber}>{step}</Text>
      </View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New Delivery Order</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Patient Information */}
          <SectionHeader title="Patient Information" step={1} />
          <View style={styles.formSection}>
            <Controller control={control} name="patientName" render={({ field }) => (
              <FormInput label="Full Name" placeholder="Jane Doe" leftIcon="person-outline"
                value={field.value} onChangeText={field.onChange} error={errors.patientName?.message} required />
            )} />
            <Controller control={control} name="patientPhone" render={({ field }) => (
              <FormInput label="Phone" placeholder="+1 555 000 0000" keyboardType="phone-pad"
                leftIcon="call-outline" value={field.value} onChangeText={field.onChange}
                error={errors.patientPhone?.message} required />
            )} />
            <Controller control={control} name="patientEmail" render={({ field }) => (
              <FormInput label="Email" placeholder="patient@email.com" keyboardType="email-address"
                autoCapitalize="none" leftIcon="mail-outline" value={field.value}
                onChangeText={field.onChange} error={errors.patientEmail?.message} />
            )} />
          </View>

          {/* Delivery Address */}
          <SectionHeader title="Delivery Address" step={2} />
          <View style={styles.formSection}>
            <Controller control={control} name="deliveryStreet" render={({ field }) => (
              <FormInput label="Street" placeholder="456 Oak Avenue" leftIcon="home-outline"
                value={field.value} onChangeText={field.onChange} error={errors.deliveryStreet?.message} required />
            )} />
            <View style={styles.row}>
              <View style={styles.flex2}>
                <Controller control={control} name="deliveryCity" render={({ field }) => (
                  <FormInput label="City" placeholder="New York" value={field.value}
                    onChangeText={field.onChange} error={errors.deliveryCity?.message} required />
                )} />
              </View>
              <View style={styles.flex1}>
                <Controller control={control} name="deliveryState" render={({ field }) => (
                  <FormInput label="State" placeholder="NY" autoCapitalize="characters"
                    value={field.value} onChangeText={field.onChange} error={errors.deliveryState?.message} required />
                )} />
              </View>
            </View>
            <Controller control={control} name="deliveryZip" render={({ field }) => (
              <FormInput label="ZIP Code" placeholder="10001" keyboardType="numeric"
                value={field.value} onChangeText={field.onChange} error={errors.deliveryZip?.message} required />
            )} />
          </View>

          {/* Pickup Address */}
          <SectionHeader title="Pickup Address (Pharmacy)" step={3} />
          <View style={styles.formSection}>
            <Controller control={control} name="pickupStreet" render={({ field }) => (
              <FormInput label="Street" placeholder="Pharmacy street address" leftIcon="business-outline"
                value={field.value} onChangeText={field.onChange} error={errors.pickupStreet?.message} required />
            )} />
            <View style={styles.row}>
              <View style={styles.flex2}>
                <Controller control={control} name="pickupCity" render={({ field }) => (
                  <FormInput label="City" placeholder="City" value={field.value}
                    onChangeText={field.onChange} error={errors.pickupCity?.message} required />
                )} />
              </View>
              <View style={styles.flex1}>
                <Controller control={control} name="pickupState" render={({ field }) => (
                  <FormInput label="State" placeholder="ST" autoCapitalize="characters"
                    value={field.value} onChangeText={field.onChange} error={errors.pickupState?.message} required />
                )} />
              </View>
            </View>
            <Controller control={control} name="pickupZip" render={({ field }) => (
              <FormInput label="ZIP Code" placeholder="00000" keyboardType="numeric"
                value={field.value} onChangeText={field.onChange} error={errors.pickupZip?.message} required />
            )} />
          </View>

          {/* Delivery Details */}
          <SectionHeader title="Delivery Details" step={4} />
          <View style={styles.formSection}>
            <Controller control={control} name="medicationNotes" render={({ field }) => (
              <FormInput label="Medication / Package Notes" placeholder="e.g. Keep refrigerated, fragile"
                leftIcon="medical-outline" multiline numberOfLines={3} value={field.value}
                onChangeText={field.onChange} style={{ height: 80, textAlignVertical: 'top' }} />
            )} />
            <Controller control={control} name="driverInstructions" render={({ field }) => (
              <FormInput label="Driver Instructions" placeholder="e.g. Ring doorbell, leave at door"
                leftIcon="information-circle-outline" multiline numberOfLines={2}
                value={field.value} onChangeText={field.onChange}
                style={{ height: 64, textAlignVertical: 'top' }} />
            )} />
            <Controller control={control} name="codAmount" render={({ field }) => (
              <FormInput label="Cash on Delivery (USD)" placeholder="0.00" keyboardType="decimal-pad"
                leftIcon="cash-outline" value={field.value} onChangeText={field.onChange}
                hint="Leave 0 if no payment required" />
            )} />
          </View>

          <PrimaryButton
            title="Create Delivery Order"
            onPress={handleSubmit(onSubmit)}
            isLoading={isLoading}
            size="lg"
            style={styles.submitBtn}
          />

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  flex: { flex: 1 },
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 8,
  },
  stepBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  stepNumber: { color: Colors.white, fontSize: 12, fontWeight: '700' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: Colors.primaryNavy },
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
  flex2: { flex: 2 },
  flex1: { flex: 1 },
  submitBtn: { marginTop: 8 },
});
