import { ProductInputAction, ProductInput } from "../actions";

interface ProductInputState {
    productData: ProductInput;
    loading: boolean;
    error: string;
}

const emptyProduct = {
    name: '',
    category: '',
    price: 0,
    description: ''
}

const ProductInputInitialState: ProductInputState = {
    productData: emptyProduct,
    loading: false,
    error: ''
}

function productInputReducer(state = ProductInputInitialState, action: ProductInputAction): ProductInputState {
    switch (action.type) {
        case "GET_PRODUCT_DATA":
            return {
                ...state,
                productData: {
                    id: action.product.id,
                    name: action.product.name,
                    category: action.product.category,
                    price: action.product.price,
                    description: action.product.description
                }
            };
        case "SAVE_PRODUCT":
            return {
                ...state,
                loading: true,
                error: ''
            };
        case "SAVE_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false
            };
        case "SAVE_PRODUCT_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "CANCEL_PRODUCT":
            return {
                ...state,
                productData: emptyProduct
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                productData: action.productData,
                error: ''
            }
        default:
            return state
    };
}

export { productInputReducer };