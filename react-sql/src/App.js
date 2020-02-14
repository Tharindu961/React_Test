import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { response } from 'express';

class App extends Component {

    state = {
      products: []
    }

    componentDidMount() {
      
    }

    getProducts = _=> {
      fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then({ data }) => {
        console.log(data )
      .catch(err => console.error(err))
    }

  renderProduct = ({ product_id, name }) => <div key={product_id}>{name}</div>

  render() { 
    const { products } = this.state;
    return (
    <div className="App">
      {products.map(this.renderProduct)}
    </div>
    );
  }
}

export default App;
