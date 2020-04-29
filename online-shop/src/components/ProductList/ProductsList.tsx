import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { readProducts, readProductsSuccess, readProductsError, fetchProducts } from "../../actions/products";
import { StoreState } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { lifecycle, compose } from "recompose"
import { ProductListView, ProductsListState } from "./ProductListView"
import { loader } from "../Loader"

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ProductsListProps { }

interface ProductsDispatchProps {
  read: () => void,
  success: (products: Product[]) => void,
  error: (error: string) => void;
  fetch: () => void;
}

const mapStateToProps = (state: StoreState, props: ProductsListProps): ProductsListState => ({

  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error,

})

const mapDispatchToProps = (dispatch: Dispatch, props: ProductsListProps): ProductsDispatchProps => ({

  read: () => { dispatch(readProducts()); },
  success: (data) => { dispatch(readProductsSuccess(data)); },
  error: (error) => { dispatch(readProductsError(error)); },
  fetch: () => { dispatch(fetchProducts()); }

});

const onComponentDidMountList = lifecycle<ProductsDispatchProps, {}, {}>({
  componentDidMount() {
    this.props.fetch();
  }
});

class ProductsList extends React.Component<RouteComponentProps & ProductsDispatchProps & ProductsListState> {
  render() {
    let data: ProductsListState = {
      products: [...this.props.products],
      loading: this.props.loading,
      error: this.props.error
    }
    return (
      <ProductListView {...data} />
    );
  }
}

const ProductList = compose<RouteComponentProps & ProductsDispatchProps & ProductsListState, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  onComponentDidMountList,
  loader
)
  (ProductsList)

export default ProductList;