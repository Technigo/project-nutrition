import React from 'react'
import styled from 'styled-components/macro'

const FooterWrapper = styled.div`
  border-top: 1px solid #B5FFE1;
  width: 100%;
  height: 130px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
`
const FooterHeading = styled.p`
  margin: 0 0 5px 0;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f1f1f1;
  @media (max-width: 449px) {
    font-size: 12px;
  }
`
const FooterText = styled.p`
  margin: 0 0 5px 0;
  font-size: 12px;
  color: #f1f1f1;
  width: 200px;
  text-align: center;
  @media (max-width: 449px) {
    font-size: 10px;
    width: 95%;
  }
`
const Link = styled.a`
  color: #B5FFE1;
  text-decoration: none;
`

export const Footer = () => (

  <FooterWrapper>
    <FooterHeading>What is this?</FooterHeading>
    <FooterText>This site uses data from a free and open database. You can add information to products on the <Link href='https://world.openfoodfacts.org/'>Open Food Facts site >></Link></FooterText>
    <FooterText>Sofie Nyblad &copy; 2020</FooterText>
  </FooterWrapper>

)