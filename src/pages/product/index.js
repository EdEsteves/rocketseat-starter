import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import LoadingSpining from '../../components/LoadingSpining'; 
import ProductInfo from '../../components/ProductInfo'; 

import "./styles.css";  

export default class Product extends Component {
  state = {
    product: {},
    loading: false
  }
  
  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`)

    this.setState({product: response.data, loading: true});
  }

  render () {
    const { product, loading } = this.state;

    return (
      <div className="product__container">
        {loading ? <ProductInfo product={product} p/>  : <LoadingSpining /> } 
        <Link className="button--back" to={`/`}>Voltar</Link>
      </div>
    );
  }
}
