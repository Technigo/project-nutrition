import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { TabBar } from '../lib/TabBar'

// STYLED COMPONENTS
const ProductWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextNotFound = styled.h3`
  color: #333;
  text-align: center;
`
const List = styled.ul`
  list-style: none;
  margin: 0;
`
const ListItems = styled.li`
  margin: 0;
`
// PRODUCT COMPONENT
export const Product = () => {

  const product = useSelector(state => state.products.product)

  const formattedCategories =
    product.product &&
    product.product.categories_tags.map(category =>
      category.replace(/\w+:/, '').replace(/-/gi, ' ')
    )

  console.log('Product:', product)
  console.log('Status:', product.status)

  if (!product) return null

  // Only show tabs when product is found later
  return (
    <ProductWrapper>
      {product && product.status === 0 &&
        <>
          <TextNotFound>Product not found in database!</TextNotFound>
          <TextNotFound>Feel free to contribute with your product by visiting <a href='https://world.openfoodfacts.org/'>OpenFoodFacts site >></a></TextNotFound>
        </>
      }

      {product.product &&
        <TabBar
          tabs={[
            { title: "General", render: () => <h2>Route to /info?</h2> },
            { title: "Allergenes", render: () => <h2>Route to /allergenes?</h2> },
            { title: "Other", render: () => <h2>Route to /other?</h2> }
          ]}
        />
      }

      {product.product &&
        <>
          <p>Product: {product.product.product_name}</p>
          <p>Brand: {product.product.brands}</p>
          <p>Vegan? {product.product.ingredients.vegan}</p>
          <p>Vegetarian? {product.product.ingredients.vegetarian}</p>
          <List>Ingredients: {product.product.ingredients_hierarchy.map((ingredient, index) => (
            <ListItems key={index}>{ingredient}</ListItems>
          ))}</List>
          <List>Categories: {formattedCategories.map((category, index) => (
            <ListItems key={index}>{category}</ListItems>
          ))}</List>
        </>
      }
    </ProductWrapper>
  )

}