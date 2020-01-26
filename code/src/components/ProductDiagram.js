import React from 'react'
import styled from 'styled-components'

import './css/productdiagram.css'

export const ProductDiagram = (props) => {

  return (
    <div className="product-diagram">
      {/* <div className="title">Nutrients per 100g</div> */}
      <div className="rotate">
        <StyledCarbBar className="carb" bar={props.product.nutriments.carbohydrates_100g}> Carbs {props.product.nutriments.carbohydrates_100g} g</StyledCarbBar>
        <StyledProteinBar className="protein" bar={props.product.nutriments.proteins_100g}> Protein {props.product.nutriments.proteins_100g} g</StyledProteinBar>
        <StyledFatBar className="fat" bar={props.product.nutriments.fat_100g}> Fat {props.product.nutriments.fat_100g} g </StyledFatBar>
      </div>

    </div>
  )
}

const StyledCarbBar = styled.div`
  width: ${props => props.bar}%;
  background-color: lightsalmon;
  height: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  white-space: nowrap;
  
`

const StyledProteinBar = styled.div`
  width: ${props => props.bar}%;
  background-color: lightblue;
  height: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  white-space: nowrap;
`

const StyledFatBar = styled.div`
  width: ${props => props.bar}%;
  background-color: lightpink;
  height: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  white-space: nowrap;


`