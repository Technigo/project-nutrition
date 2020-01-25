import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Heading } from './Text/Heading'
import { List } from './Text/List'
import { ListItem } from './Text/ListItem'
import { Paragraph } from './Text/Paragraph'
import { Link } from './Text/Link'

import { Error } from './Error'

export const Product = () => {
  const scannedProduct = useSelector(state => state.products.product.product)
  const scanStatus = useSelector(state => state.products.product.status)
  const scannedProductCode = useSelector(state => state.products.product.code)
  const cameraOn = useSelector(state => state.ui.isCameraOn)

  if (scanStatus === 0) return (

    <Error />
  )
  if (!scannedProduct) return null

  // Removing prefixes and splitting strings into arrays
  const formatData = (data) => {
    return data.replace(/([A-z])\w+:/gi, '').split(',')
  }
  const brandsList = scannedProduct.brands && formatData(scannedProduct.brands)
  const tracesList = scannedProduct.traces && formatData(scannedProduct.traces)
  const allergensList = scannedProduct.allergens && formatData(scannedProduct.allergens)

  return (
    <>
      {!cameraOn && (
        <ProductArticle>
          {scannedProduct.product_name && (
            <Heading level="h2">{scannedProduct.product_name}</Heading>

          )}


          {brandsList && (
            <BrandsList>
              {brandsList.map((brand, index) => (
                <Brand key={index}>{brand}</Brand>
              ))}
            </BrandsList>
          )}

          <Heading level="h3">Allergens</Heading>
          {allergensList && (
            <List>
              {allergensList.map((allergen, index) => (
                <ListItem key={index}>{allergen}</ListItem>
              ))}
            </List>
          )}
          {!allergensList && (
            <Paragraph><Bold>Caution:</Bold> There's no reported data for allergens.</Paragraph>
          )}

          <Heading level="h3">Traces of allergens</Heading>
          {tracesList && (
            <List>
              {tracesList.map((trace, index) => (
                <ListItem key={index}>{trace}</ListItem>
              ))}
            </List>
          )}
          {!tracesList && (
            <Paragraph><Bold>Caution:</Bold> There's no reported data for traces of allergens.</Paragraph>
          )}

          <Heading level="h3">More details about this product</Heading>
          <Paragraph>
            See all available details and update product information on Open Food Facts website. <br />
            {scannedProductCode && (
              <Link url={`https://world.openfoodfacts.org/product/${scannedProductCode}/`}>{scannedProduct.product_name} on Open Food Facts</Link>
            )}

          </Paragraph>

        </ProductArticle>
      )}
    </>
  )
}

const ProductArticle = styled.article`
  background-color: rgba(244, 244, 244, 1);
  border-radius: 5px;
  box-shadow: 1px 2px 3px 1px #dad8d8;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;

  @media screen and (min-width: 668px) {
    padding: 2rem;
    max-width: 600px;
    width: 100%;
  }
`

const BrandsList = styled(List)`
  list-style: none;
  margin-left: 0;
`
const Brand = styled(ListItem)`
  font-family: 'Montserrat', serif;
  display: inline;

  &:not(:last-child):after {
    content: ', ';
  }
`

const Bold = styled.span`
  font-weight: 900;
`