import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { Colors } from '../../src/constants/colors';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { useDriverStore } from '../../src/store/driverStore';
import { Patient } from '../../src/types/order.types';
import { formatAddress } from '../../src/utils/formatters';

export default function RouteMapScreen() {
  const { tabBarHeight } = useLayoutInsets();
  const { assignedDeliveries } = useDriverStore();
  const [driverLocation, setDriverLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setDriverLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    })();
  }, []);

  const activeDelivery = assignedDeliveries.find((d) =>
    ['assigned', 'picked_up', 'on_the_way'].includes(d.status)
  );

  const patient = activeDelivery?.patientId as Patient | undefined;
  const deliveryCoords = activeDelivery?.deliveryAddress?.coordinates ||
    patient?.address?.coordinates;

  const openNavigation = () => {
    if (!deliveryCoords && !patient?.address) return;
    const addr = patient?.address || activeDelivery?.deliveryAddress;
    if (!addr) return;
    const query = encodeURIComponent(`${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`);
    const url =
      Platform.OS === 'ios'
        ? `maps://maps.apple.com/?q=${query}`
        : `geo:0,0?q=${query}`;
    Linking.openURL(url).catch(() => {
      Linking.openURL(`https://maps.google.com/?q=${query}`);
    });
  };

  const initialRegion = driverLocation
    ? {
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    : {
        latitude: 40.7128,
        longitude: -74.006,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Route Map</Text>
        {activeDelivery && (
          <TouchableOpacity style={styles.navBtn} onPress={openNavigation}>
            <Ionicons name="navigate" size={16} color={Colors.white} />
            <Text style={styles.navBtnText}>Navigate</Text>
          </TouchableOpacity>
        )}
      </View>

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Active delivery marker */}
        {deliveryCoords && (
          <Marker
            coordinate={{
              latitude: deliveryCoords.lat,
              longitude: deliveryCoords.lng,
            }}
            title={patient?.name || 'Delivery'}
            description={formatAddress(patient?.address || activeDelivery!.deliveryAddress)}
            pinColor={Colors.primaryBlue}
          />
        )}
      </MapView>

      {/* Active delivery card */}
      {activeDelivery && (
        <View style={[styles.deliveryCard, { paddingBottom: tabBarHeight }]}>
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryPatient}>
              {patient?.name || 'Patient'}
            </Text>
            <Text style={styles.deliveryAddress} numberOfLines={1}>
              {formatAddress(patient?.address || activeDelivery.deliveryAddress)}
            </Text>
          </View>
          <TouchableOpacity style={styles.directionsBtn} onPress={openNavigation}>
            <Ionicons name="navigate-circle" size={36} color={Colors.primaryBlue} />
          </TouchableOpacity>
        </View>
      )}

      {!activeDelivery && (
        <View style={[styles.noDelivery, { paddingBottom: tabBarHeight }]}>
          <Ionicons name="map-outline" size={24} color={Colors.textSecondary} />
          <Text style={styles.noDeliveryText}>No active delivery</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: { fontSize: 18, fontWeight: '700', color: Colors.primaryNavy },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primaryBlue,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  navBtnText: { color: Colors.white, fontSize: 13, fontWeight: '600' },
  map: { flex: 1 },
  deliveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  deliveryInfo: { flex: 1 },
  deliveryPatient: { fontSize: 15, fontWeight: '700', color: Colors.primaryNavy },
  deliveryAddress: { fontSize: 13, color: Colors.textSecondary, marginTop: 2 },
  directionsBtn: { marginLeft: 8 },
  noDelivery: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  noDeliveryText: { fontSize: 14, color: Colors.textSecondary },
});
