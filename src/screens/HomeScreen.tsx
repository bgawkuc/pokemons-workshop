import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../theme/colors'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PokeCards App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
})
