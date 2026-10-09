import { useQuery } from '@tanstack/react-query'

import { get } from '../api/tcgdex'
import type { Card } from '../utils/types'

export function useCard(id: string | null) {
  return useQuery({
    queryKey: ['card', id],
    queryFn: () => get<Card>(`/cards/${id}`),
    enabled: id !== null,
  })
}
