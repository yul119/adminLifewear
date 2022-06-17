import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import usersSlice from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    usersReducer: usersSlice.reducer,
    productsReducer: productsSlice.reducer
  },
})
