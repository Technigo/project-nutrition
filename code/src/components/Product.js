import React from 'react'
import { useSelector } from 'react-redux'
import './Product.css'

export const Product = () => {
  const scan = useSelector(state => state.products.product)

  if (!scan) return null

  console.log('SCAN', scan)



  return (
    <>
      {
        scan.product && scan.status == 1 && (
          <section className="result">
            <div className="product-wrapper">
              <h1 className="product-name">{scan.product.product_name}</h1>
              <p className="ingredients">INGREDIENTS: {scan.product.ingredients_text}</p>
            </div>
            <div className="image-wrapper" >
              <img className="front-image" src={scan.product.image_front_url} />
            </div>


          </section>
        )}
      {scan.status === 0 && <h1 className="not-found">{scan.status_verbose}</h1>}
    </>
  )
}