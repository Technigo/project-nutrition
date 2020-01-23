import React from "react"
import { useSelector } from "react-redux"

export const Product = () => {
  const product = useSelector(state => state.products.product)

  if (!product)
    return null

  console.log(product)


  return (
    <>
      <h1>Product:</h1>
      <h3>{product.product && product.product.product_name}</h3>
      <p>weight: {product.product && product.product.quantity}</p>
      <img src={product.product && product.product.image_url} />
    </>
  )

}
