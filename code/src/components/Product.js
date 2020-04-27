import React from 'react'
import { useSelector } from 'react-redux'


export const Product = () => {
  const scan = useSelector(state => state.productsReducer.product)

  console.log('SCAN', scan)


  return (
    <>
      {scan.product && scan.status === 1 && (
        <p>{scan.product.product_name}</p>
      )}
    </>
  )
}