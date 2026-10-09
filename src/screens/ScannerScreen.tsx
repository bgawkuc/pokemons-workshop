import { StyleSheet, Text, View } from 'react-native'

export default function ScannerScreen() {
  return (
    <View style={styles.centered}>
      <Text>Scanner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
