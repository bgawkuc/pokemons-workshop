import { useRoute, type RouteProp } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

import type { HomeStackParamList } from '../navigation/types'

export default function CardDetailsScreen() {
  const route = useRoute<RouteProp<HomeStackParamList, 'CardDetails'>>()
  const { id } = route.params

  return (
    <View style={styles.centered}>
      <Text>Pokemon id: {id}</Text>
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
