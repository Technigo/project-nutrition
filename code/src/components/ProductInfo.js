import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { ScanBarcode } from './ScanBarcode'


export const ProductInfo = () => {
  const scannedProduct = useSelector((store) => store.product.product)

  if (scannedProduct.status === 1) { // Show if product was found

    const allergens = scannedProduct.product.allergens_tags
    const allergensExists = allergens.length > 0 // Check if product has allergen tags

    return (
      <Wrapper>
        <Title>{scannedProduct.product.product_name}</Title>

        {/* Show if product has allergen tags */}
        {allergensExists ?
          <>
            <SubTitle> This product contains the following allergens:</SubTitle>
            <ul>
              {allergens.map(allergen => // Map through allergen tags
                <li key={allergen}>
                  {allergen
                    .replace(/\w+:/, " ")
                    .replace(/-/gi, " ")
                    .replace(":", " ")}
                </li>
              )}
            </ul>
          </>

          :

          <SubTitle>Contains no allergens!</SubTitle>

        }

        <ScanBarcode />
      </Wrapper>
    )
  } else if (scannedProduct.status === 0) { // If product was not found
    return (
      <Wrapper>
        <Title>Sorry, no product found!</Title>
        <ScanBarcode />
      </Wrapper>
    )
  } else {
    return (
      <ScanBarcode />
    )
  }
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
`

const Title = styled.h2`
  margin: 25px auto;
  font-size: 26px;
  text-align: center;
  max-width: 85%;
`

const SubTitle = styled.h3`
  max-width: 85%;
  margin: 0;
  font-size: 24px;
  text-align: center;
  margin: auto;
`