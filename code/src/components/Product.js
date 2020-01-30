import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


export const Product = () => {
const product = useSelector(state => state.products.product)

if (!product) return null

  return (
    <ProductCard>
      {product.product && product.status === 1 && (
      <ProductDiv>
        {!product.product.product_name && (
          <p>No product information found</p>
        )}
        
        {product.product.image_front_url && (
        <img src={product.product.image_front_url} alt="Your scanned product"/>
          )}
        <Title>{product.product.product_name}</Title>
        {product.status === 0 && (
        <h1>{product.status_verbose}</h1>
          )}
        {!product.product  && (
        <h1>No product found</h1>
          )}
      </ProductDiv>
    )
  }
  </ProductCard>
  )
}
const ProductCard = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
padding: 5px 10px;
margin-top: 0px;
background: rgb(54,110,0, 0.5);
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
font-family: 'Nunito', sans-serif;
`
const ProductDiv = styled.div`
opacity: 1;
`
const Title = styled.h1`
font-size: 20px;
color: white;
font-family: 'Nunito', sans-serif;
`