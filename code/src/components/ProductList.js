import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'lib/Card'


export const ProductList = () => {
  const scan = useSelector((state) => state.products.product)

  if (!scan) return "No scanned products"

  console.log('SCAN', scan)

  return (
    <div>
      <Card
        thumbNailUrl="https://static.openfoodfacts.org/images/products/500/018/432/1064/front_en.11.100.jpg"
        title="Your scanned product"
        coverImage={scan.image_url}>
        <h1>Product: {scan.product_name}</h1>
        <p>{scan.expiration_date}</p>
        <h3>Brand: {scan.brands}</h3>

      </Card>
    </div>
  )
}

// { product.image_small_url }
