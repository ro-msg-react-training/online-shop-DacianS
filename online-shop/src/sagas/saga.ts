import { all, takeLatest, put, call } from "redux-saga/effects";
import { readProductsSuccess } from "../actions/products"
import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAIL, FETCH_DELETE_PRODUCT, FetchProductDetail } from "../actions"
import { readProductSuccess, deleteProduct } from "../actions/productDetail"

function* fetchProductsList() {
    const data = yield fetch("http://localhost:4000/products", { method: "GET" })
        .then(response => response.json())
        .then(result => { return result; });

    yield put(readProductsSuccess(data));
}

function* fetchProduct(action: FetchProductDetail) {
    const product = yield fetch("http://localhost:4000/products/" + action.id)
        .then(response => response.json())
        .then(result => { return result; });
    yield put(readProductSuccess(product));
}

function* fetchDeleteProduct(action: FetchProductDetail) {
    yield fetch("http://localhost:4000/products/" + action.id, {
        method: "DELETE"
    }).then(response => response.status);
    yield put(deleteProduct(action.id));
}

function* actionWatcher() {
    yield takeLatest(FETCH_PRODUCTS, fetchProductsList);
    yield takeLatest(FETCH_PRODUCT_DETAIL, fetchProduct);
    yield takeLatest(FETCH_DELETE_PRODUCT, fetchDeleteProduct);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}