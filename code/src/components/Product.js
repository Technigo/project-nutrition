import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector((state) => state.products.product)
  console.log(scan)

  const formattedIngredientAnalysis =
    scan.product && 
    scan.product.ingredients_analysis_tags.map(ingredient => 
      ingredient.replace('en', ' ').replace(/-/gi,' ').replace(':', ' ')
    )
  
  const formattedNutritients =
    scan.product &&
    scan.product.nutrient_levels_tags.map(ingredient => 
      ingredient.replace('en', ' ').replace(/-/gi,' ').replace(':', ' ')
    )
  
  const formattedAllergens =
    scan.product &&
    scan.product.allergens_tags.map(ingredient => 
      ingredient.replace('en', ' ').replace(/-/gi,' ').replace(':', ' ')
    )

  if(!scan) return null

  return (
    <div>
      <h1>Sweet Detector<span role="img" aria-label="candies">🍬🍫🍭</span></h1>
      {!scan.product && 
      <h2> Wanna know the truth about the sweets and snacks you're eating? 
        <br/>Click on the button below and let your webcam reveal the truth 
      </h2>
      }
      
      {scan.product && 
      <div className="thinner-card">
        <img src={scan.product.image_front_url} alt="product"/>

        <div className="product-info-container">

          <ul className="product-info">
            <span className="highlight">Ingredients analysis:</span>
            {formattedIngredientAnalysis.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
              ))}
          </ul>

          <ul className="product-info">
            <span className="highlight">Nutrient levels:</span>
            {formattedNutritients.map((nutritient, index) => (
              <li key={index}>{nutritient}</li>
              ))}
          </ul>

          <ul className="product-info">
            <span className="highlight">Allergens:</span>
            {formattedAllergens.map((allergen, index) => (
              <li key={index}>{allergen}</li>
              ))}
          </ul>
        </div>
          <img src={scan.product.image_ingredients_url} alt="ingredients" />
      </div>
      } 
        {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </div>
  )
}