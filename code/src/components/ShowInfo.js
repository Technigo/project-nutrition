import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledShowInfo = styled.div`
  padding: 2rem 2rem;
`

const List = styled.ul`
  border: 1px solid rgba(34, 35, 39, 0.17);
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(34, 35, 39, 0.16);
  padding: 1rem;
`

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ItemTitle = styled.span`
  text-align: left;
`
const ItemDetails = styled.span`
  text-align: right;
`

const Error = styled.h3`
  text-align: center;
  color: #df3457;
`

export const ShowInfo = () => {
  const data = useSelector((state) => state.food.product)
  const showScanner = useSelector((state) => state.scanner.showScanner)
  const productFound = useSelector((state) => state.food)

  return (
    <StyledShowInfo>
      {!showScanner && productFound.status && data && (
        <List>
          <Item>
            <ItemTitle>Carbs</ItemTitle>
            {data && data.nutriments.carbohydrates_100g ? (
              <ItemDetails>{data.nutriments.carbohydrates_100g}g</ItemDetails>
            ) : (
              <ItemDetails>-</ItemDetails>
            )}
          </Item>
          <Item>
            <ItemTitle>Proteins</ItemTitle>
            {data && data.nutriments.proteins ? (
              <ItemDetails>{data.nutriments.proteins}g</ItemDetails>
            ) : (
              <ItemDetails>-</ItemDetails>
            )}
          </Item>
          <Item>
            <ItemTitle>Fats</ItemTitle>
            {data && data.nutriments.fat_100g ? (
              <ItemDetails>{data.nutriments.fat_100g}g</ItemDetails>
            ) : (
              <ItemDetails>-</ItemDetails>
            )}
          </Item>
        </List>
      )}
      {!showScanner && !productFound.status && productFound.length !== 0 && (
        <Error>Product not found in our database</Error>
      )}
    </StyledShowInfo>
  )
}
