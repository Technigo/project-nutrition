import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const ContentWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0 20px;
`
const Card = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #fff;
  width: 50%;
  height: 100%;
  padding: 20px;
  font-size: 18px;
  @media (max-width: 449px) {
    width: 95%;
    font-size: 14px;
  }
  @media (min-width: 450px) and (max-width: 800px) {
    width: 70%;
    font-size: 14px;
  }
`
const List = styled.ul`
  list-style: square inside;
  font-weight: bold;
  padding: 0;
  margin: 0;
`
const ListItems = styled.li`
  font-weight: normal;
  margin: 5px 0 0 0;
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
      <Card>
        <List>Product ingredients {formattedIngredients.map((ingredient, index) => (
          <ListItems key={index}>{ingredient}</ListItems>
        ))}</List>
      </Card>
    </ContentWrapper>
  )
}