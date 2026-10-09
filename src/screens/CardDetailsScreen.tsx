import { useRoute, type RouteProp } from '@react-navigation/native'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { useCard } from '../hooks/useCard'
import type { HomeStackParamList } from '../navigation/types'
import { colors } from '../theme/colors'

export default function CardDetailsScreen() {
  const route = useRoute<RouteProp<HomeStackParamList, 'CardDetails'>>()
  const { data: card, isPending, isError } = useCard(route.params.id)

  if (isPending) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator />
      </View>
    )
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text>Could not load card</Text>
      </View>
    )
  }

  return (
    <View style={styles.content}>
      <Text style={styles.name}>{card.name}</Text>

      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: `${card.image}/high.webp` }} style={styles.image} />
      </View>

      <InfoRow label="Set" value={card.set.name} />
      <InfoRow label="Rarity" value={card.rarity} />
      {card.hp && <InfoRow label="HP" value={String(card.hp)} />}
      {card.types && <InfoRow label="Types" value={card.types.join(', ')} />}
      {card.illustrator && <InfoRow label="Illustrator" value={card.illustrator} />}
    </View>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={{ color: colors.grey }}>{label}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
    gap: 16,
  },
  image: {
    width: 250,
    aspectRatio: 0.72,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
