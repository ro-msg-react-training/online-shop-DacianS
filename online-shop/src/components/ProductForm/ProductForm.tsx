import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { lifecycle, compose } from "recompose"
import { ProductDetail, ProductInput } from "../../actions";
import { getProduct, saveProduct, saveProductSuccess, saveProductError, cancelProduct, updateProduct, fetchAddProduct, fetchEditProduct } from "../../actions/productInput";
import { ProductFormView, ProductFormProps } from "./ProductFormView"


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

const onComponentDidMountList = lifecycle<RouteComponentProps & ProductInputProps & ProductInputState & ProductDetailDispatchProps, {}, {}>({
    componentDidMount() {
        if (this.props.productDetails) {
            this.props.get(this.props.productDetails)
        }
    }
});
const onComponentWillUnmountList = lifecycle<RouteComponentProps & ProductInputProps & ProductInputState & ProductDetailDispatchProps, {}, {}>({
    componentWillUnmount() {
        this.props.cancel();
    }
});

class ProductForm extends React.Component<RouteComponentProps & ProductInputProps & ProductInputState & ProductDetailDispatchProps> {
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

    onCancel() {
        this.props.history.push("/");
    }
    render() {
        let data: ProductFormProps = {
            product: this.props.product,
            productDetails: this.props.productDetails,
            handleSave: () => this.handleSave,
            onCancel: () => this.onCancel(),
            handleChange: () => this.handleChange
        }
        return (
            <ProductFormView {...data} />
        );
    }
}

const ProductFormComp = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    onComponentDidMountList,
    onComponentWillUnmountList
)
withRouter(ProductForm);

export default ProductFormComp;