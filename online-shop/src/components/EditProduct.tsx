import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState } from "../store";
import { connect } from "react-redux";
import ProductInputs from "./ProductInputs";
import { ProductInput, ProductDetail } from "../actions";
import { fetchEditProduct } from "../actions/productInput";
import { Dispatch } from "redux";

interface EditProductProps { }

interface LinkStateProps {
    productDetails?: ProductDetail;
}

interface ProductEditState {
    product: ProductInput;
    loading: boolean;
    error: string;
}

interface ProductEditDispatchProps {
    edit: (productData: ProductInput) => void,
}


const mapStateToProps = (state: StoreState, props: EditProductProps): LinkStateProps => ({
    productDetails: state.productDetail.product
});

const mapDispatchToProps = (dispatch: Dispatch, props: EditProductProps): ProductEditDispatchProps => ({
    edit: (data) => { dispatch(fetchEditProduct(data)) }
});

class EditProduct extends React.Component<RouteComponentProps & EditProductProps & LinkStateProps & ProductEditDispatchProps>{

    onSave(editProduct: ProductInput, props: RouteComponentProps & EditProductProps & ProductEditState & ProductEditDispatchProps) {
        props.edit(editProduct);
        props.history.push('/');
    }


    render() {
        return (
            <ProductInputs productDetails={this.props.productDetails} onSave={this.onSave} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));