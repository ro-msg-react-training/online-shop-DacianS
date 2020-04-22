import { ProductDetailAction, ProductDetail } from "../actions";

interface ProductDetailState {
    product?: ProductDetail;
    loading: boolean;
    error: string;
}

const ProductDetailInitialState: ProductDetailState = {
    loading: false,
    error: ''
};

function productDetailReducer(state = ProductDetailInitialState, action: ProductDetailAction): ProductDetailState {
    switch (action.type) {
        case "READ_PRODUCT_DETAILS":
            return {
                ...state,
                loading: true,
                error: ''
            };
        case "READ_PRODUCT_DETAILS_SUCCESS":
            return {
                ...state,
                loading: false,
                product: action.product
            };
        case "READ_PRODUCT_DETAILS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "DELETE_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                error: ''
            }
        case "DELETE_PRODUCT_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export { productDetailReducer };