import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: [''],
  reducers: {
    sayHello: (state, action) => {
      console.log(action)
    }
  }
})

export default productsSlice.reducer
export const { sayHello } = productsSlice.actions
