import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StoreState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ProductDetail } from "../actions";
import { readProduct, deleteProduct, deleteProductSuccess, readProductSuccess, readProductError, deleteProductError, fetchProductDetail, fetchDeleteProduct } from "../actions/productDetail";

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

class ProductDetails extends React.Component<ProductDetailProps & ProductDetailState & ProductDetailDispatchProps> {

  componentDidMount() {
    this.props.fetch(+this.props.match.params.id);
  }

  onDelete() {
    this.props.fetchDelete(+this.props.match.params.id);
    this.props.history.push("/");
  }

  render() {
    if (this.props.product) {
      return (
        <div className="Product">
          <Loader visible={this.props.loading} />
          <div>
            <img src={this.props.product.image} alt="" />
            <p>{this.props.product.name}</p>
          </div>
          <p>Description: {this.props.product.description}</p>
          <button className="button is-rounded has-text-weight-bold">
            Add to cart
          </button>
          <button
            className="button is-rounded has-text-weight-bold"
            onClick={() => this.onDelete()}
          >
            Delete
          </button>
          <Link className="button is-rounded has-text-weight-bold" to={`/edit`}>Edit </Link>
        </div>
      );
    }
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetails));
