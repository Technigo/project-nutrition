import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => { 
  const scan = useSelector(state => state.products.product)
  
  if (!scan) return null

  console.log('SCAN', scan)

  return(
    <>
      {scan.product && ( 
        <section>
          <h1>Product</h1>
          <img src={scan.product.image_front_small_url} />
          <img src={scan.product.image_ingredients_url} />
          <p>{scan.product.allergens_tags}</p>
        </section>
      )}
    </>
  )
}

