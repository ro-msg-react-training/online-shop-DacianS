interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface ProductDetail extends Product {
  image: string,
  description: string
}

export const READ_PRODUCTS = "READ_PRODUCTS";
export const READ_PRODUCTS_SUCCESS = "READ_PRODUCTS_SUCCESS";
export const READ_PRODUCTS_ERROR = "READ_PRODUCTS_ERROR";
export const READ_PRODUCT_DETAILS = "READ_PRODUCT_DETAILS";
export const READ_PRODUCT_DETAILS_SUCCESS = "READ_PRODUCT_DETAILS_SUCCESS";
export const READ_PRODUCT_DETAILS_ERROR = "READ_PRODUCT_DETAILS_ERROR";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

export interface ReadProducts {
  type: typeof READ_PRODUCTS;
}

export interface ReadProductsSuccess {
  type: typeof READ_PRODUCTS_SUCCESS;
  products: Product[];
}

export interface ReadProductsError {
  type: typeof READ_PRODUCTS_ERROR;
  error: string;
}

export interface ReadProductDetail {
  type: typeof READ_PRODUCT_DETAILS;
}

export interface ReadProductDetailSuccess {
  type: typeof READ_PRODUCT_DETAILS_SUCCESS;
  product: ProductDetail;
}

export interface ReadProductDetailError {
  type: typeof READ_PRODUCT_DETAILS_ERROR;
  error: string;
}

export interface DeleteProduct {
  type: typeof DELETE_PRODUCT;
  id: number;
}

export interface DeleteProductSuccess {
  type: typeof DELETE_PRODUCT_SUCCESS;
}

export interface DeleteProductError {
  type: typeof DELETE_PRODUCT_ERROR;
  error: string;

}

export type ProductsAction = ReadProducts | ReadProductsSuccess | ReadProductsError;

export type ProductDetailAction = ReadProductDetail | ReadProductDetailSuccess | ReadProductDetailError | DeleteProduct | DeleteProductSuccess | DeleteProductError;
