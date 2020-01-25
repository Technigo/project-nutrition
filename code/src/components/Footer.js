import React from 'react'
import styled from 'styled-components/macro'

export const Footer = () => {
  return (
    <SiteFooter>
      <FooterText> Footer text</FooterText>
    </SiteFooter>
  )
}

const SiteFooter = styled.footer`
  background-color: #333333;
  bottom: 0;
  padding: 1rem 1rem 1rem 2rem;
  position: fixed;
  width: 100%;
`

const FooterText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #fff;
`