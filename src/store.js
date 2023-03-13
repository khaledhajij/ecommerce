import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './features/products/categoriesSlice'
import productsSlice from './features/products/productsSlice'

const reducer = combineReducers({
    products: productsSlice,
    categories: categoriesSlice
})

const store = configureStore({ reducer: reducer })

export default store
