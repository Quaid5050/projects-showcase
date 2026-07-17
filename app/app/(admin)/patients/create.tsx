import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormInput } from '../../../src/components/ui/FormInput';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { ScreenContainer } from '../../../src/components/ui/ScreenContainer';
import { ScreenHeader } from '../../../src/components/ui/ScreenHeader';
import { Layout } from '../../../src/constants/layout';
import { useLayoutInsets } from '../../../src/hooks/useLayoutInsets';
import { patientService } from '../../../src/services/patientService';
import { getErrorMessage } from '../../../src/services/api';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(7, 'Phone is required'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  street: z.string().min(3, 'Street is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z.string().min(4, 'ZIP is required'),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CreatePatientScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useLayoutInsets();
  const [saving, setSaving] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      notes: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setSaving(true);
    try {
      await patientService.createPatient({
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        address: {
          street: data.street,
          city: data.city,
          state: data.state,
          zip: data.zip,
        },
        notes: data.notes,
      });
      Alert.alert('Success', 'Patient created successfully.');
      router.back();
    } catch (e) {
      Alert.alert('Error', getErrorMessage(e));
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Add Patient"
        subtitle="New patient record"
        onBack={() => router.back()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={[styles.scroll, { paddingBottom: scrollPaddingBottom }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="Full Name" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.name?.message} required leftIcon="person-outline" />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="Phone" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.phone?.message} required keyboardType="phone-pad" leftIcon="call-outline" />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="Email" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.email?.message} keyboardType="email-address" autoCapitalize="none" leftIcon="mail-outline" />
            )}
          />
          <Controller
            control={control}
            name="street"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="Street" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.street?.message} required leftIcon="location-outline" />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="City" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.city?.message} required />
            )}
          />
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="State" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.state?.message} required />
            )}
          />
          <Controller
            control={control}
            name="zip"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="ZIP Code" value={value} onChangeText={onChange} onBlur={onBlur} error={errors.zip?.message} required keyboardType="numeric" />
            )}
          />
          <Controller
            control={control}
            name="notes"
            render={({ field: { onChange, value, onBlur } }) => (
              <FormInput label="Delivery Notes" value={value} onChangeText={onChange} onBlur={onBlur} multiline numberOfLines={3} leftIcon="document-text-outline" />
            )}
          />
          <PrimaryButton title="Create Patient" onPress={handleSubmit(onSubmit)} isLoading={saving} size="lg" />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: {
    paddingHorizontal: Layout.contentPadding,
    paddingTop: 4,
  },
});
