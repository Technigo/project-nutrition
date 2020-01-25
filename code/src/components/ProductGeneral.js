import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const ContentWrapper = styled.div`
  padding: 20px;
`

export const ProductGeneral = () => {

  const product = useSelector(state => state.products.product)

  return (
    <ContentWrapper>
      <p>Product: {product.product.product_name}</p>
      <p>Brand: {product.product.brands}</p>
    </ContentWrapper>
  )
}