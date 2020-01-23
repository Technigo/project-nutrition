import React from 'react'
import styled from 'styled-components/macro'

// STYLED COMPONENTS
const Wrapper = styled.section`
  text-align: center;
  background: #000;
  width: 100vw;
  padding: 50px;
`
const PrimaryText = styled.h1`
  font-size: 26px;
  color: #f1f1f1;
  text-transform: uppercase;
  margin: 0;
`
const SecondaryText = styled.h2`
  font-size: 16px;
  color: #f1f1f1;
  margin: 10px 0 0 0;
`

// COMPONENT HEADER
export const Header = () => (

  <Wrapper>
    <PrimaryText>Want to know what's in your product?</PrimaryText>
    <SecondaryText>Click on "Scan your product" and scan the barcode with your cam!</SecondaryText>
  </Wrapper>

)

