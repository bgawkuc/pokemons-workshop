import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native'

import { useRandomCard } from '../hooks/useRandomCard'
import { colors } from '../theme/colors'

export default function DiscoverScreen() {
  const { data, refetch, isFetching } = useRandomCard()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {data && !isFetching ? (
          <>
            <Image
              source={{ uri: `${data.image}/high.webp` }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.name}>{data.name}</Text>
          </>
        ) : (
          <ActivityIndicator size="large" color={colors.white} />
        )}
      </View>

      <Pressable style={styles.button} onPress={() => refetch()} disabled={isFetching}>
        <Text style={styles.buttonText}>Get new card</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  card: {
    width: 300,
    minHeight: 440,
    justifyContent: 'center',
    padding: 16,
    gap: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  image: {
    width: '100%',
    aspectRatio: 0.72,
    borderRadius: 16,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.grey,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
  },
})
