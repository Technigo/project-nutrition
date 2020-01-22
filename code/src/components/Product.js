import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {

  const product = useSelector(state => state.products.product)

  console.log('Product:', product)

  if (!product) return null


  // Showing "Product not found" isn't working
  return (
    <>

      {product.product && product.product.status === 0 && <h3>Product not found</h3>}
      {product.product &&
        <>
          <h1>Product:</h1>
          <img alt="product" src={product.product && product.product.image_front_thumb_url} />
        </>
      }
    </>
  )

}