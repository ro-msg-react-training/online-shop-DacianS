import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState } from "../store";
import { connect } from "react-redux";
import ProductInputs from "./ProductInputs";
import { ProductInput, ProductDetail } from "../actions";

const PRODUCTS_URL = "http://localhost:4000/products/";


interface EditProductProps { }

interface LinkStateProps {
    productDetails?: ProductDetail;
}

const mapStateToProps = (state: StoreState, props: EditProductProps): LinkStateProps => ({
    productDetails: state.productDetail.product
});

class EditProduct extends React.Component<RouteComponentProps & EditProductProps & LinkStateProps>{

    onSave(editProduct: ProductInput) {
        fetch((PRODUCTS_URL + editProduct.id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editProduct)
        })
            .then((response) => {
                if (!response.ok) alert("error");
                else alert("Success");
            })
            .catch((error) => { alert(error); });
    }


    render() {
        return (
            <ProductInputs productDetails={this.props.productDetails} onSave={this.onSave} />
        );
    }
}

export default connect(mapStateToProps)(withRouter(EditProduct));