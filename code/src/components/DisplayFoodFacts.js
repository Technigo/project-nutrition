import React from 'react';
import { useSelector } from "react-redux";
import { ProductFound } from "components/ProductFound";
import { ProductNotFound } from "components/ProductNotFound";
import { BeforeScan } from "components/BeforeScan"

export const DisplayFoodFacts = () => {
  const product = useSelector((store) => store.products.product)
  console.log("testing", product.product)

  if(product.status === 1) {
  return (
    <div>
      <ProductFound/>
    </div>
  )
  } else if(product.status === 0) {
  return (
    <div>
      <ProductNotFound/>
    </div>
  )
  } else {
  return (
    <div>
      <BeforeScan/>
    </div>
    )
  }
}
