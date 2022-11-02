import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: PokemonState = {
  cards: [],
  tmpCards: [],
  num: 36,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setCard: (state, {payload}: PayloadAction<PokemonCardType>) => {
      if (state.cards.length !== state.num) {
        state.cards.push(payload)
        state.tmpCards.push(payload)
      }
    },
    nameFilter: (state, {payload}: PayloadAction<string[]>) => {
      state.cards = payload.length ? state.tmpCards.filter((ele) =>
        payload.includes(`${ele.id} ${ele.name}`),
      ) : state.cards = state.tmpCards
    },
  },
})

export const {setCard, nameFilter} = pokemonSlice.actions
export default pokemonSlice.reducer
