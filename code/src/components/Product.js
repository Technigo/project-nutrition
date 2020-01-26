/* eslint-disable indent */
import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector((state) => state.products.product)

  if (!scan) return null
  console.log('scan', scan)

  return (
    <>
    {scan.product && scan.status === 1 && (
        <section>
          <h2>{scan.product.product_name}</h2>
          <img src={scan.product.image_front_url} alt="" />
                  <p>Nutrition grade:{scan.product.nutrition_grades}</p>
                  <p>No of ingredients:{scan.product.ingredients_n}</p>
                  <p>Quantity:{scan.product.quantity}</p>
                  <p>Ingredients from palmoil:
                   {scan.product.ingredients_from_or_that_may_be_from_palm_oil_n}
                  </p>
                  <span className="black">Read more why palmoil is <a href="https://www.orangutans-sos.org/rainforesthome/?gclid=EAIaIQobChMIqOCQ8qqh5wIVQkQYCh35VQhYEAAYASAAEgKX1PD_BwEb" target="new">bad here</a></span>

        </section>
     )}
     {scan.status === 0 && <h2>{scan.status.status_verbose}</h2>}
    </>
 )
}