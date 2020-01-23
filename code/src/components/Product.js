import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Product = () => {
const product = useSelector(state => state.products.product)

// if (!product) return null

console.log('product: ', product)

  return (
    <ProductDiv>
    <Title>Product:</Title> 
    kjhh
      
    </ProductDiv>
  )
}

const ProductDiv = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 50%;
padding: 5px 10px;
margin-top: 0px;
background: #E0A2B3;
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`
const Title = styled.h1`
font-size: 20px;
color: white;
`