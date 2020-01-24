import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const product = useSelector(state => state.products.product);
  console.log("product", product);
  if (!product) return null;

  return (
    <>
      <h1>Product:</h1>
      <img src={product.product && product.image_front_url} alt="" />
    </>
  );
};
