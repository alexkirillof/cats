import { createSlice } from '@reduxjs/toolkit'
import { getCats } from '../actions/getCats.ts'
import { RootState } from '..'

export interface ICat {
  id: string
  url: string
  width: number
  height: number
}

export interface ICats {
  favorites: ICat[]
  cats: ICat[]
  loading: boolean
  error: string
  page: number
}

const initialState: ICats = {
  favorites: [],
  cats: [],
  loading: true,
  error: '',
  page: 0
}

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    addCatToFav: (state, { payload }) => {
      let newFav = [...state.favorites]
      const found = state.favorites.find(({ id }) => id === payload.id)

      if (found) {
        newFav = newFav.map((item) => {
          return item
        })
      } else newFav.push({ ...payload })

      state.favorites = newFav
    },

    removeCatFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload.id)
    },
    setPage: (state, { payload }) => {
      state.page = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getCats.fulfilled, (state, action) => {
      state.cats = [...state.cats, ...action.payload]
      state.loading = false
    })
    builder.addCase(getCats.rejected, (state) => {
      state.loading = false
    })
  }
})
export const { addCatToFav, removeCatFromFav, setPage } = catsSlice.actions
export const cats = (state: RootState) => state.cats

export default catsSlice.reducer
