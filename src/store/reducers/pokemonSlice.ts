import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

import abilities from '../../constants/abilities.json'

const initialState: PokemonState = {
  cards: [],
  tmpCards: [],
  pokemonList: [], // unique
  total: abilities.length / 3, // total pokemon
  filter: {
    ids: [],
    characters: [],
    categories: [],
    levels: [],
    positive: true,
  },
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, {payload}: PayloadAction<PokemonType[]>) => {
      state.pokemonList = payload
    },
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
    setCharactersFilter: (
      state,
      {payload}: PayloadAction<{id: number; active: boolean}>,
    ) => {
      const {id, active} = payload
      if (active) {
        state.filter.characters.push(id)
      } else {
        const idx = state.filter.characters.indexOf(id)
        if (idx > -1) state.filter.characters.splice(idx, 1)
      }
    },
    setFilter: (state, {payload}: PayloadAction<FilterType>) => {
      const {ids, characters, positive} = payload
      state.filter = payload
      state.cards = state.tmpCards
      if (ids.length) {
        state.cards = state.cards.filter((ele) =>
          ids.includes(`${ele.id} ${ele.name}`),
        )
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
    },
  },
})

export const {
  setPokemonList,
  setCard,
  nameFilter,
  setCharactersFilter,
  setFilter,
} = pokemonSlice.actions
export default pokemonSlice.reducer
