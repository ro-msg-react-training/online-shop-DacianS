import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'
import { productsReducer } from './reducers/products';
import { productDetailReducer } from './reducers/productDetail'

const rootReducer = combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer
});
const store = createStore(rootReducer);

export type StoreState = ReturnType<typeof rootReducer>


export default store;