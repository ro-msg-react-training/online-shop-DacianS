import { ProductDetailAction, ProductDetail } from "../actions";

export const readProduct = (): ProductDetailAction => ({
    type: "READ_PRODUCT_DETAILS"
});

export const readProductSuccess = (product: ProductDetail): ProductDetailAction => ({
    type: "READ_PRODUCT_DETAILS_SUCCESS",
    product
});

export const readProductError = (error: string): ProductDetailAction => ({
    type: "READ_PRODUCT_DETAILS_ERROR",
    error
});

export const deleteProduct = (id: number): ProductDetailAction => ({
    type: "DELETE_PRODUCT",
    id
});

export const deleteProductSuccess = (): ProductDetailAction => ({
    type: "DELETE_PRODUCT_SUCCESS"
});

export const deleteProductError = (error: string): ProductDetailAction => ({
    type: "DELETE_PRODUCT_ERROR",
    error
});