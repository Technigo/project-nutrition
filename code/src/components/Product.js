import React from 'react'
import { useSelector } from 'react-redux'


export const Product = () => {
  const product = useSelector(state => state.products.product.product)

  if (!product) return null

  return (
    <>
      <h1>{product.product_name}</h1>
      <p>{product.brands}</p>
      <p>Allergens: {product.allergens_from_ingredients ? product.allergens_from_ingredients : "No reported allergens. Check product ingredients"}</p>
      <img src={product.image_url} alt={product.product_name} />
    </>
  )
}