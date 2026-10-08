import { Image, StyleSheet, Text, View } from 'react-native'

import { colors } from '../theme/colors'
import type { CardBrief } from '../utils/types'

type Props = {
  card: CardBrief
}

export default function PokemonCard({ card }: Props) {
  return (
    <View style={styles.tile}>
      <Image
        // TCGdex image URLs have no extension - the quality and format are the last two segments.
        source={{ uri: `${card.image}/high.webp` }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name} numberOfLines={2}>
        {card.name}
      </Text>
    </View>
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
