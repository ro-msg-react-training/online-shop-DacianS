import { SalesChartsAction, IProductSales } from "../actions"

export const readSales = (): SalesChartsAction => ({
    type: "READ_SALES"
})

export const readSalesSuccess = (sales: IProductSales[]): SalesChartsAction => ({
    type: "READ_SALES_SUCCESS",
    sales
})

export const readSalesError = (error: string): SalesChartsAction => ({
    type: "READ_SALES_ERROR",
    error
})

export const fetchSales = (): SalesChartsAction => ({
    type: "FETCH_SALES"
})