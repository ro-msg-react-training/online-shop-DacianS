import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ProductInputs from "./ProductInputs";
import { ProductInput } from "../actions";
import { fetchAddProduct } from "../actions/productInput";
import { StoreState } from "../store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface ProductAddProps { }

interface ProductAddState {
    product: ProductInput;
    loading: boolean;
    error: string;
}

interface ProductAddDispatchProps {
    add: (productData: ProductInput) => void,
}

const mapStateToProps = (state: StoreState, props: ProductAddProps): ProductAddState => ({

    product: state.productInput.productData,
    loading: state.productInput.loading,
    error: state.productInput.error,

})

const mapDispatchToProps = (dispatch: Dispatch, props: ProductAddProps): ProductAddDispatchProps => ({
    add: (data) => { dispatch(fetchAddProduct(data)) }
});

class AddProduct extends React.Component<RouteComponentProps & ProductAddProps & ProductAddDispatchProps & ProductAddState>{

    onSave(newProduct: ProductInput, props: RouteComponentProps & ProductAddProps & ProductAddState & ProductAddDispatchProps) {
        props.add(newProduct);
        props.history.push('/');
    }


    render() {
        return (
            <div>
                <ProductInputs onSave={this.onSave} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct));