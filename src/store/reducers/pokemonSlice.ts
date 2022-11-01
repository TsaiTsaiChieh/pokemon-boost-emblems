import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: PokemonState = {
  cards: [],
  num: 36,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setCard: (state, {payload}: PayloadAction<PokemonCardType>) => {
      if (state.cards.length !== state.num) {
        state.cards.push(payload)
      }
    },
    nameFilter: (state, {payload}: PayloadAction<string[]>) => {
      state.cards = state.cards.filter((ele) =>
        payload.includes(`${ele.id} ${ele.name}`),
      )
    },
  },
})

export const {setCard, nameFilter} = pokemonSlice.actions
export default pokemonSlice.reducer
