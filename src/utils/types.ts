/** Card as it comes back from the card list endpoint */
export type CardBrief = {
  id: string
  // optional, because a card saved to the collection comes from the single card endpoint
  localId?: string
  name: string
  image: string
}

/** Card as it comes back from the single card endpoint */
export type Card = {
  id: string
  name: string
  image: string
  rarity: string
  illustrator?: string
  hp?: number
  types?: string[]
  set: {
    name: string
  }
}
