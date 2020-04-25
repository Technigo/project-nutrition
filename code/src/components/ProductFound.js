import React from 'react'
import { useSelector } from "react-redux";

export const ProductFound = () => {
  const product = useSelector((store) => store.products.product)

  return (
    <div>
      <h2>{product.product.product_name}</h2>
      <img src={product.product.image_url} alt="Product"/>
      <h3>{product.product.ingredients_text}</h3>
    </div>
  )
}


