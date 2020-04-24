import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { readProducts, readProductsSuccess, readProductsError, fetchProducts } from "../actions/products";
import { StoreState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ProductsListProps { }


interface ProductsStateState {
  products: Product[];
  loading: boolean;
  error: string;
}

interface ProductsDispatchProps {
  read: () => void,
  success: (products: Product[]) => void,
  error: (error: string) => void;
  fetch: () => void;
}

const mapStateToProps = (state: StoreState, props: ProductsListProps): ProductsStateState => ({

  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error,

})

const mapDispatchToProps = (dispatch: Dispatch, props: ProductsListProps): ProductsDispatchProps => ({
  // ... normally is an object full of action creators

  read: () => { dispatch(readProducts()); },
  success: (data) => { dispatch(readProductsSuccess(data)); },
  error: (error) => { dispatch(readProductsError(error)); },
  fetch: () => { dispatch(fetchProducts()); }

});


class ProductsList extends React.Component<RouteComponentProps & ProductsDispatchProps & ProductsStateState> {


  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        <Link className="button is-large has-text-weight-bold" to={`/add`}>Add new product</Link>
        <section className="section">
          <Loader visible={this.props.loading} />
          <div className="container">
            {this.props.products.map((product) =>
              <div key={product.id.toString()}>
                <div className="Product">
                  <p>{product.name}</p>
                  <p>{product.category}</p>
                  <p className="has-text-success">Price: {product.price}</p>
                  <Link className="button is-rounded" to={`/products/${product.id}`} >Details</Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div >
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsList));
