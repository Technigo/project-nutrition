import React from "react"
import { useSelector } from "react-redux"



export const Product = () => {
  const product = useSelector((state) => state.products.product)

  if (!product) return null
  console.log("product", product)

  return (
    <>
      <h3>
        Product:
      </h3>
      <p>The product name: {product.product && product.product.generic_name_en}
        {product.product && product.product.product_name}</p>
      <p> Category: {product.product && product.product.categories_tags}</p>
    </>
  )
}