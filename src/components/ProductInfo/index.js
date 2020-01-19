import React, { Component } from 'react';

import './styles.css'

const ProductInfo = ({product} = this.props) => (
  <div className='product__info'>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>
      URL: <a href={product.url}>{product.url}</a>
    </p>
  </div>
);

export default ProductInfo