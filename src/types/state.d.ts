interface PersistState {
  isDarkMode: boolean
  language: string
}
interface PokemonState {
  cards: PokemonCardType[]
  filter: FilterType
  stat: {[key in FilterArrayFieldType]: number[]}
}
