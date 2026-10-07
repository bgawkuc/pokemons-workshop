import { useQuery } from '@tanstack/react-query'

import { get } from '../api/tcgdex'
import type { CardBrief } from '../utils/types'

export function useCards() {
  return useQuery({
    queryKey: ['cards'],
    // `image=https` filter keeps only cards that have an image
    queryFn: () => get<CardBrief[]>(`?image=https&pagination:page=2&pagination:itemsPerPage=30`),
  })
}
