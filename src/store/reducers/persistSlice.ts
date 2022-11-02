import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: PersistState = {
  isDarkMode: false,
  characters: [],
}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setCharacters: (state, {payload}: PayloadAction<string[]>) => {
      state.characters = payload
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const {setCharacters, toggleDarkMode} = persistSlice.actions
export default persistSlice.reducer
