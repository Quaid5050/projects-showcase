import { useEffect } from 'react';
import { Stack, useRouter, useSegments, useRootNavigationState } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { useAuthStore } from '../src/store/authStore';

export default function RootLayout() {
  const { isAuthenticated, user, isLoading, loadStoredAuth } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    loadStoredAuth();
  }, []);

  useEffect(() => {
    if (!navigationState?.key || isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const onIndex = !segments[0];

    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (isAuthenticated && (inAuthGroup || onIndex)) {
      router.replace(user?.role === 'driver' ? '/(driver)/home' : '/(admin)/dashboard');
    } else if (isAuthenticated) {
      const isDriver = user?.role === 'driver';
      if (isDriver && segments[0] === '(admin)') router.replace('/(driver)/home');
      else if (!isDriver && segments[0] === '(driver)') router.replace('/(admin)/dashboard');
    }
  }, [navigationState?.key, isAuthenticated, isLoading, user?.role, segments]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
