import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Product = () => {
  const scannedProduct = useSelector(state => state.products.product.product)
  const scannedProductCode = useSelector(state => state.products.product.code)

  if (!scannedProduct) return null
  if (!scannedProductCode) return null

  // Removing prefixes and splitting strings into arrays
  const formatData = (data) => {
    return data.replace(/([A-z])\w+:/gi, '').split(',')
  }
  const brandsList = scannedProduct.brands && formatData(scannedProduct.brands)
  const tracesList = scannedProduct.traces && formatData(scannedProduct.traces)
  const allergensList = scannedProduct.allergens && formatData(scannedProduct.allergens)

  return (
    <>
      <ProductArticle>
        <ProductName>{scannedProduct.product_name}</ProductName>

        {brandsList && (
          <ProductBrands>
            {brandsList.map((brand, index) => (
              <ProductBrand key={index}>{brand}</ProductBrand>
            ))}
          </ProductBrands>
        )}

        <ProductDetailsHeading>Allergens</ProductDetailsHeading>
        {allergensList && (
          <ProductDetails>
            {allergensList.map((allergen, index) => (
              <ProductDetail key={index}>{allergen}</ProductDetail>
            ))}
          </ProductDetails>
        )}
        {!allergensList && (
          <ProductText><Bold>Caution:</Bold> There's no reported data for allergens.</ProductText>
        )}

        <ProductDetailsHeading>Traces of allergens</ProductDetailsHeading>
        {tracesList && (
          <ProductDetails>
            {tracesList.map((trace, index) => (
              <ProductDetail key={index}>{trace}</ProductDetail>
            ))}
          </ProductDetails>
        )}
        {!tracesList && (
          <ProductText><Bold>Caution:</Bold> There's no reported data for traces of allergens.</ProductText>
        )}

        <ProductDetailsHeading>More details about this product</ProductDetailsHeading>
        <ProductText>
          See all available details and update product information on Open Food Facts website. <br />
          <ProductLink href={`https://world.openfoodfacts.org/product/${scannedProductCode}/`}>{scannedProduct.product_name} on Open Food Facts</ProductLink>
        </ProductText>

      </ProductArticle>
    </>
  )
}

const ProductArticle = styled.article`
  background-color: rgba(244, 244, 244, 1);
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;

  @media screen and (min-width: 668px) {
    max-width: 600px;
    width: 100%;
  }
`

const ProductName = styled.h2`
  font-family: 'Montserrat', serif;
  text-transform: capitalize;
`

const ProductDetailsHeading = styled.h3`
  margin-bottom: 0.25rem;
  margin-top: 1rem;
`
const ProductDetails = styled.ul`
  margin: 0 1rem;
`

const ProductDetail = styled.li`
  line-height: 1.5;
  text-transform: capitalize;
`

const ProductBrands = styled(ProductDetails)`
  list-style: none;
  margin-left: 0;
`
const ProductBrand = styled(ProductDetail)`
  font-family: 'Montserrat', serif;
  display: inline;

  &:not(:last-child):after {
    content: ', ';
  }
`

const ProductText = styled.p`
  line-height: 1.5;
`

const Bold = styled.span`
  font-weight: 900;
`

const ProductLink = styled.a`
  color: #499091;
`