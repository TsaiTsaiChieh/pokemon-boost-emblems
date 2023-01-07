type LevelType = 1 | 2 | 3
type GradeType = 'C' | 'B' | 'A'
type FilterArrayFieldType = 'characters' | 'categories' | 'levels'
type PokemonType = {
  id: string
  name: string
  lv: number
}
type CategoryType = {
  categories: number[]
}
type AbilityType = {
  id: string
  positive?: number
  negative?: number
}
// Should rm name, due to it comes from useTranslation
type PokemonCardType = Omit<PokemonType & AbilityType & CategoryType, 'name'>
type FilterArrayField = {
  characters: number[] // ability
  categories: number[] // color
  levels: number[] // grade
}
type FilterType = FilterArrayField & {
  ids: string[]
  positive: boolean
}
