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

export interface ProductInput {
  id?: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

export interface IProductSales {
  category: string,
  sales: number
}

export const READ_PRODUCTS = "READ_PRODUCTS";
export const READ_PRODUCTS_SUCCESS = "READ_PRODUCTS_SUCCESS";
export const READ_PRODUCTS_ERROR = "READ_PRODUCTS_ERROR";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const READ_PRODUCT_DETAILS = "READ_PRODUCT_DETAILS";
export const READ_PRODUCT_DETAILS_SUCCESS = "READ_PRODUCT_DETAILS_SUCCESS";
export const READ_PRODUCT_DETAILS_ERROR = "READ_PRODUCT_DETAILS_ERROR";
export const FETCH_PRODUCT_DETAIL = "FETCH_PRODUCT_DETAIL"
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";
export const FETCH_DELETE_PRODUCT = "FETCH_DELETE_PRODUCT"
export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";
export const SAVE_PRODUCT = "SAVE_PRODUCT";
export const SAVE_PRODUCT_SUCCESS = "SAVE_PRODUCT_SUCCESS";
export const SAVE_PRODUCT_ERROR = "SAVE_PRODUCT_ERROR";
export const CANCEL_PRODUCT = "CANCEL_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_ADD_PRODUCT = "FETCH_ADD_PRODUCT";
export const FETCH_EDIT_PRODUCT = "FETCH_EDIT_PRODUCT";
export const FETCH_SALES = "FETCH_SALES";
export const READ_SALES = "READ_SALES";
export const READ_SALES_SUCCESS = "READ_SALES_SUCCESS";
export const READ_SALES_ERROR = "READ_SALES_ERROR"

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

export interface FetchProducts {
  type: typeof FETCH_PRODUCTS;
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

export interface FetchProductDetail {
  type: typeof FETCH_PRODUCT_DETAIL;
  id: number;
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

export interface FetchDeleteProduct {
  type: typeof FETCH_DELETE_PRODUCT;
  id: number;
}

export interface GetProductData {
  type: typeof GET_PRODUCT_DATA;
  product: ProductDetail;
}

export interface SaveProduct {
  type: typeof SAVE_PRODUCT;
  productData: ProductInput;
}

export interface SaveProductSuccess {
  type: typeof SAVE_PRODUCT_SUCCESS;
}

export interface SaveProductError {
  type: typeof SAVE_PRODUCT_ERROR;
  error: string;
}

export interface CancelProduct {
  type: typeof CANCEL_PRODUCT;
}

export interface UpdateProduct {
  type: typeof UPDATE_PRODUCT;
  productData: ProductInput;
}

export interface FetchAddProduct {
  type: typeof FETCH_ADD_PRODUCT;
  productData: ProductInput;
}

export interface FetchEditProduct {
  type: typeof FETCH_EDIT_PRODUCT;
  productData: ProductInput;
}

export interface ReadSales {
  type: typeof READ_SALES;
}

export interface ReadSalesSuccess {
  type: typeof READ_SALES_SUCCESS;
  sales: IProductSales[];
}

export interface ReadSalesError {
  type: typeof READ_SALES_ERROR;
  error: string;
}

export interface FetchSales {
  type: typeof FETCH_SALES;
}

export type ProductsAction = ReadProducts | ReadProductsSuccess | ReadProductsError | FetchProducts;

export type ProductDetailAction = ReadProductDetail | ReadProductDetailSuccess | ReadProductDetailError | FetchProductDetail | DeleteProduct | DeleteProductSuccess | DeleteProductError | FetchDeleteProduct;

export type ProductInputAction = GetProductData | SaveProduct | SaveProductSuccess | SaveProductError | CancelProduct | UpdateProduct | FetchAddProduct | FetchEditProduct;

export type SalesChartsAction = ReadSales | ReadSalesSuccess | ReadSalesError | FetchSales;