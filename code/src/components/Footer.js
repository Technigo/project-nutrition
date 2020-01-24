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
  background-color: #499091;
  bottom: 0;
  padding: 1rem 1rem 1rem 2rem;
  position: fixed;
  width: 100%;
`

const FooterText = styled.p`
  font-family: 'Roboto slab', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`