import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { products } from "reducers/products"
import styled from "styled-components/macro"

import { SaveButton } from "./SaveButton"
import { SavedProducts } from "./SavedProducts"


export const Product = () => {
  const product = useSelector(state => state.products.product)


  if (!product)
    return null

  console.log(product)

  return (
    <>
      {product.product && product.status === 1 && (
        <ProductContainer>
          <ProductName>Found: {product.product.product_name}</ProductName>
          <ProductInfo>Weight: {product.product.quantity}</ProductInfo>
          <ProductImage src={product.product.image_url} />
          <Ingredients>Ingredients: {product.product.ingredients_text}</Ingredients>

          {/* <ul>
            {product.product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul> */}
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
`

const ProductName = styled.h1`
margin: 0;
`

const ProductInfo = styled.p`
margin: 5px;
`

const Ingredients = styled.p`
margin: 5px;
width: 400px;
`

const ProductImage = styled.img`
max-height:
`

