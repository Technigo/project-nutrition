import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector((state) => state.products.product)

  if (!product) return <div>noProduct:</div>

  console.log(product)

  return <div>Product:</div>
}
