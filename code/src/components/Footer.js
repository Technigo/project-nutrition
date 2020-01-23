import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.footer`
  background: #f1f1f1;
  position: fixed;
  transform-origin: center top;
  transform: translateX(-50%) rotate(-90deg);
`
const FooterText = styled.p`
  font-size: 12px;
  color: #333;
`

export const Footer = () => (
  <Wrapper>
    <FooterText>Sofie Nyblad &copy; 2020</FooterText>
  </Wrapper>
)