import React from 'react'
import { useSelector } from 'react-redux'

export const ProductList = () => {
  const products = useSelector((state) => state.products.all)

  return (
    <div>
      <h1>Products:</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <input type="checkbox" checked={product.completed} />
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  )
}