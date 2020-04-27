import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ProductDetail, ProductInput } from "../actions";
import { getProduct, saveProduct, saveProductSuccess, saveProductError, cancelProduct, updateProduct, fetchAddProduct, fetchEditProduct } from "../actions/productInput";

interface ProductInputState {
    product: ProductInput;
    loading: boolean;
    error: string;
}

interface ProductInputProps {
    productDetails?: ProductDetail;
    onSave: (product: ProductInput, props: RouteComponentProps & ProductInputProps & ProductInputState & ProductDetailDispatchProps) => void;
}

export interface ProductDetailDispatchProps {
    get: (product: ProductDetail) => void,
    save: (productData: ProductInput) => void,
    success: () => void,
    error: (error: string) => void,
    cancel: () => void,
    update: (productData: ProductInput) => void,
    add: (productData: ProductInput) => void,
    edit: (productData: ProductInput) => void,
}

const mapStateToProps = (state: StoreState, props: ProductInputProps): ProductInputState => ({

    product: state.productInput.productData,
    loading: state.productInput.loading,
    error: state.productInput.error,

})

const mapDispatchToProps = (dispatch: Dispatch, props: ProductInputProps): ProductDetailDispatchProps => ({
    get: (data) => { dispatch(getProduct(data)); },
    save: (data) => { dispatch(saveProduct(data)); },
    success: () => { dispatch(saveProductSuccess()); },
    error: (error) => { dispatch(saveProductError(error)); },
    cancel: () => { dispatch(cancelProduct()); },
    update: (data) => { dispatch(updateProduct(data)); },
    add: (data) => { dispatch(fetchAddProduct(data)) },
    edit: (data) => { dispatch(fetchEditProduct(data)) }
});


class ProductInputs extends React.Component<RouteComponentProps & ProductInputProps & ProductInputState & ProductDetailDispatchProps> {
    constructor(props: RouteComponentProps & ProductInputProps & ProductInputState & ProductDetailDispatchProps) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSave(event: any) {
        event.preventDefault();
        this.props.onSave(this.props.product, this.props)
    }

    handleChange(event: any) {
        event.preventDefault();
        const value = event.target.value;
        this.props.update({
            ...this.props.product,
            [event.target.name]: value,
            [event.target.name]: value,
            [event.target.name]: value,
            [event.target.name]: value
        } as ProductInput)
    }


    componentDidMount() {
        if (this.props.productDetails) {
            this.props.get(this.props.productDetails)
        }
    }
    componentWillUnmount() {
        this.props.cancel();
    }

    render() {
        return (
            <div>
                <Loader visible={this.props.loading} />
                <form className="container">
                    <div className="field">
                        <label className="label">Name</label>
                        <input className="input" type="text" placeholder="Name" name="name" defaultValue={this.props.productDetails?.name} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Category</label>
                        <input className="input" type="text" placeholder="Category" name="category" defaultValue={this.props.productDetails?.category} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <input className="input" type="text" placeholder="Description" name="description" defaultValue={this.props.productDetails?.description} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Price</label>
                        <input className="input" type="number" placeholder="Price" name="price" defaultValue={this.props.productDetails?.price} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="button is-rounded is-success has-text-weight-bold" onClick={this.handleSave}> Save</button>
                        <button className="button is-rounded is-danger has-text-weight-bold" onClick={() => this.props.history.push('/')}> Cancel</button>
                    </div>
                </form>
            </div >
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductInputs));