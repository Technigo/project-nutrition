import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const isLoading = useSelector(state => state.ui.isLoading)
  const product = useSelector(state => state.products.product) 

  
  if (!product) return null
  
  return (
    <>  
    {product.status === 0 && <p>Try to scan again</p>}

    <img src={product.product && product.product.image_small_url} />
    {product.product && !product.product.image_small_url && <span>No picture available</span>}
    <h3>{product.product && product.product.product_name}</h3>
    {product.product && product.product.ingredients_from_palm_oil_tags[0] && <p>There is a big risk this product contains palmoil, for a more conscious consumtion, please do not buy this product.</p>}
    {product.product && !product.product.ingredients_from_palm_oil_tags[0] && <p>There is no or little risk this product contains palmoil.</p>}
    


   
    </>
  )
}