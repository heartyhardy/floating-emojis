import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Product from './components/product/Product';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navbar title={this.props.title} />
        </header>

        <Products>

          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          <Product symbol="🍕"/>
          
        </Products>

      </div>
    );
  }
}

export default App;
