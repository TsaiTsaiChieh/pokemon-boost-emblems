import {combineReducers} from '@reduxjs/toolkit'

import persistReducer from './reducers/persistSlice'
import pokemonReducer from './reducers/pokemonSlice'

const rootReducer = combineReducers({
  persist: persistReducer,
  pokemon: pokemonReducer,
})

export default rootReducer
