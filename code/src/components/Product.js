import React from 'react'
import { useSelector } from 'react-redux'
import './product.css'


export const Product = () => {
  const scan = useSelector(state => state.products.product)
  
  if (!scan) return null
  
console.log('SCAN', scan)

  return (
    <>       
      {scan.product && (
        <div className="result-container">
        <div className="result-box">
          <img src={scan.product.image_small_url} />
          {!scan.product.image_small_url && <span>No picture.</span>}
          <h3>{scan.product.product_name}</h3>
          {scan.product.ingredients_from_palm_oil_tags[0] && <p>There might be palm oil in this product</p>}
          {!scan.product.ingredients_from_palm_oil_tags[0] && <p>This product should not contain palm oil</p>}
      
        </div>
        </div>
      )}
   
       <div className="result-container">
         {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
       </div>
    </>
  )
}

