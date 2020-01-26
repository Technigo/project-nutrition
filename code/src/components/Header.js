import React from 'react'
import styled from 'styled-components/macro'
import foodheader from 'assets/foodheader.png'

// COMPONENT HEADER
export const Header = () => (

  <Wrapper>
    <TextWrapper>
      <PrimaryText>Don´t know what to #hashtag your product?</PrimaryText>
      <SecondaryText>Click on "Show scanner" and scan the barcode with your cam!</SecondaryText>
    </TextWrapper>
  </Wrapper>

)

// STYLED COMPONENTS
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-size: cover;
  background-image: url(${foodheader});
  height: 20vh;
  padding: 35px;
`
const TextWrapper = styled.div`
text-align: start;
padding: 10px;
background-color: rgba(0, 0, 0, 0.349);
`

const PrimaryText = styled.h1`
  letter-spacing: 1.5px;
  font-size: 26px;
  color: #fefefe;
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
