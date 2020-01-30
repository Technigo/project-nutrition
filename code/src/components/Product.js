import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector(state => state.products.product)

  if (!scan) return null
  console.log('SCAN', scan)

  return (
    <>
      {scan.product && scan.status === 1 && (
        <section className='product-container'>
          <h1 className='title'>{scan.product.product_name}</h1>
          <h3>{scan.product.pnns_groups_2}</h3>
          <h4>country of origin: {scan.product.purchase_places}</h4>
        </section>
      )}
      {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </>
  )
}
