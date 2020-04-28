import React from "react";
import { useSelector } from "react-redux";
// import { NotFound } from 'components/NotFound'

export const ProductInfo = () => {
  // => store.productsList.products ??
  const item = useSelector((store) => store.productsList.products);
  // console.log(`Here is the item: ${item}`)
  console.log(item);

  if (!item) return null

/*   if (!item.product.product_name) {
    return(
      <>
        <NotFound />
      </>
    )
  } */
  // If no items found
  
  // return <p>{item.product.product_name}</p>;
  return (
    <div>
      {/* {item.product && product.status === 1 && ()} */}
      {item.product && <h1>{item.product.product_name}</h1>}
      {item.product && <h1>{item.product.brands}</h1>}
      {item.product && <h1>Fat: {item.product.nutriments.fat_100g}</h1>}
      {item.product && <h1>Calories: {item.product.nutriments.energy_100g}</h1>}
      {item.product && <h1>Sugars: {item.product.nutriments.sugars_100g}</h1>}
      {item.product && (
        <h1>Proteins: {item.product.nutriments.proteins_100g}</h1>
      )}


      {/* <p>{item.status_verbose}</p> */}
      {/* <p>{item.code}</p> */}
      {item.status === 0 && <h4>Oh no! {item.status_verbose}.</h4>}
    </div>
  );
};
/*
Name of the Product
Type of product
image

{item.product && (
        <h1>Vegan info:{item.product.ingredients_analysis_tags[0]}</h1>
      )}
      {item.product && (
        <h1>Vegan info:{item.product.ingredients_analysis_tags[1]}</h1>
      )}
      {item.product && (
        <h1>Vegan info:{item.product.ingredients_analysis_tags[2]}</h1>
      )}



{item.product && <h1>Date: {item.product.created_t}</h1>}
{item.product && <h1>Generic_Name: {item.product.generic_name}</h1>}
*/
