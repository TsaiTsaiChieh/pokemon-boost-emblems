interface PersistState {
  isDarkMode: boolean
}
interface PokemonState {
  cards: PokemonCardType[]
  // for keeping the original card
  tmpCards: readonly PokemonCardType[]
  pokemonList: readonly PokemonType[]
  num: number
}
