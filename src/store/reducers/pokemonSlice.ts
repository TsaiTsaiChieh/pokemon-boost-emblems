import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

import abilities from '../../constants/abilities.json'

const Level = 3
const basicCards: PokemonCardType[] = abilities
  .map((ability) =>
    // for level
    Array.from({length: Level}).map((_, lv) => ({
      ...ability,
      lv: lv + 1,
    })),
  )
  .flat()

const initialState: PokemonState = {
  cards: basicCards,
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
      (_, i) => abilities.filter((ele) => ele.positive === i).length,
    ),
    categories: Array.from(
      {length: 10},
      (_, i) =>
      basicCards.filter((ele) => ele.categories.includes(i)).length * 3,
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
      state.filter = initialState.filter
    },
    searchCards: (state, {payload}: PayloadAction<FilterType>) => {
      const {ids, characters, positive, levels, categories} = payload
      state.filter = payload
      state.cards = initialState.cards
        .filter((ele) => (!ids.length ? ele : ids.includes(ele.id)))
        .filter((ele) =>
          !characters.length ?
            ele :
            characters.includes(
                // due to positive or negative prop might be undefined
                positive ? ele.positive ?? -1 : ele.negative ?? -1,
              ),
        )
        .filter((ele) => (!levels.length ? ele : levels.includes(ele.lv - 1)))
        .filter((ele) =>
          !categories.length ?
            ele :
            categories.includes(ele.categories[0]) ||
              categories.includes(ele.categories[1]),
        )
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
            state.filter.positive ? ele.positive === i : ele.negative === i,
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

export const {toggleSubFilterById, resetFilter, searchCards} =
  pokemonSlice.actions
export default pokemonSlice.reducer
