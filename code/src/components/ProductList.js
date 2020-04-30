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
    <ProductContainer>
      {item.product && (<PrductList><h1>Allergens:</h1><li>
        {item.product.allergens_hierarchy.map((allergen) =>
          (allergen.replace(/\w+:/, ' ').replace('-', ' ')))}</li></PrductList>)
      }
    </ProductContainer>
  )
}
// productItems.product && (<div className=“productInfoContainer”><h1>Allergens:</h1><h2>
//   {productItems.product.allergens_hierarchy === [] ? productItems.product.allergens_hierarchy.map((allergen) =>
//   (allergen.replace(/\w+:/, ' ‘).replace(‘-’, ' ’))) : `No allergens found`}</h2></div>)

