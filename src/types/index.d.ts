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
type FilterArrayField = {
  characters: number[] // ability
  categories: number[] // color
  levels: number[] // grade
}
type FilterType = FilterArrayField & {
  ids: string[]
  positive: boolean
}
