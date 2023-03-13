import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    )
    return response.data
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        return
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        return
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return action.payload
      })
  }
})

export const selectAllCategories = state => state.categories
export default categoriesSlice.reducer
