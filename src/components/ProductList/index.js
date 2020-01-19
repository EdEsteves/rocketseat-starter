import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ProductList = ({products, productInfo, page, prevPage, nextPage} = this.props) => (
  <div className="product__list-item">
    {products.map(product => (
      <article key={product._id}>
        <strong>{product.title}</strong>
        <p>{product.description}</p>
        <Link to={`/products/${product._id}`}>Acessar</Link>
      </article>
    ))}
    <div className="actions">
      <button disabled={ page === 1 } onClick={prevPage}>Anterior</button>
      <button disabled={ page === productInfo.pages } onClick={nextPage}>Próximo</button>
    </div>
  </div>
);

export default ProductList