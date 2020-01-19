import React, { Component } from 'react';
import api from '../../services/api';
import LoadingSpining from '../../components/LoadingSpining';
import ProductList from '../../components/ProductList';

import "./styles.css";  

export default class Main extends Component{

  state = {
    products: [],
    productInfo: {},
    page: 1,
    loading: false
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async (page = 1) =>{
    const response = await api.get(`/products?page=${page}`)

    const { docs, ...productInfo } = response.data

    this.setState({ products: docs, productInfo, page, loading: true })


  }

  // life cycle
  // - quando o componente é exibido em tela
  // componentDidMount(){}
  
  prevPage = () => {
    const { page, productInfo } = this.state;

    if(page === 1) return

    const pageNumber = page - 1;
  
    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if(page === productInfo.pages) return

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  render() {

    const { products, page, productInfo, loading } = this.state;

    return (  
      <div className="product__list">
        {loading ? <ProductList products={products} page={page} productInfo={productInfo} prevPage={this.prevPage} nextPage={this.nextPage}/>  : <LoadingSpining /> } 
      </div>
      // 
    ) 
  }
}