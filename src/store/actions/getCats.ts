import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCats = createAsyncThunk('cats/get', async (page: number) => {
  try {
    const res = await axios(
      `${import.meta.env.VITE_API_URL}&limit=10&page=${page}`
    )
    return res.data
  } catch (err) {
    console.log(err)
  }
})
