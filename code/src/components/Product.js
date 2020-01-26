import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { TabBar } from '../lib/TabBar'
import { ProductGeneral } from './ProductGeneral'
import { ProductIngredients } from './ProductIngredients'
import { ProductOther } from './ProductOther'

// STYLED COMPONENTS
const ProductWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const TextNotFound = styled.h3`
  padding: 20px;
  margin: 0;
  color: #f1f1f1;
  text-align: center;
`
const Link = styled.a`
  color: #B5FFE1;
  text-decoration: none;
`

// PRODUCT COMPONENT
export const Product = () => {

  const product = useSelector(state => state.products.product)

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
              { title: "Category", render: () => <ProductOther /> }
            ]}
          />
        </ProductWrapper>
      )}

      {product.status === 0 && (
        <ProductWrapper>
          <TextNotFound>Product not found in database!</TextNotFound>
          <TextNotFound>Feel free to contribute with your product by visiting <Link href='https://world.openfoodfacts.org/'>OpenFoodFacts site >></Link></TextNotFound>
        </ProductWrapper>
      )}
    </>
  )

}