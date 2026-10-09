import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { useCard } from '../hooks/useCard'
import type { ScannerStackParamList } from '../navigation/types'
import { colors } from '../theme/colors'

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions()
  const [scannedId, setScannedId] = useState<string | null>(null)

  const navigation = useNavigation<NativeStackNavigationProp<ScannerStackParamList>>()
  const { data } = useCard(scannedId)

  const onPress = () => {
    if (data) {
      navigation.navigate('CardDetails', { id: data.id })
    }
  }

  const label = data ? `Go to ${data.name} details page` : 'Scan a correct card QR code'

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
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        onBarcodeScanned={(result) => setScannedId(result.data)}
      />
      <Pressable style={styles.overlay} onPress={onPress}>
        <Text style={{ color: colors.white }}>{label}</Text>
      </Pressable>
    </View>
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

  overlay: {
    position: 'absolute',
    bottom: 140,
    alignSelf: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
})
