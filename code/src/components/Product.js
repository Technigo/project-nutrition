import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Card } from 'components/Card'


const ThinnerCard = styled(Card)`
  width: 370px;
`

export const Product = () => {
  const product = useSelector(state => state.products.product)

  if (!product) return null

  console.log('product', product)

  return (
    <>
      {product.product && product.status === 1 && (
        <section>
          <ThinnerCard
            coverImage={product.product.image_url}
            thumbnailUrl={product.product.image_front_thumb_url}
            title={product.product && product.product.product_name}
            secondaryText={product.product && product.product.ingredients_text_en}
            numberOfIng={product.product && product.product.pnns_groups_2}

          />
          {/* 
          <img src={product.product && product.product.image_url} alt="product"></img>

          <h2>Nutrients:</h2>
          <p>{product.product && product.product.ingredients_text_with_allergens_en}</p>
          <h2>Store:</h2>
          <p>{product.product && product.product.stores}</p>
          <h2>All available facts:</h2>
          <p>{product.product && product.product.ingredients_original_tags}</p> */}
        </section>
      )}

      {product.status === 0 && <h1>{product.status_verbose}</h1>}

    </>
  )
}