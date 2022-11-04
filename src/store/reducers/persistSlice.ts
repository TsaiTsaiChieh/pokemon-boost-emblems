import {createSlice} from '@reduxjs/toolkit'

const initialState: PersistState = {
  isDarkMode: false,
  language: 'zh',
}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
    toggleLanguage: (state) => {
      state.language = state.language === 'zh' ? 'en' : 'zh'
    },
  },
})

export const {toggleDarkMode, toggleLanguage} = persistSlice.actions
export default persistSlice.reducer
