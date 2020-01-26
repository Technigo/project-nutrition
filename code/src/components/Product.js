import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const { product } = useSelector(state => state.products.product);
  console.log("product", product);

  if (!product) return <h1>Is it vegan?</h1>;

  const isItVegan = product => {
    if (!product)
      return <h2>Sorry, We don't know if this product is vegan or not.</h2>;

    if (product.ingredients.every(ingredient => ingredient.vegan !== "no"))
      return (
        <>
          <h1> {product.product_name}</h1>
          <h2>Yes! This product is vegan!</h2>
        </>
      );
    else
      return (
        <>
          <h1> {product.product_name}</h1>
          <h2>No! This product is NOT vegan!</h2>
        </>
      );
  };

  return <>{isItVegan(product)}</>;
};
