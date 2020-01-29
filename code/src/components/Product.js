import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector(state => state.products.product)
  const formatIngredients = []
  const formattedNutritients = []
  console.log('scan', scan)


  if (!scan) return null

  if (scan.product && scan.product.ingredients_analysis_tags) {
    formatIngredients = scan.product.ingredients_analysis_tags.map(ingredient =>
      ingredient.replace(/\w+:/, ' ').replace(/-/gi, ' ').replace(':', ' ')
    )
  }

  if (scan.product && scan.product.nutrient_levels_tags) {
    formattedNutritients = scan.product.nutrient_levels_tags.map(ingredient =>
      ingredient.replace(/\w+:/, ' ').replace(/-/gi, ' ').replace(':', ' ')
    )
  }



  return (
    <div>
      <h1>your go to ingredient and Nutritional source for information</h1>
      {!scan.product &&
        <h2> Wanna know the truth about what your eating?
        <br />Click on the button to find out more
      </h2>
      }

      {scan.product &&
        <div className="thinner-card">
          <img src={scan.product.image_front_url} alt="productpic" />

          <div className="product-container">

            <ul className="product-info">
              <span className="highlight">Ingredients:</span>
              {formatIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <ul className="product-info">
              <span className="highlight">Nutritional information:</span>
              {formattedNutritients.map((nutritient, index) => (
                <li key={index}>{nutritient}</li>
              ))}
            </ul>
          </div>
          <img src={scan.product.image_ingredients_url} alt="ingredients pics" />
        </div>
      }
      {scan.status === 0 &&
        <h1 className="not-found">{scan.status_verbose}
          <span role="img" aria-label="sad">☹️</span>
          Please try again or chocie another product!
          </h1>
      }
    </div>
  )
}
