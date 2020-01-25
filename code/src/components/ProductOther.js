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

export const ProductOther = () => {

  const product = useSelector(state => state.products.product)

  const formattedCategories =
    product.product &&
    product.product.categories_tags.map(category =>
      category.replace(/\w+:/, '').replace(/-/gi, ' ')
    )

  return (
    <ContentWrapper>
      <List>Categories: {formattedCategories.map((category, index) => (
        <ListItems key={index}>{category}</ListItems>
      ))}</List>
    </ContentWrapper>
  )
}