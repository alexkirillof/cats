import { configureStore } from '@reduxjs/toolkit'
import catsReducer from './slices/catsSlice.ts'

export const store = configureStore({
  reducer: {
    cats: catsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
