import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    usersReducer: usersSlice.reducer
  },
})
