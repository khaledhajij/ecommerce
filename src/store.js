import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './features/products/productsSlice'

const store = configureStore({ reducer: productsSlice })

export default store
