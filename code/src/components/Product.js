import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const { product } = useSelector(state => state.products.product);
  console.log("product", product);

  if (!product) return <h1>Is it vegan?</h1>;

  const isItVegan = product => {
    if (!product)
      return <h4>Sorry, We don't know if this product is vegan or not.</h4>;

    if (product.ingredients.every(ingredient => ingredient.vegan !== "no"))
      return (
        <>
          <h3> {product.product_name}</h3>
          <h4>Yes! This product is vegan.</h4>
        </>
      );
    else
      return (
        <>
          <h3> {product.product_name}</h3>
          <h4>No! This product is NOT vegan.</h4>
        </>
      );
  };

  return <>{isItVegan(product)}</>;
};
