import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { IProductSales } from "../../actions"

export interface ProductsSalesState {
    sales: IProductSales[],
    chartType: string,
    loading: boolean,
    error: string
}
export const PieChart = (props: ProductsSalesState) => {
    const options: any = {
        title: {
            text: "Sales"
        },
        chart: {
            plotShadow: false,
            type: props.chartType
        },
        tooltip: {
            valueDecimals: 2,
            valuePrefix: "$"
        },
        xAxis: {
            categories: [...props.sales].map((sale, key) => [sale.category])
        },
        series: [
            {
                name: "Sales",
                colorByPoint: true,
                data: [...props.sales].map((sale, key) => ({
                    name: sale.category,
                    y: sale.sales
                }))
            }
        ]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
