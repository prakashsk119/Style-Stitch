import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const productList = [
    { id: 1, name: 'T-Shirt 1', price: '$10', description: 'A cool T-Shirt' },
    { id: 2, name: 'T-Shirt 2', price: '$15', description: 'Another cool T-Shirt' },
  ]

  const product = productList.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetail
