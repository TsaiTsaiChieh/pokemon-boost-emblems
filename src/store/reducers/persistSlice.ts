import {createSlice} from '@reduxjs/toolkit'

const initialState: PersistState = {
  isDarkMode: false,
}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const {toggleDarkMode} = persistSlice.actions
export default persistSlice.reducer
