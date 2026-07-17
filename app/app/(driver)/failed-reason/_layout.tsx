import { Stack } from 'expo-router';
import { Colors } from '../../../src/constants/colors';

export default function FailedReasonStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }}>
      <Stack.Screen name="[orderId]" />
    </Stack>
  );
}
