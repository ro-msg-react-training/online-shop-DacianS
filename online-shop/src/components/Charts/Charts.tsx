import React from "react";
import { IProductSales } from "../../actions"
import { readSales, readSalesSuccess, readSalesError, fetchSales } from "../../actions/productsCharts"
import { StoreState } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { lifecycle, compose } from "recompose"
import { loader } from "../Loader"
import { ProductsSalesState, PieChart } from "./ChartView"

interface ProductsSalesProps { }


interface SalesDispatchProps {
    read: () => void,
    success: (sales: IProductSales[]) => void,
    error: (error: string) => void;
    fetch: () => void;
}

const mapStateToProps = (state: StoreState, props: ProductsSalesProps): ProductsSalesState => ({
    sales: state.productsSales.sales,
    chartType: state.productsSales.chartType,
    loading: state.productsSales.loading,
    error: state.productsSales.error
})

const mapDispatchToProps = (dispatch: Dispatch, props: ProductsSalesProps): SalesDispatchProps => ({

    read: () => { dispatch(readSales()); },
    success: (data) => { dispatch(readSalesSuccess(data)); },
    error: (error) => { dispatch(readSalesError(error)); },
    fetch: () => { dispatch(fetchSales()); }

});

const onComponentDidMountList = lifecycle<SalesDispatchProps, {}, {}>({
    componentDidMount() {
        this.props.fetch();
    }
});

class Charts extends React.Component<SalesDispatchProps & ProductsSalesState> {
    render() {
        let pieChartData: ProductsSalesState = {
            sales: [...this.props.sales],
            chartType: "pie",
            loading: this.props.loading,
            error: this.props.error
        }
        let barChartData: ProductsSalesState = {
            sales: [...this.props.sales],
            chartType: "bar",
            loading: this.props.loading,
            error: this.props.error
        }
        return (
            <div>
                <PieChart {...pieChartData} />
                <PieChart {...barChartData} />
            </div>
        );
    };
}

const ChartsSales = compose<SalesDispatchProps & ProductsSalesState, {}>(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    onComponentDidMountList,
    loader
)
    (Charts)

export default ChartsSales;