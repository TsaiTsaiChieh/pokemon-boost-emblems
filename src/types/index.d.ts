type LevelType = 1 | 2 | 3
type GradeType = 'bronze' | 'sliver' | 'gold'
type PokemonType = {
  id: string
  name: string
  categories: number[]
}
type AbilityType = {
  id: string
  lv: number
  positive: (number | string)[]
  negative: (number | string)[]
}
type PokemonCardType = PokemonType & AbilityType
type FilterType = {
  ids: string[]
  characters: number[]
  categories: number[]
  levels: number[]
  positive: boolean
}
type SearchOptionsType = {
  characters: string[]
  grades: string[]
  colors: string[]
}
