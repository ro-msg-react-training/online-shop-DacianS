import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './reducers/products';

const store = configureStore({
    reducer: productsReducer
})

export type ProductsState = ReturnType<typeof productsReducer>

export default store;