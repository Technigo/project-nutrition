import React from "react";
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ProductContainer = styled.section`
    max-width:400px;
    margin-right:auto;
    margin-left:auto;
`
const PrductList = styled.ul`
    text-transform: uppercase;
    list-style-type: none;
`

export const ProductList = () => {
  const item = useSelector(state => state.productStore.products)
  console.log('item', item)

  if (!item) return null



  return (
    <>
      {item.product && item.status === 1 && (
        <ProductContainer>
          {item.product && (<ProductList><h1>Allergens:</h1><li>
            {item.product.allergens_hierarchy.map((allergen) =>
              (allergen.replace(/\w+:/, ' ').replace('-', ' ')))}</li></ProductList>)
          }
        </ProductContainer>
      )}
      {item.status === 0 && <h3>{item.status_verbose}.</h3>}
    </>
  )
}


