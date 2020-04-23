import { ProductInputAction, ProductInput, ProductDetail } from "../actions";

export const getProduct = (product: ProductDetail): ProductInputAction => ({
    type: "GET_PRODUCT_DATA",
    product
});

export const saveProduct = (productData: ProductInput): ProductInputAction => ({
    type: "SAVE_PRODUCT",
    productData
});

export const saveProductSuccess = (): ProductInputAction => ({
    type: "SAVE_PRODUCT_SUCCESS"
});

export const saveProductError = (error: string): ProductInputAction => ({
    type: "SAVE_PRODUCT_ERROR",
    error
});

export const cancelProduct = (): ProductInputAction => ({
    type: "CANCEL_PRODUCT"
});

export const updateProduct = (productData: ProductInput): ProductInputAction => ({
    type: "UPDATE_PRODUCT",
    productData
});