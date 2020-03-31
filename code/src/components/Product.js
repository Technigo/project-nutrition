import React from "react";
import { useSelector } from "react-redux";
import "./product.css";

export const Product = () => {
  const scan = useSelector(state => state.products.product);
  let formatIngredients = [];
  let formatNutritients = [];
  console.log("scan", scan);

  if (!scan) return null;

  if (scan.product && scan.product.ingredients_analysis_tags) {
    formatIngredients = scan.product.ingredients_analysis_tags.map(ingredient =>
      ingredient
        .replace(/\w+:/, " ")
        .replace(/-/gi, " ")
        .replace(":", " ")
    );
  }

  if (scan.product && scan.product.nutrient_levels_tags) {
    formatNutritients = scan.product.nutrient_levels_tags.map(ingredient =>
      ingredient
        .replace(/\w+:/, " ")
        .replace(/-/gi, " ")
        .replace(":", " ")
    );
  }

  return (
    <div className="container">
      {!scan.product && (
        <div className="intro-container">
          <div className="intro-text">
            <h1> Healthy Life </h1>
            <h2>Ingredient and Nutritional information</h2>
          </div>
        </div>
      )}

      {scan.product && (
        <div className="card">
          <img src={scan.product.image_front_url} alt="productpic" />
          <img
            src={scan.product.image_ingredients_url}
            alt="ingredients pics"
          />

          <div>
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
        </div>
      )}
      {scan.status === 0 && (
        <div className="not-found">
          <h1>Please try again or choice another product!</h1>
        </div>
      )}
    </div>
  );
};
