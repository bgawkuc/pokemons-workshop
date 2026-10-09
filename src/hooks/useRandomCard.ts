import { useQuery } from '@tanstack/react-query'

import { get } from '../api/tcgdex'
import type { Card } from '../utils/types'

export function useRandomCard() {
  return useQuery({
    queryKey: ['randomCard'],
    queryFn: () => get<Card>('/random/card'),
  })
}
