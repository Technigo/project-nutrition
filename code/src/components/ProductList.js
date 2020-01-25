import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'lib/Card'
import { Error } from 'components/Error'

export const ProductList = () => {
  const scan = useSelector((state) => state.products.product)

  if (!scan) return null

  console.log('SCAN', scan)

  return (
    <>
      {scan.product && scan.status === 1 && (
        <Card
          thumbNailUrl={scan.product.image_thumb_url}
          title="Your scanned product"
          coverImage={scan.product.image_url}>
          <h1>Product: {scan.product.product_name}</h1>
          <p>Expiration date: {scan.product.expiration_date}</p>
          <h3>Brand: {scan.product.brands}</h3>
          
        </Card>
      )}
      {scan.status === 0 && <Error msg={scan.status_verbose} />}
    </>
  )
}

