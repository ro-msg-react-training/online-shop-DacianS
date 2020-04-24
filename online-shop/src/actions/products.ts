import { ProductsAction } from "../actions";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

export const readProducts = (): ProductsAction => ({
    type: "READ_PRODUCTS"
});

export const readProductsSuccess = (products: Product[]): ProductsAction => ({
    type: "READ_PRODUCTS_SUCCESS",
    products
});

export const readProductsError = (error: string): ProductsAction => ({
    type: "READ_PRODUCTS_ERROR",
    error
});

export const fetchProducts = (): ProductsAction => ({
    type: "FETCH_PRODUCTS"
});