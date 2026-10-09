const BASE_URL = 'https://api.tcgdex.net/v2/en'

export async function get<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`)

  if (!response.ok) {
    throw new Error(`TCGdex responded with ${response.status}`)
  }

  return response.json()
}
