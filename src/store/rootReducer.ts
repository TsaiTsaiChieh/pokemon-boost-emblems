import {combineReducers} from '@reduxjs/toolkit'

import persistReducer from './reducers/persistSlice'

const rootReducer = combineReducers({
  persist: persistReducer,
})

export default rootReducer
