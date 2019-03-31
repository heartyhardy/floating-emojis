import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Product from './components/product/Product';
import { getService as service } from './service/service';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navbar title={this.props.title} />
        </header>

        <Products isLoading={this.state.isLoading} loadingIcon="⏱">
          {
            service().map((prod, index) => {
              return <Product symbol = {prod.emoji} label={prod.name} />
            })
          }
        </Products>

      </div>
    );
  }
}

export default App;
