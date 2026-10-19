import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import PokemonCard from '../components/PokemonCard'
import { useCollection } from '../hooks/useCollection'
import { useListInsets } from '../hooks/useListInsets'
import type { CollectionStackParamList } from '../navigation/types'

export default function CollectionScreen() {
  const { collection } = useCollection()
  const listInsets = useListInsets()
  const navigation = useNavigation<NativeStackNavigationProp<CollectionStackParamList>>()

  const onPress = (id: string) => {
    navigation.navigate('CardDetails', { id })
  }

  if (collection.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>No cards in collection</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={collection}
      keyExtractor={(card) => card.id}
      numColumns={2}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={[styles.list, { paddingBottom: listInsets.paddingBottom }]}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <PokemonCard card={item} onPress={onPress} />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 4,
  },
  item: {
    width: '50%',
    padding: 8,
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
