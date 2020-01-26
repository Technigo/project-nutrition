import React from 'react'
import './css/productimage.css'

export const ProductImage = (props) => {
  return (
    <div className="product-image">
      <img src={props.product.image_url ? props.product.image_url : 'assets/no-image.png'} alt="product-image" />
    </div>
  )
}