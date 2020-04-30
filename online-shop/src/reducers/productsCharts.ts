import { SalesChartsAction, IProductSales } from "../actions"

interface SalesState {
    sales: IProductSales[];
    chartType: string;
    loading: boolean;
    error: string;
}

const initialState: SalesState = {
    sales: [],
    chartType: '',
    loading: false,
    error: ''
};

function chartsReducer(state = initialState, action: SalesChartsAction): SalesState {
    switch (action.type) {
        case "READ_SALES":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "READ_SALES_SUCCESS":
            return {
                ...state,
                loading: false,
                sales: action.sales
            }
        case "READ_SALES_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case "FETCH_SALES":
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }

}

export { chartsReducer };