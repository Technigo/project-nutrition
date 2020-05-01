import React from 'react'
import styled from 'styled-components'



export const LocalFoodText = () => {
  return (
    <FoodSection>
        <p>Eating locally means choosing food that is grown and harvested close to where you live, and then distributed over shorter distances. Eating locally grown foods has many benefits for the consumer, grower and the community.</p>
        <p>Do you know where your food come from? Find out the origin of the food you eat by scanning the barcode of the product.</p>
    </FoodSection>
  )
}

const FoodSection = styled.section `
  background-color: #F2F2F2;
  margin-bottom: 20px;
  padding: 20px 70px 20px 70px;
  font-family: 'Monserat'; 
  font-size: 20px;
`