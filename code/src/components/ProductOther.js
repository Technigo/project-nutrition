import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const ContentWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`
const Card = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #fff;
  width: 50%;
  height: 100%;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 18px;
  @media (max-width: 449px) {
    width: 95%;
    font-size: 14px;
  }
  @media (min-width: 450px) and (max-width: 800px) {
    width: 70%;
  }
`
const List = styled.ul`
  list-style: square inside;
  padding: 0;
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
      <Card>
        <List>{formattedCategories.map((category, index) => (
          <ListItems key={index}>{category}</ListItems>
        ))}</List>
      </Card>
    </ContentWrapper>
  )
}