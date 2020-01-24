import React from 'react'
import { useSelector } from 'react-redux'
// import styled from 'styled-components/macro'

export const ProductGeneral = () => {

  const product = useSelector(state => state.products.product)

  return (
    <>
      <p>Product: {product.product.product_name}</p>
      <p>Brand: {product.product.brands}</p>
    </>
  )
}