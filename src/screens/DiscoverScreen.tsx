import * as Sharing from 'expo-sharing'
import { useRef, useState } from 'react'
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ViewShot, { type ViewShotRef } from 'react-native-view-shot'

import { useRandomCard } from '../hooks/useRandomCard'
import { colors } from '../theme/colors'

const BACKGROUNDS = [colors.primary, colors.danger, colors.grey]

export default function DiscoverScreen() {
  const { data, refetch, isFetching } = useRandomCard()
  const [background, setBackground] = useState(colors.primary)
  const viewShotRef = useRef<ViewShotRef>(null)

  const onShare = async () => {
    const uri = await viewShotRef.current?.capture()
    if (uri) {
      await Sharing.shareAsync(uri, { mimeType: 'image/png' })
    }
  }

  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef} style={[styles.card, { backgroundColor: background }]}>
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

      <View style={styles.circlesContainer}>
        {BACKGROUNDS.map((color) => (
          <Pressable
            key={color}
            style={[
              styles.circle,
              { backgroundColor: color },
              color === background && styles.circleSelected,
            ]}
            onPress={() => setBackground(color)}
          />
        ))}
      </View>

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
  },
  circlesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  circleSelected: {
    borderWidth: 3,
    borderColor: colors.black,
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
