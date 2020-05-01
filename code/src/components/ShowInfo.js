import React from 'react'
import { useSelector } from 'react-redux'
import {products} from "reducers/product"

export const ShowInfo = () => {
  const productInfo = useSelector(state => state.products.product)
  console.log("prodInfo",productInfo)
  /* if( !products === true) */ 
  return(
      <div>
       <h1> PRODUCT INFO: {productInfo.code} {productInfo.status}
       {productInfo.brands}</h1>
      </div>
  )
}