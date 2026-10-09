import * as Sharing from 'expo-sharing'
import { useRef } from 'react'
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ViewShot, { type ViewShotRef } from 'react-native-view-shot'

import { useRandomCard } from '../hooks/useRandomCard'
import { colors } from '../theme/colors'

export default function DiscoverScreen() {
  const { data, refetch, isFetching } = useRandomCard()
  const viewShotRef = useRef<ViewShotRef>(null)

  const onShare = async () => {
    const uri = await viewShotRef.current?.capture()
    if (uri) {
      await Sharing.shareAsync(uri, { mimeType: 'image/png' })
    }
  }

  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef} style={styles.card}>
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
      </ViewShot>

      <Pressable style={styles.button} onPress={() => refetch()} disabled={isFetching}>
        <Text style={styles.buttonText}>Get new card</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onShare} disabled={!data || isFetching}>
        <Text style={styles.buttonText}>Share card</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    paddingTop: 24,
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
    width: 200,
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.grey,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    alignSelf: 'center',
  },
})
