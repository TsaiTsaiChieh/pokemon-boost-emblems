type LevelType = 1 | 2 | 3
type GradeType = 'bronze' | 'sliver' | 'gold'
type FilterArrayFieldType = 'characters' | 'categories' | 'levels'
type PokemonType = {
  id: string
  name: string
}
type AbilityType = {
  id: string
  lv: number
  positive: (number | string)[]
  negative: (number | string)[]
}
// Should rm name, due to it comes from useTranslation
type PokemonCardType = Omit<PokemonType & AbilityType, 'name'>
type FilterArrayField = {
  characters: number[] // ability
  categories: number[] // color
  levels: number[] // grade
}
type FilterType = FilterArrayField & {
  ids: string[]
  positive: boolean
}
