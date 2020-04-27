import React from "react";
import { useSelector } from "react-redux";

export const ProductInfo = () => {
  // => store.productsList.products ??
  const item = useSelector((store) => store.productsList.products);
  // console.log(`Here is the item: ${item}`)
  console.log(item);

  // return <p>{item.product.product_name}</p>;
  return (
    <div>
      {/* <p>{item.product.product_name}</p> */}
      {item.product && (<h1>Date: {item.product.created_t}</h1>)}
      {item.product && (<h1>Product_Name: {item.product.product_name}</h1>)}
      {item.product && (<h1>Generic_Name: {item.product.generic_name}</h1>)}
      {item.product && (<h1>Brand: {item.product.brands}</h1>)}
      {item.product && (<h1>ingredients_text: {item.product.ingredients_text}</h1>)}
      {item.product && (<h1>ingredients: {item.product.ingredients.text}</h1>)}
      <p>{item.status_verbose}</p>
      <p>{item.code}</p>
    </div>
  );
};
/*
Name of the Product
Type of product
image

*/
