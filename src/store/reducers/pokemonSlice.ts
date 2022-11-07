import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

import abilities from '../../constants/abilities.json'

const total = abilities.length / 3
const initialState: PokemonState = {
  cards: [],
  tmpCards: [],
  total, // total pokemon
  filter: {
    ids: [],
    characters: [],
    categories: [],
    levels: [],
    positive: true,
  },
  stat: {
    characters: new Array(8).fill(0),
    categories: new Array(9).fill(0),
    levels: new Array(3).fill(total),
  },
  reset: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setCard: (state, {payload}: PayloadAction<PokemonCardType>) => {
      if (state.cards.length !== state.total * 3) {
        state.cards.push(payload)
        state.tmpCards.push(payload)
      }
    },
    nameFilter: (state, {payload}: PayloadAction<string[]>) => {
      state.cards = payload.length ?
        state.tmpCards.filter((ele) =>
          payload.includes(`${ele.id} ${ele.name}`),
        ) :
        (state.cards = state.tmpCards)
    },
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
    setReset: (state, {payload}: PayloadAction<boolean>) => {
      state.reset = payload
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
  setCard,
  nameFilter,
  toggleSubFilterById,
  setReset,
  resetFilter,
  setFilter,
} = pokemonSlice.actions
export default pokemonSlice.reducer
