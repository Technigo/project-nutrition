import React from 'react'
import styled from 'styled-components/macro'

export const Header = () => (

  <Wrapper>
    <BigText>Want to know what's in your product?</BigText>
  </Wrapper>

)

const Wrapper = styled.section`
  background: #487C74;
  width: 100vw;
  padding: 50px;
  text-align: center;
  margin-bottom: 20px;
`
const BigText = styled.h1`
  font-size: 22px;
  color: #fff;
  margin: 0;
`