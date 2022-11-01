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
  },
})

export const {setCard} = pokemonSlice.actions
export default pokemonSlice.reducer
