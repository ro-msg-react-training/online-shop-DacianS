import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import { productsReducer } from './reducers/products';
import { productDetailReducer } from './reducers/productDetail'
import { productInputReducer } from './reducers/productInput'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/saga"

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer,
    productInput: productInputReducer
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export type StoreState = ReturnType<typeof rootReducer>


export default store;