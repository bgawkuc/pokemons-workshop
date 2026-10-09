import { Image, Pressable, StyleSheet, Text } from 'react-native'

import { colors } from '../theme/colors'
import type { CardBrief } from '../utils/types'

type Props = {
  card: CardBrief
  onPress: (id: string) => void
}

export default function PokemonCard({ card, onPress }: Props) {
  return (
    <Pressable style={styles.tile} onPress={() => onPress(card.id)}>
      <Image
        // TCGdex image URLs have no extension - the quality and format are the last two segments.
        source={{ uri: `${card.image}/high.webp` }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name} numberOfLines={2}>
        {card.name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 0.72,
    borderRadius: 4,
    backgroundColor: colors.offWhite,
  },
  name: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
})
