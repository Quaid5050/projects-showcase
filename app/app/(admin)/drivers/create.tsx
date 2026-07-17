import React from 'react';
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
import { driverService } from '../../../src/services/driverService';

const VEHICLE_TYPES = ['car', 'bike', 'van', 'motorcycle'] as const;

const createDriverSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Phone is required'),
  vehicleType: z.enum(['car', 'bike', 'van', 'motorcycle'], {
    required_error: 'Select a vehicle type',
  }),
  vehicleNumber: z.string().min(2, 'Vehicle number is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type CreateDriverForm = z.infer<typeof createDriverSchema>;

export default function CreateDriverScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateDriverForm>({
    resolver: zodResolver(createDriverSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      vehicleType: 'car',
      vehicleNumber: '',
      password: '',
    },
  });

  const selectedVehicle = watch('vehicleType');

  const onSubmit = async (data: CreateDriverForm) => {
    try {
      await driverService.createDriver(data);
      Alert.alert('Driver Created', `${data.name} has been added as a driver.`, [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Failed to create driver';
      Alert.alert('Error', msg);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Driver</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Personal Info */}
          <Text style={styles.sectionLabel}>Personal Information</Text>
          <View style={styles.section}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <FormInput
                  label="Full Name"
                  placeholder="John Driver"
                  leftIcon="person-outline"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.name?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <FormInput
                  label="Email"
                  placeholder="driver@pharmacy.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  leftIcon="mail-outline"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.email?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <FormInput
                  label="Phone"
                  placeholder="+1 555 000 0000"
                  keyboardType="phone-pad"
                  leftIcon="call-outline"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.phone?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <FormInput
                  label="Password"
                  placeholder="Min 8 characters"
                  secureTextEntry
                  leftIcon="lock-closed-outline"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.password?.message}
                  hint="Driver will use this to log in"
                  required
                />
              )}
            />
          </View>

          {/* Vehicle Info */}
          <Text style={styles.sectionLabel}>Vehicle Information</Text>
          <View style={styles.section}>
            {/* Vehicle type selector */}
            <Text style={styles.fieldLabel}>
              Vehicle Type <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.vehicleRow}>
              {VEHICLE_TYPES.map((type) => {
                const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
                  car: 'car-outline',
                  bike: 'bicycle-outline',
                  van: 'bus-outline',
                  motorcycle: 'bicycle-outline',
                };
                const isSelected = selectedVehicle === type;
                return (
                  <TouchableOpacity
                    key={type}
                    onPress={() => setValue('vehicleType', type)}
                    style={[styles.vehicleCard, isSelected && styles.vehicleCardSelected]}
                  >
                    <Ionicons
                      name={icons[type]}
                      size={22}
                      color={isSelected ? Colors.white : Colors.textSecondary}
                    />
                    <Text
                      style={[
                        styles.vehicleLabel,
                        isSelected && styles.vehicleLabelSelected,
                      ]}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {errors.vehicleType && (
              <Text style={styles.errorText}>{errors.vehicleType.message}</Text>
            )}

            <Controller
              control={control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormInput
                  label="Vehicle / Plate Number"
                  placeholder="NYC-1234"
                  autoCapitalize="characters"
                  leftIcon="barcode-outline"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.vehicleNumber?.message}
                  required
                />
              )}
            />
          </View>

          <PrimaryButton
            title="Create Driver Account"
            onPress={handleSubmit(onSubmit)}
            isLoading={isSubmitting}
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
  sectionLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryNavy,
    marginBottom: 10,
    marginTop: 4,
  },
  section: {
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
  fieldLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  required: { color: Colors.errorRed },
  vehicleRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  vehicleCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
    gap: 4,
  },
  vehicleCardSelected: {
    backgroundColor: Colors.primaryBlue,
    borderColor: Colors.primaryBlue,
  },
  vehicleLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  vehicleLabelSelected: {
    color: Colors.white,
  },
  errorText: {
    fontSize: 12,
    color: Colors.errorRed,
    marginTop: -10,
    marginBottom: 12,
  },
  submitBtn: { marginTop: 4 },
});
