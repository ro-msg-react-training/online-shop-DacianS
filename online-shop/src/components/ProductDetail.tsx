import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StoreState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ProductDetail } from "../actions";
import { readProduct, deleteProduct, deleteProductSuccess, readProductSuccess, readProductError, deleteProductError } from "../actions/productDetail";

const PRODUCTS_URL = "http://localhost:4000/products/";
//const cartItems = [];

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
  delete: (id: number) => void,
  deleteSuccess: () => void,
  deleteError: (error: string) => void;
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
  delete: (id) => { dispatch(deleteProduct(id)); },
  deleteSuccess: () => { dispatch(deleteProductSuccess()); },
  deleteError: (error) => { dispatch(deleteProductError(error)); }
});

class ProductDetails extends React.Component<ProductDetailProps & ProductDetailState & ProductDetailDispatchProps> {

  componentDidMount() {
    this.props.read();
    fetch(PRODUCTS_URL + this.props.match.params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else this.props.error("Error " + response.status)
      })
      .then((data) => {
        this.props.success(data);
      })
      .catch((error) => {
        this.props.error(error);
      });
  }

  onDelete() {
    fetch(PRODUCTS_URL + this.props.match.params.id, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        this.props.history.push("/");
      }
      else this.props.error("Error " + response.status)
    })
      .catch((error) => {
        this.props.error(error);
      });
  }

  /*addItem(state: ProductsListState){ 
        cartItems.push(state);      
    }*/

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
          <Link className="button is-rounded has-text-weight-bold" to={`/input`}>Edit </Link>
        </div>
      );
    }
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetails));
