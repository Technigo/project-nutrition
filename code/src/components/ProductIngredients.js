import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const ContentWrapper = styled.div`
  padding: 20px;
`
const List = styled.ul`
  list-style: none;
  margin: 0;
`
const ListItems = styled.li`
  margin: 0;
`

export const ProductIngredients = () => {

  const product = useSelector(state => state.products.product)

  const formattedIngredients =
    product.product &&
    product.product.ingredients_hierarchy.map(ingredients =>
      ingredients.replace(/\w+:/, '').replace(/-/gi, ' ')
    )

  return (
    <ContentWrapper>
      <List>Ingredients: {formattedIngredients.map((ingredient, index) => (
        <ListItems key={index}>{ingredient}</ListItems>
      ))}</List>
    </ContentWrapper>
  )
}