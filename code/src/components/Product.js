import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const product = useSelector(state => state.products.product);

  if (!product.fetched) return <h1>Is it vegan?</h1>;
  if (!product.exist) {
    return <h4>Sorry, We don't know if this product is vegan or not.</h4>;
  }

  return (
    <>
      <h3> {product.name}</h3>
      <h4>{product.text}</h4>
    </>
  );
};
