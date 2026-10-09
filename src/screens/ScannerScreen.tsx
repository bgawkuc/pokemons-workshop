import { CameraView, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { colors } from '../theme/colors'

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions()
  const [scannedId, setScannedId] = useState<string | null>(null)

  if (!permission) {
    return (
      <View style={styles.centered}>
        <Text>Loading</Text>
      </View>
    )
  }

  if (!permission.granted) {
    return (
      <View style={styles.centered}>
        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={{ color: colors.white }}>Allow camera access</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
      onBarcodeScanned={(result) => setScannedId(result.data)}
    />
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
})
