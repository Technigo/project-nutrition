import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';


export const Product = () => {
  const scan = useSelector(state => state.productsReducer.product)

  return (
    <section>
      {scan.product && scan.status === 1 && (
        <div>
          <ProductImg src={scan.product.image_front_small_url} alt={scan.product.product_name} />
          <p>Product: {scan.product.product_name}</p>
          <H3>Nutrition info 100g / daily recommendations:</H3>
          <p>Protein: {scan.product.nutriments.proteins_100g}g /60g</p>
          <p>Salt: {scan.product.nutriments.salt_100g}g /6g</p>
          <p>Sugar: {scan.product.nutriments.sugars_100g}g /50g</p>
          <p>fat: {scan.product.nutriments.fat_100g}g /80g</p>
          <p>fiber: {scan.product.nutriments.fiber}g /30g</p>
        </div>
      )}
      {scan.status === 0 && <h3>Not found, please try again</h3>}
    </section>
  )
}

const ProductImg = styled.img`
  margin: 20px 0;
`

const H3 = styled.h3`
  background: #ffa6a6;
  padding: 10px;
`