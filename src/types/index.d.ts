type LevelType = '1' | '2' | '3'
type GradeType = 'bronze' | 'sliver' | 'gold'
type PokemonType = {
  id: string
  name: string
  categories: number[]
}
type AbilityType = {
  id: string
  lv: LevelType
  positive: string
  negative: string
}


