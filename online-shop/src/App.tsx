import React, { Component } from "react";
import "./App.scss";
import ProductList from "./components/ProductList/ProductsList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Charts from "./components/Charts/Charts"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link className="button has-text-weight-bold is-large is-info" to={`/cart`}> Shopping cart</Link>
        </div>
        <br />
        <div>
          <Link className="button has-text-weight-bold is-large is-info" to={`/charts`}> Charts</Link>
        </div>
        <br />
        <Switch>
          <Route
            path="/products/:id"
            render={(id) => <ProductDetail {...id} />}
          />
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/edit">
            <EditProduct />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
