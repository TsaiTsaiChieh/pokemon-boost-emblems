interface PersistState {
  isDarkMode: boolean
  language: string
}
interface PokemonState {
  cards: PokemonCardType[]
  tmpCards: readonly PokemonCardType[] // keeping the original card
  total: readonly number
  filter: FilterType
  stat: {[key in FilterArrayFieldType]: number[]}
  reset: boolean
}
