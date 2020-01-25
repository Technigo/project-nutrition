import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { TabBar } from '../lib/TabBar'
import { ProductGeneral } from './ProductGeneral'
import { ProductIngredients } from './ProductIngredients'
import { ProductOther } from './ProductOther'

// STYLED COMPONENTS
const ProductWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 30vh;
`
const TextNotFound = styled.h3`
  padding: 20px;
  color: #333;
  text-align: center;
`
// PRODUCT COMPONENT
export const Product = () => {

  const product = useSelector(state => state.products.product)

  console.log('Product:', product)
  console.log('Status:', product.status)

  if (!product) return null

  // Only show tabs when product is found
  return (
    <>
      {product.product && product.status === 1 && (
        <ProductWrapper>
          <TabBar
            tabs={[
              { title: "General", render: () => <ProductGeneral /> },
              { title: "Ingredients", render: () => <ProductIngredients /> },
              { title: "Other", render: () => <ProductOther /> }
            ]}
          />
        </ProductWrapper>
      )}

      {product.status === 0 && (
        <ProductWrapper>
          <TextNotFound>Product not found in database!</TextNotFound>
          <TextNotFound>Feel free to contribute with your product by visiting <a href='https://world.openfoodfacts.org/'>OpenFoodFacts site >></a></TextNotFound>
        </ProductWrapper>
      )}
    </>
  )

}