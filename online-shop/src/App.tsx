import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Product/>
      <ProductsList/>
    </div>
  );
}

export default App;
