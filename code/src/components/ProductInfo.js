import React from 'react'
import { useSelector } from 'react-redux'

export const ProductInfo = () => {
  const data = useSelector((state) => state.food)
  const showScanner = useSelector((state) => state.scanner.showScanner)
  const productFound = useSelector((state) => state.food)

  return (
    <div>
      {!showScanner && productFound.status && data && (
        <h2>{data.product.ingredients_that_may_be_from_palm_oil_n < 1 ? 'Yeah!! No Palm Oil!! 🐵' : 'It contains palm oil!! 🙊'}</h2>)}
      {!showScanner && !productFound.status && productFound.length !== 0 && (
        <h3>Product not found in our database</h3>
      )}
    </div>
  )
}