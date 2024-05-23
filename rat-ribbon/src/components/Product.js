import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const productList = [
    { id: 1, name: 'T-Shirt 1', price: '$10' },
    { id: 2, name: 'T-Shirt 2', price: '$15' },
  ]

  return (
    <div>
      <h1>Product</h1>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name} - {product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product
