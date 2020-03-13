import React from 'react'
import { useSelector } from 'react-redux'
import { ManualCode } from 'components/ManualCode'
import { ScanBarcode } from 'components/ScanBarcode'
import style from 'styled-components'

export const Product = () => {
  const scan = useSelector(state => state.products.product)
  let formatIngredients = []
  let formatNutritients = []

  if (!scan) return null

  if (scan.product && scan.product.ingredients_analysis_tags) {
    formatIngredients = scan.product.ingredients_analysis_tags.map(ingredient =>
      ingredient.replace(/\w+:/, ' ').replace(/-/gi, ' ').replace(':', ' ')
    )
  }

  if (scan.product && scan.product.nutrient_levels_tags) {
    formatNutritients = scan.product.nutrient_levels_tags.map(ingredient =>
      ingredient.replace(/\w+:/, ' ').replace(/-/gi, ' ').replace(':', ' ')
    )
  }

  return (
    <Container>
      <ScanBarcode />
      {!scan.product &&
        <div>
          <h1>Check what you eat</h1>
        </div>
      }
      {scan.product &&
        <div className="card">
          <img src={scan.product.image_front_url} alt="productpic" />
          <img src={scan.product.image_ingredients_url} alt="ingredients pics" />
          
            <ul className="product">
              <span className="highlight-info">Ingredients:</span>
              {formatIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <ul className="product">
              <span className="highlight-info">Nutritional information:</span>
              {formatNutritients.map((nutritient, index) => (
                <li key={index}>{nutritient}</li>
              ))}
            </ul>
          
        </div>
      }
      {scan.status === 0 &&
        <div className="not-found">
          <h1 >
            Product not found
          </h1>
        </div>
      }
      <ManualCode />
    </Container>
  )
}

const Container = style.section`
display: flex;
Justify-content: center;
align-items: center;
flex-direction: column;
`