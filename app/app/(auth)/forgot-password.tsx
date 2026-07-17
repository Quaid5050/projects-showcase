import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FormInput } from '../../src/components/ui/FormInput';
import { PrimaryButton } from '../../src/components/ui/PrimaryButton';
import { Colors } from '../../src/constants/colors';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Ionicons name="lock-open-outline" size={56} color={Colors.primaryBlue} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email and we'll send you a reset link. (Email sending is not
          implemented in this MVP.)
        </Text>

        <FormInput
          label="Email"
          placeholder="you@pharmacy.com"
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon="mail-outline"
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.input}
        />

        <PrimaryButton
          title="Send Reset Link"
          onPress={() => {
            // Placeholder — no email service in MVP
            router.back();
          }}
          size="lg"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  back: {
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primaryNavy,
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    marginBottom: 24,
  },
});
