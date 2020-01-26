import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const { product } = useSelector(state => state.products.product);
  const { isLoading } = useSelector(state => state.ui.isLoading);
  console.log("product", product);

  if (isLoading) return null;

  if (!product) return <h1>Is it vegan?</h1>;

  const isItVegan = product => {
    if (!product || product.ingredients === [])
      return <h2>Sorry, We don't know if this product is vegan or not.</h2>;

    if (product.ingredients[3].vegan === "yes" || "Yes")
      return (
        <>
          <h1> {product.product_name}</h1>
          <h2>Yes! This product is vegan!</h2>
        </>
      );

    if (product.ingredients[3].vegan === "no" || "No")
      return (
        <>
          <h1> {product.product_name}</h1>
          <h2>No! This product is NOT vegan!</h2>
        </>
      );
  };

  return (
    <>
      {isItVegan(product)}

      {/* {product.product && (
        <>
          <h1> {product.product.product_name}</h1>
          <h1>{product.product.ingredients[3].vegan}</h1>
        </>
      )} */}
    </>
  );
};
