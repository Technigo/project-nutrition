import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Product = () => {
  const scannedProduct = useSelector(state => state.products.product.product)

  if (!scannedProduct) return null

  const allergensList = scannedProduct.allergens.replace(/([A-z])\w+:/gi, '').split(',')
  console.log("Text", scannedProduct.allergens)
  console.log("List", allergensList)

  const tracesList = scannedProduct.traces.replace(/([A-z])\w+:/gi, '').split(',')

  return (
    <>
      <ProductArticle>
        <ProductName>{scannedProduct.product_name}</ProductName>
        <ProductBrand>{scannedProduct.brands}</ProductBrand>
        {allergensList && (
          <>
            <ProductDetailsHeading>Contains the following allergens</ProductDetailsHeading>
            <ProductDetails>
              {allergensList.map((allergen, index) => (
                <ProductDetail key={index}>{allergen}</ProductDetail>
              ))}
            </ProductDetails>
          </>
        )}
        {allergensList && (
          <>
            <ProductDetailsHeading>Traces of allergens</ProductDetailsHeading>
            <ProductDetails>
              {tracesList.map((trace, index) => (
                <ProductDetail key={index}>{trace}</ProductDetail>
              ))}
            </ProductDetails>
          </>
        )}
      </ProductArticle>
    </>
  )
}

const ProductArticle = styled.article`
  background-color: rgb(173, 201, 233);
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
`

const ProductName = styled.h1`
  font-family: 'Montserrat', serif;
`

const ProductBrand = styled.p`
  font-family: 'Montserrat', serif;
`
const ProductDetailsHeading = styled.h3`
`
const ProductDetails = styled.ul`
  margin: 1rem;
`

const ProductDetail = styled.li`
  text-transform: capitalize;
`