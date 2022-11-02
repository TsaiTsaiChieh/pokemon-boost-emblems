interface PersistState extends SearchOptionsType {
  isDarkMode: boolean
}
interface PokemonState {
  cards: PokemonCardType[]
  tmpCards: readonly PokemonCardType[] // keeping the original card
  pokemonList: readonly PokemonType[]
  total: readonly number
  filter: FilterType
}
