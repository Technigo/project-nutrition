import React from 'react'
import { useSelector } from 'react-redux'


export const ProductInfo = () => {

  const item = useSelector(store => store.productsList)
  // console.log(`Here is the item: ${item}`)
  console.log(item)

    return (
      <p> `Info here: ${item.products.product_name}`</p>
    )
/*
Name of the Product
Type of product
image

*/

}