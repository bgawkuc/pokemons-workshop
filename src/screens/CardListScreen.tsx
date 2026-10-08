import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

import PokemonCard from '../components/PokemonCard'
import { useCards } from '../hooks/useCards'
import { useListInsets } from '../hooks/useListInsets'

export default function CardListScreen() {
  const { data: cards, isPending, isError } = useCards()
  const listInsets = useListInsets()

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
        <Text style={styles.message}>Could not load cards</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={cards}
      keyExtractor={(card) => card.id}
      numColumns={2}
      contentInsetAdjustmentBehavior="automatic"
      scrollIndicatorInsets={{ right: 1 }}
      contentContainerStyle={[styles.list, listInsets]}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => <PokemonCard card={item} />}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
    gap: 16,
  },
  row: {
    gap: 16,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 17,
    fontWeight: '600',
  },
})
