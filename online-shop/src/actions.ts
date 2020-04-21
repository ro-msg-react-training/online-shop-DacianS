interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const READ_PRODUCTS = "READ_PRODUCTS";
export const READ_PRODUCTS_SUCCESS = "READ_PRODUCTS_SUCCESS";
export const READ_PRODUCTS_ERROR = "READ_PRODUCTS_ERROR";

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

export type ProductsAction =
  | ReadProducts
  | ReadProductsSuccess
  | ReadProductsError;
