import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'

import type { CardBrief } from '../utils/types'

const COLLECTION_KEY = 'collection'

export function useCollection() {
  const [collection, setCollection] = useState<CardBrief[]>([])

  // reads on every focus, so the collection is fresh after coming back from card details
  useFocusEffect(
    useCallback(() => {
      const loadCollection = async () => {
        const saved = await AsyncStorage.getItem(COLLECTION_KEY)
        if (saved) {
          setCollection(JSON.parse(saved))
        }
      }

      loadCollection()
    }, []),
  )

  const toggleCard = async (card: CardBrief) => {
    const isSaved = collection.some((saved) => saved.id === card.id)
    const updatedCollection = isSaved
      ? collection.filter((saved) => saved.id !== card.id)
      : [...collection, card]

    setCollection(updatedCollection)
    await AsyncStorage.setItem(COLLECTION_KEY, JSON.stringify(updatedCollection))
  }

  return { collection, toggleCard }
}
