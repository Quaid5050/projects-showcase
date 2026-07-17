import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import { FormInput } from '../../../src/components/ui/FormInput';
import { PrimaryButton } from '../../../src/components/ui/PrimaryButton';
import { Colors } from '../../../src/constants/colors';
import { orderService } from '../../../src/services/orderService';
import { useOrderStore } from '../../../src/store/orderStore';

export default function ProofOfDeliveryScreen() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const { selectedOrder, fetchOrderById } = useOrderStore();

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [signedBy, setSignedBy] = useState('');
  const [notes, setNotes] = useState('');
  const [codCollected, setCodCollected] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (orderId) fetchOrderById(orderId);
    getLocation();
  }, [orderId]);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
    setLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude });
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Allow photo access to upload proof of delivery.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsEditing: true,
    });
    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Allow camera access to capture proof of delivery.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      allowsEditing: true,
    });
    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!imageUri) {
      Alert.alert('Photo required', 'Please capture or select a proof-of-delivery photo.');
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();

      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: `proof-${orderId}.jpg`,
      } as unknown as Blob);

      formData.append('type', 'photo');
      if (signedBy) formData.append('signedBy', signedBy);
      if (notes) formData.append('notes', notes);
      if (location) {
        formData.append('latitude', String(location.lat));
        formData.append('longitude', String(location.lng));
      }

      await orderService.submitProof(orderId!, formData);

      Alert.alert('Delivery Complete', 'Proof of delivery submitted successfully!', [
        { text: 'Done', onPress: () => router.replace('/(driver)/home') },
      ]);
    } catch (e: unknown) {
      Alert.alert('Error', e instanceof Error ? e.message : 'Failed to submit proof');
    } finally {
      setSubmitting(false);
    }
  };

  const hasCOD = selectedOrder && selectedOrder.codAmount > 0;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Proof of Delivery</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        {/* Photo Capture */}
        <Text style={styles.sectionTitle}>📸  Capture Photo</Text>
        {imageUri ? (
          <View style={styles.previewContainer}>
            <Image source={{ uri: imageUri }} style={styles.preview} />
            <TouchableOpacity onPress={() => setImageUri(null)} style={styles.removePhoto}>
              <Ionicons name="close-circle" size={24} color={Colors.errorRed} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.photoActions}>
            <TouchableOpacity style={styles.photoBtn} onPress={takePhoto}>
              <Ionicons name="camera" size={28} color={Colors.primaryBlue} />
              <Text style={styles.photoBtnText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoBtn} onPress={pickImage}>
              <Ionicons name="image" size={28} color={Colors.primaryBlue} />
              <Text style={styles.photoBtnText}>Choose from Library</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* GPS */}
        <View style={styles.gpsRow}>
          <Ionicons
            name={location ? 'location' : 'location-outline'}
            size={16}
            color={location ? Colors.successGreen : Colors.textSecondary}
          />
          <Text style={[styles.gpsText, location && styles.gpsActive]}>
            {location
              ? `GPS: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
              : 'Acquiring GPS location...'}
          </Text>
        </View>

        {/* Signature / Signed By */}
        <FormInput
          label="Received By (optional)"
          placeholder="Enter recipient's name"
          leftIcon="person-outline"
          value={signedBy}
          onChangeText={setSignedBy}
        />

        {/* COD Collection */}
        {hasCOD && (
          <View style={styles.codSection}>
            <View style={styles.codHeader}>
              <Ionicons name="cash" size={18} color={Colors.warningAmber} />
              <Text style={styles.codTitle}>
                Collect ${selectedOrder.codAmount.toFixed(2)} Cash
              </Text>
            </View>
            <FormInput
              label="Amount Collected"
              placeholder={String(selectedOrder.codAmount)}
              keyboardType="decimal-pad"
              leftIcon="cash-outline"
              value={codCollected}
              onChangeText={setCodCollected}
              hint="Enter the amount you collected from the patient"
            />
          </View>
        )}

        {/* Notes */}
        <FormInput
          label="Notes (optional)"
          placeholder="Any delivery notes..."
          multiline
          numberOfLines={3}
          value={notes}
          onChangeText={setNotes}
          style={{ height: 80, textAlignVertical: 'top' }}
        />

        {/* Submit */}
        <PrimaryButton
          title="Submit Proof & Complete Delivery"
          onPress={handleSubmit}
          isLoading={submitting}
          size="lg"
          style={styles.submitBtn}
        />

        <View style={{ height: 40 }} />
      </ScrollView>
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
    paddingVertical: 16,
    backgroundColor: Colors.primaryNavy,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: Colors.white },
  scroll: { padding: 20 },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryNavy,
    marginBottom: 12,
  },
  previewContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  preview: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  removePhoto: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
  photoActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  photoBtn: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.primaryBlue,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 8,
    borderStyle: 'dashed',
  },
  photoBtnText: { fontSize: 12, color: Colors.primaryBlue, fontWeight: '600', textAlign: 'center' },
  gpsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  gpsText: { fontSize: 12, color: Colors.textSecondary },
  gpsActive: { color: Colors.successGreen },
  codSection: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  codHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  codTitle: { fontSize: 15, fontWeight: '700', color: Colors.warningAmber },
  submitBtn: { marginTop: 8 },
});
