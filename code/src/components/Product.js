import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector(state => state.products.product)

  if (!scan) return null
  
console.log('SCAN', scan)

  return (
    <>
  
      {scan.product && (
        <div>
          <img src={scan.product.image_small_url} />
          {!scan.product.image_small_url && <span>No picture.</span>}
          <h3>{scan.product.product_name}</h3>
          {scan.product.ingredients_from_palm_oil_tags[0] && <p>There is palm oil in this product</p>}
          {!scan.product.ingredients_from_palm_oil_tags[0] && <p>There is palm oil in this product</p>}
        </div>
      )}
       {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </>
  )
}

