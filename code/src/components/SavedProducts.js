import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components/macro"

export const SavedProducts = () => {
  const savedProducts = useSelector(state => state.products.savedProducts)

  if (!savedProducts)
    return null

  return (
    <>
      {savedProducts[0] &&
        <SavedList>
          <Heading>Saved products <span role="img" aria-label="list emoji">📝</span></Heading>
          <List>
            {savedProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </List>
        </SavedList>
      }
    </>
  )
}

const SavedList = styled.div`
background: rgba(255, 255, 255, 0.8);
font-family: 'Quicksand', sans-serif;
padding: 10px;
margin: 20px 10px;
@media (min-width: 668px) {
  margin: 30px;
}
`

const Heading = styled.h1`
margin: 5px;
font-size: 28px; 
@media (min-width: 668px) {
  font-size: 20px;
}
`

const List = styled.ul`
padding: 5px 20px ;
font-size: 20px;
margin: 0;
`