import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector(state => state.products.product)

  if (!product) return null

  console.log('product', product)

  return (
    <>
      <h1> product: </h1>
      <img src={product.product && product.product.image_url} alt="product"></img>

      <h2>Nutrients:</h2>
      <p>{product.product && product.product.ingredients_text_with_allergens_en}</p>
      <h2>Store:</h2>
      <p>{product.product && product.product.stores}</p>
      <h2>All available facts:</h2>
      <p>{product.product && product.product.ingredients_original_tags}</p>


    </>
  )
}