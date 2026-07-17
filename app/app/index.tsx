import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../src/constants/colors';

/**
 * Splash screen — the root layout handles all auth-based redirects.
 * This screen shows briefly while stored auth is being loaded.
 */
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.logoIcon}>💊</Text>
        </View>
        <Text style={styles.appName}>PharmaDeliver</Text>
        <Text style={styles.tagline}>Medication delivery, simplified</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryNavy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    fontSize: 40,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 8,
  },
});
