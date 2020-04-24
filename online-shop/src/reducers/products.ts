import { ProductsAction } from "../actions";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: ''
};

function productsReducer(state = initialState, action: ProductsAction): ProductsState {
    switch (action.type) {
        case 'READ_PRODUCTS':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'READ_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case 'READ_PRODUCTS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'FETCH_PRODUCTS':
            return {
                ...state
            }
        default:
            return state;
    }
}

export { productsReducer };