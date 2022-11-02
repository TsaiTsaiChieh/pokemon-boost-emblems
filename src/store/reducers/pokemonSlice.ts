import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: PokemonState = {
  cards: [],
  tmpCards: [],
  pokemonList: [], // unique
  total: 12, // total pokemon
  filter: {
    ids: [],
    characters: [],
    categories: [],
    levels: [],
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
        if (idx > 0) state.filter.characters.splice(idx, 1)
      }
    },
    setFilter: (state, {payload}: PayloadAction<FilterType>) => {
      state.filter = payload
      if (state.filter.ids) {
        state.cards = state.filter.ids.length ?
          state.tmpCards.filter((ele) =>
            payload.ids.includes(`${ele.id} ${ele.name}`),
          ) :
          state.tmpCards
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
