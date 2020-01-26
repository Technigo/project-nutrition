import React, { Profiler } from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector(state => state.products.product)

  if (!Product) return null

  console.log('product', product)
  return (
    <>

      <h1>Product</h1>
      <img className='nutriton' src={product.product && product.product.image_nutrition_url} />


    </>
  )
}
