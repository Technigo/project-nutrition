import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector((state) => state.products.product)
  const isScanning = useSelector((state) => state.ui.isScanning)

  if (!isScanning && product.status === 0) {
    return (
      <>
        <p>Oh no, I couldn't find this product.</p>
        <p>
          If you have the time, please visit world.openfoodfacts.org and add the
          product for others to find!
        </p>
      </>
    )
  }

  if (!isScanning && product.status === 1) {
    return (
      <>
        <h2>{product.product.product_name}</h2>
        <h3>
          Please sort this as{''} {product.product.packaging.toLowerCase()}
        </h3>

        <img className='product-image' src={product.product.image_url} />
      </>
    )
  }

  return <></>
}
