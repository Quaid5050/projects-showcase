import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TabBar } from '../../src/constants/layout';
import { useTabScreenOptions } from '../../src/constants/tabBarOptions';

export default function AdminLayout() {
  const tabScreenOptions = useTabScreenOptions(true);

  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => (
            <Ionicons name="receipt-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="patients"
        options={{
          title: 'Patients',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="drivers"
        options={{
          title: 'Drivers',
          tabBarIcon: ({ color }) => (
            <Ionicons name="car-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
