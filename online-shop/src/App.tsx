import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
//import Product from './components/Product';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Link className="button has-text-weight-bold is-large is-info" to={`/cart`}>Shopping cart</Link>
        <Switch>
          <Route path='/products/:id' render={(id) =>
            <ProductDetail{...id} />
          } />
          <Route path='/cart' >
            <ShoppingCart />
          </Route>
          <Route path='/'>
            <ProductsList />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
