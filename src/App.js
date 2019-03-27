import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Product from './components/product/Product';

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount()
  {
    setTimeout(()=>this.setState({isLoading:false}), 1000);
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navbar title={this.props.title} />
        </header>

        <Products isLoading={this.state.isLoading} loadingIcon="⏱">

          <Product symbol="🍕" label="cheese"/>
          <Product symbol="🍟" label="cheese"/>
          <Product symbol="🌭" label="cheese"/>
          <Product symbol="🍕" label="cheese"/>
          <Product symbol="🌮" label="cheese"/>
          <Product symbol="🍕" label="cheese"/>
          <Product symbol="🍕" label="cheese"/>
          <Product symbol="🍕" label="cheese"/>
          <Product symbol="🍕" label="cheese"/>
          <Product symbol="🍕" label="cheese"/>
          
        </Products>

      </div>
    );
  }
}

export default App;
