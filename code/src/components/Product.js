import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector((state) => state.products.product)
  const ingredients = useSelector((state) => state.products.product.ingredients_analysis)
  
  console.log(product)
  console.log(ingredients)
  const formattedIngredients = ingredients.map((ingredient) => (
    ingredient
      .replace('en', '')
      .replace('-', '')
  ))


  if(!product) return null

  return (
    <div>
      <h1>Sweet Detector🍬🍫🍭</h1>
      {!product.product && 
      <h2> Wanna know the truth about the sweets and snacks you're eating? 
        <br/>Click on the button below and let your webcam reveal the truth 
      </h2>
      }
        {product.product && 
          <img src={product.product.image_front_url} alt="product"/>
        }
        {product.product && 
        <div className="product-info-container">
          <ul className="product-info">
            Ingredients: 
            {formattedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
          </ul>
          
          <ul className="product-info">Ingredients analysis: <li>{product.product.ingredients_analysis_tags}</li></ul>
          <ul className="product-info">Nutrient levels: {product.product.nutrient_levels_tags}</ul>
          <ul className="product-info">Countries: {product.product.countries_hierarchy}</ul>
        </div>
        }
    </div>
  )
}

// {food.product && 
//   <img src={food.product.image_small_url} alt="food"/>
// }

