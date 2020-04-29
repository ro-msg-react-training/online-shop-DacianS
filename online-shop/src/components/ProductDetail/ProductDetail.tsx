import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../store";
import { connect } from "react-redux";
import { lifecycle, compose } from "recompose"
import { Dispatch } from "redux";
import { ProductDetail } from "../../actions";
import { readProduct, deleteProduct, deleteProductSuccess, readProductSuccess, readProductError, deleteProductError, fetchProductDetail, fetchDeleteProduct } from "../../actions/productDetail";
import { ProductDetailView, IProductDetail } from "./ProductDetailView";
import { loader } from "../Loader"

interface ID {
    id: string;
}

interface ProductDetailProps extends RouteComponentProps<ID> { }

interface ProductDetailState {
    product?: ProductDetail;
    loading: boolean;
    error: string;
}

interface ProductDetailDispatchProps {
    read: () => void,
    success: (products: ProductDetail) => void,
    error: (error: string) => void,
    fetch: (id: number) => void,
    delete: (id: number) => void,
    deleteSuccess: () => void,
    deleteError: (error: string) => void;
    fetchDelete: (id: number) => void;
}

const mapStateToProps = (state: StoreState, props: ProductDetailProps): ProductDetailState => ({

    product: state.productDetail.product,
    loading: state.productDetail.loading,
    error: state.productDetail.error,

})

const mapDispatchToProps = (dispatch: Dispatch, props: ProductDetailProps): ProductDetailDispatchProps => ({
    read: () => { dispatch(readProduct()); },
    success: (data) => { dispatch(readProductSuccess(data)); },
    error: (error) => { dispatch(readProductError(error)); },
    fetch: (id) => { dispatch(fetchProductDetail(id)); },
    delete: (id) => { dispatch(deleteProduct(id)); },
    deleteSuccess: () => { dispatch(deleteProductSuccess()); },
    deleteError: (error) => { dispatch(deleteProductError(error)); },
    fetchDelete: (id) => { dispatch(fetchDeleteProduct(id)); }
});

const onComponentDidMountList = lifecycle<ProductDetailProps & ProductDetailState & ProductDetailDispatchProps, {}, {}>({
    componentDidMount() {
        this.props.fetch(+this.props.match.params.id);
    }
});

class ProductDetails extends React.Component<ProductDetailProps & ProductDetailState & ProductDetailDispatchProps>{

    onDelete() {
        this.props.fetchDelete(+this.props.match.params.id);
        this.props.history.push("/");
    }
    render() {
        let data: IProductDetail = {
            product: this.props.product,
            delete: () => this.onDelete()
        }
        return <ProductDetailView {...data} />
    }
}

const ProductDetailsComp = compose<ProductDetailProps & ProductDetailState & ProductDetailDispatchProps, {}>(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    onComponentDidMountList,
    loader
)
    (ProductDetails);

export default ProductDetailsComp;