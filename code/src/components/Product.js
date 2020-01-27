import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components/macro"
import { SaveButton } from "./SaveButton"

export const Product = () => {
  const product = useSelector(state => state.products.product)

  if (!product)
    return null

  return (
    <>
      {product.product && product.status === 1 && (
        <ProductContainer>
          <ProductName>{product.product.product_name}</ProductName>
          <ProductInfo>Weight: {product.product.quantity}</ProductInfo>
          <ProductInfo>Brand: {product.product.brands}</ProductInfo>
          <ContainerRow>
            <ProductImage src={product.product.image_url} />
            <Ingredients>Ingredients: {product.product.ingredients_text}</Ingredients>
          </ContainerRow>
          <SaveButton />
        </ProductContainer>
      )}
      {product.status === 0 && <h3>Sorry, {product.status_verbose}.</h3>}
    </>
  )

}

const ProductContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgb(69, 191, 15, 0.2);
border: 2px solid black;
margin-top: 20px;
padding: 20px;
font-family: 'Quicksand', sans-serif;
`

const ContainerRow = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background: rgba(255, 255, 255, 0.8);
padding: 20px;
margin: 20px 10px;
`

const ProductName = styled.h1`
margin: 0;
`

const ProductInfo = styled.p`
margin: 0;
font-size: 18px;
`

const Ingredients = styled.p`
margin: 15px 5px;
width: 200px;
font-size: 18px;
display: inline-flex;
`

const ProductImage = styled.img`
max-height: 400px;
margin: 15px 5px;
display: inline-flex;
border: 2px solid black;
`

