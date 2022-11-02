interface PersistState {
  isDarkMode: boolean
  characters: string[]
}
interface PokemonState {
  cards: PokemonCardType[]
  // for keeping the original card
  tmpCards: readonly PokemonCardType[]
  pokemonList: readonly PokemonType[]
  total: readonly number
  filter: FilterType
}
