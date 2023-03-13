import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async data => {
    const response = await axios.get(
      !data
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${data}`
    )
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: true },
  reducers: {
    sayHello: (state, action) => {
      console.log(action)
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log('rejected')
      return
    })
    builder.addCase(fetchProducts.pending, (state, action) => {
      console.log('hello2')
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log('hello')
      state.loading = false
      state.products = action.payload
    })
  }
})

export default productsSlice.reducer
export const { sayHello } = productsSlice.actions
export const selectAllProducts = state => state.products.products
export const selectProductsStatus = state => state.products.loading
