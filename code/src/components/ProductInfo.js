import React from 'react'
import './css/productinfo.css'

export const ProductInfo = (props) => {

  return (
    <div className="product-info">
      <span>The product name:</span>
      <span>{props.product.product_name}</span>
    </div>
  )
}