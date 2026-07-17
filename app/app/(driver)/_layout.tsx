import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TabBar } from '../../src/constants/layout';
import { useTabScreenOptions } from '../../src/constants/tabBarOptions';

export default function DriverLayout() {
  const tabScreenOptions = useTabScreenOptions(false);

  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          title: 'Deliveries',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bicycle-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => (
            <Ionicons name="map-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => (
            <Ionicons name="time-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={TabBar.iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="delivery" options={{ href: null }} />
      <Tabs.Screen name="proof" options={{ href: null }} />
      <Tabs.Screen name="failed-reason" options={{ href: null }} />
    </Tabs>
  );
}
