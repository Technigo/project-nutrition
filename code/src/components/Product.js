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
            type={product.product && product.product.pnns_groups_2}
          />

        </section>
      )}

      {product.status === 0 && <h2>{product.status_verbose}</h2>}

    </>
  )
}