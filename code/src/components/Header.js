import React from 'react'
import styled from 'styled-components/macro'

// STYLED COMPONENTS
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1a1a1a;
  background-image: url('https://www.tokkoro.com/picsup/2907303-digital-art-dark-lines___mixed-wallpapers.jpg');
  width: 100vw;
  height: 25vh;
  padding: 40px;
`
const PrimaryText = styled.h1`
  letter-spacing: 1.5px;
  font-size: 26px;
  color: #f1f1f1;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 449px) {
    font-size: 20px;
  }
  @media (min-width: 450px) and (max-width: 750px) {
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
    <PrimaryText>Want to know what's in your product?</PrimaryText>
    <SecondaryText>Click on "Scan your product" and scan the barcode with your cam!</SecondaryText>
  </Wrapper>

)

