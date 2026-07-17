import { Stack } from 'expo-router';
import { Colors } from '../../../src/constants/colors';

export default function PatientsStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="create" />
      <Stack.Screen name="[patientId]" />
    </Stack>
  );
}
