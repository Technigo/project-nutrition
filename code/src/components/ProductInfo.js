import React from 'react'
import './css/productinfo.css'

export const ProductInfo = (props) => {

  return (
    <div className="product-info">
      {props.product.nutriments.energy_100g && (
        <div className="nutrient">
          <span><span>⚡️</span>Energy: </span>
          <span>{props.product.nutriments.energy_100g} {props.product.nutriments.energy_unit}</span>
        </div>
      )}
      {props.product.nutriments.salt_100g && (
        <div className="nutrient">
          <span> <span>🧂</span>Salt: </span>
          <span>{props.product.nutriments.salt_100g} g</span>
        </div>
      )}
      {props.product.nutriments.sugars_100g && (
        <div className="nutrient">
          <span><span>🍭</span>Sugars: </span>
          <span>{props.product.nutriments.sugars_100g} g</span>
        </div>
      )}
      {props.product.allergens && (
        <div className="allergies">
          <span><span>📢</span>Allergens: </span>
          <span>{props.product.allergens} </span>
        </div>
      )}
    </div>
  )
}