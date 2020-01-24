import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { TabBar } from '../lib/TabBar'

// STYLED COMPONENTS
const TextNotFound = styled.h3`
  color: #333;
  text-align: center;
`
// PRODUCT COMPONENT
export const Product = () => {

  const product = useSelector(state => state.products.product)

  console.log('Product:', product)
  console.log('Status:', product.status)

  if (!product) return null

  // Only show tabs when product is found later
  return (
    <>
      {product &&
        <TabBar
          tabs={[
            { title: "Info", render: () => <h2>Tabs will just show when a product is found. Route to /info?</h2> },
            { title: "Allergenes", render: () => <h2>Route to /allergenes?</h2> },
            { title: "Other", render: () => <h2>Route to /other?</h2> }
          ]}
        />}
      {product && product.status === 0 &&
        <TextNotFound>Product not found in database. Feel free to contribute with your product: https://world.openfoodfacts.org/</TextNotFound>}
      {
        product.product &&
        <>
          <h2>Product: {product.product.product_name}</h2>
          <h3>Brand: {product.product.brands}</h3>
          <h3>Vegan? {product.product.ingredients.vegan}</h3>
          <h3>Vegetarian? {product.product.ingredients.vegetarian}</h3>
          <h3>Ingredients: {product.product.ingredients_hierarchy}</h3>
        </>
      }
    </>
  )

}