import React from 'react'
import orangutang from '../assets/orangutang.png'
import styled from 'styled-components/macro'


const ImageContainer = styled.div`
display: flex;
justify-content: center;
position:relative;
`
const Img = styled.img`
max-width:400px;
@media (min-width: 668px) {
  max-width:550px;
}
`;

export const Image = () => {
  return (
    <ImageContainer>
    <Img src={orangutang} alt="Orangutang" />
     </ImageContainer>
     )}

