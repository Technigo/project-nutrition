import React from "react"
import { useSelector } from "react-redux"
import { ManualCode } from "components/ManualCode"
import { ScanBarcode } from "components/ScanBarcode"
import styled from "styled-components"

const InfoText = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

export const Product = () => {
  const scan = useSelector(state => state.products.product)
  let formatIngredients = []
  let formatNutritients = []

  if (!scan) return null

  if (scan.product && scan.product.ingredients_analysis_tags) {
    formatIngredients = scan.product.ingredients_analysis_tags.map(ingredient =>
      ingredient
        .replace(/\w+:/, " ")
        .replace(/-/gi, " ")
        .replace(":", " ")
    )
  }

  if (scan.product && scan.product.nutrient_levels_tags) {
    formatNutritients = scan.product.nutrient_levels_tags.map(ingredient =>
      ingredient
        .replace(/\w+:/, " ")
        .replace(/-/gi, " ")
        .replace(":", " ")
    )
  }

  return (
    <Container>
      {!scan.product && (
        <InfoText>
          <h1>Scan product to get a conclusion of what you are about to eat</h1>
        </InfoText>
      )}
      <ScanBarcode />
      <ManualCode />

      {scan.product && (
        <div className='card'>
          <ul className='product'>
            <span className='highlight-info'>Ingredients:</span>
            {formatIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <ul className='product'>
            <span className='highlight-info'>Nutritional information:</span>
            {formatNutritients.map((nutritient, index) => (
              <li key={index}>{nutritient}</li>
            ))}
          </ul>
        </div>
      )}

      <div className='not-found'>
        {scan.status === 0 && (
          <InfoText>
            Product not found, scan again or try another product
          </InfoText>
        )}
      </div>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
