import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState: PersistState = {
  isDarkMode: false,
  characters: [],
  grades: [],
  colors: [],
}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setSearchOptions: (state, {payload}: PayloadAction<SearchOptionsType>) => {
      state.characters = payload.characters
      state.grades = payload.grades
      state.colors = payload.colors
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const {setSearchOptions, toggleDarkMode} = persistSlice.actions
export default persistSlice.reducer
