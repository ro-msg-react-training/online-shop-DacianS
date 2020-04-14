import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
//import Product from './components/Product';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*function App() {
  return (
    <div className="App">
      <ProductsList/>
    </div>
  );
}*/

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path='/products/:id' render={(id) =>
          <ProductDetail{...id}/>
        }/>
          <Route path='/'>
            <ProductsList/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
 
export default App;
