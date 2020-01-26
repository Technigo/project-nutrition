import React from 'react'
import Styled from 'styled-components/macro'
import background from '../assets/background.png'

export const Footer = () => {
  return(
    <BackgroundContainer>
    <img src={background} alt="Background" />
    </BackgroundContainer>

  )
}

const BackgroundContainer = styled.div`
height: 50px;
object-fit: fill;
`