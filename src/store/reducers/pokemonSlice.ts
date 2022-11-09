import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

import abilities from '../../constants/abilities.json'
import categories from '../../constants/categories.json'

const basicCards: PokemonCardType[] = abilities.map((ele: AbilityType) => {
  const pokedex = parseInt(ele.id) - 1
  return {
    ...ele,
    categories: categories[pokedex].categories,
  }
})
const initialState: PokemonState = {
  cards: basicCards,
  tmpCards: basicCards,
  filter: {
    ids: [],
    characters: [],
    categories: [],
    levels: [],
    positive: true,
  },
  stat: {
    characters: Array.from(
      {length: 8},
      (_, i) => abilities.filter((ele) => ele.positive[0] === i).length,
    ),
    categories: Array.from(
      {length: 10},
      (_, i) =>
        categories.filter((ele) => ele.categories.includes(i)).length * 3,
    ),
    levels: new Array(3).fill(abilities.length / 3),
  },
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleSubFilterById: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number
        active: boolean
        subFilterName: keyof FilterArrayField
      }>,
    ) => {
      const {id, active, subFilterName} = payload
      if (active) {
        state.filter[subFilterName].push(id)
      } else {
        const idx = state.filter[subFilterName].indexOf(id)
        if (idx > -1) state.filter[subFilterName].splice(idx, 1)
      }
    },
    resetFilter: (state) => {
      state.cards = state.tmpCards
      state.filter = initialState.filter
    },
    setFilter: (state, {payload}: PayloadAction<FilterType>) => {
      const {ids, characters, positive, levels, categories} = payload
      state.filter = payload
      state.cards = state.tmpCards
      if (ids.length) {
        state.cards = state.cards.filter((ele) => ids.includes(ele.id))
      }
      if (characters.length) {
        state.cards = state.cards.filter((ele) =>
          characters.includes(
            positive ?
              (ele.positive[0] as number) :
              (ele.negative[0] as number),
          ),
        )
      }
      if (levels.length) {
        state.cards = state.cards.filter((ele) => levels.includes(ele.lv - 1))
      }
      if (categories.length) {
        state.cards = state.cards.filter(
          (ele) =>
            categories.includes(ele.categories[0]) ||
            categories.includes(ele.categories[1]),
        )
      }
      for (let i = 0; i < 10; i++) {
        // grades
        if (i < 3) {
          state.stat.levels[i] = state.cards.filter(
            (ele) => ele.lv === i + 1,
          ).length
        }
        // ability
        if (i < 8) {
          state.stat.characters[i] = state.cards.filter((ele) =>
            state.filter.positive ?
              ele.positive[0] === i :
              ele.negative[0] === i,
          ).length
        }
        // color
        state.stat.categories[i] = state.cards.filter((ele) =>
          ele.categories.includes(i),
        ).length
      }
    },
  },
})

export const {
  toggleSubFilterById,
  resetFilter,
  setFilter,
} = pokemonSlice.actions
export default pokemonSlice.reducer
