import React from 'react'
import orangutang from '../assets/orangutang.png'
import styled from 'styled-components/macro'


const ImageContainer = styled.div`
display: flex;
justify-content: center;
height:75%;
max-width:350px;
`

export const Image = () => {
  return (
    <ImageContainer>
    <img src={orangutang} alt="Orangutang" />
     </ImageContainer>
     )}

