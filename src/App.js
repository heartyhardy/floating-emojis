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
      isLoading: true,
      category: 'all'
    }
  }

  setFilter = (event) => {
    this.setState({category:event.target.getAttribute('category')});
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  componentDidUpdate()
  {
    console.log('updated');
  }

  render() {

    let filtered_emojis = (this.state.category === 'all') ? 
      service():
      service().filter(prod => prod.category === this.state.category);

    return (
      <div className="App">

        <header className="App-header">
          <Navbar title={this.props.title} active={this.state.category} onFilter={this.setFilter} />
        </header>

        <Products isLoading={this.state.isLoading} loadingIcon="⏱">
          {
            filtered_emojis.map((prod, index) => {
              return (<Product key={index} symbol={prod.emoji} label={prod.name}/>)
            })
          }
        </Products>

      </div>
    );
  }
}

export default App;
