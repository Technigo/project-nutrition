import React from 'react'
import styled from 'styled-components/macro'

// STYLED COMPONENTS
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 25vh;
  padding: 25px;
`
const PrimaryText = styled.h1`
  font-family: 'Bowlby One SC', cursive;
  letter-spacing: 1.5px;
  font-size: 26px;
  color: #B5FFE1;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 449px) {
    font-size: 20px;
  }
  @media (min-width: 450px) and (max-width: 800px) {
    font-size: 24px;
  }
`
const SecondaryText = styled.h2`
  font-size: 16px;
  color: #f1f1f1;
  margin: 10px 0 0 0;
  @media (max-width: 449px) {
    font-size: 14px;
  }
`

// COMPONENT HEADER
export const Header = () => (

  <Wrapper>
    <PrimaryText>Want to know what you're eating?</PrimaryText>
    <SecondaryText>Click on "Start scanner" and scan the barcode of your tasty snack!</SecondaryText>
  </Wrapper>

)

