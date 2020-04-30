import { all, takeLatest, put, call } from "redux-saga/effects";
import { readProductsSuccess } from "../actions/products"
import { readSalesSuccess } from "../actions/productsCharts"
import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAIL, FETCH_DELETE_PRODUCT, FETCH_ADD_PRODUCT, FETCH_EDIT_PRODUCT, FETCH_SALES, FetchProductDetail, FetchAddProduct, FetchEditProduct } from "../actions"
import { readProductSuccess, deleteProduct } from "../actions/productDetail"
import { saveProduct } from "../actions/productInput"

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

function* fetchAddProduct(action: FetchAddProduct) {
    yield fetch("http://localhost:4000/products/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.productData)
    }).then((response) => {
        if (!response.ok) alert("error");
        else alert("New product created");
    })
        .catch((error) => { alert(error); });
    yield put(saveProduct(action.productData));
}

function* fetchEditProduct(action: FetchEditProduct) {
    yield fetch("http://localhost:4000/products/" + action.productData.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.productData)
    })
        .then((response) => {
            if (!response.ok) alert("error");
            else alert("Success");
        })
        .catch((error) => { alert(error); });
}

function* fetchSales() {
    const data = yield fetch("http://localhost:4000/sales", { method: "GET" })
        .then(response => response.json())
        .then(result => { return result; });

    yield put(readSalesSuccess(data));
}

function* actionWatcher() {
    yield takeLatest(FETCH_PRODUCTS, fetchProductsList);
    yield takeLatest(FETCH_PRODUCT_DETAIL, fetchProduct);
    yield takeLatest(FETCH_DELETE_PRODUCT, fetchDeleteProduct);
    yield takeLatest(FETCH_ADD_PRODUCT, fetchAddProduct);
    yield takeLatest(FETCH_EDIT_PRODUCT, fetchEditProduct);
    yield takeLatest(FETCH_SALES, fetchSales)
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}