import React from 'react'
import styled from 'styled-components/macro'

import { Heading } from './Text/Heading'
import { Paragraph } from './Text/Paragraph'
import { Link } from './Text/Link'

export const Footer = () => {
  return (
    <SiteFooter>
      <FooterSection>
        <FooterHeading level='h2'>About this site</FooterHeading>
        <FooterText>
          This site uses data from the Open Food Facts project, a collaborative, free and open database.
          The data may contain errors or be inconclusive. You can correct or add information to products
          on the Open Food Facts website.
        </FooterText>
        <FooterLink url="https://world.openfoodfacts.org/">Open Food Facts</FooterLink>
      </FooterSection>
    </SiteFooter>
  )
}

const SiteFooter = styled.footer`
  background-color: #333333;
  padding: 1rem 1rem 1rem 2rem;
  width: 100%;
`

const FooterSection = styled.section`
  max-width: 300px;
  width: 100%;

  @media screen and (min-width: 668px) {
    max-width: 400px;
  }

`
const FooterHeading = styled(Heading)`
  color: #fff;
  font-size: 1.2rem;
`

const FooterText = styled(Paragraph)`
  color: #fff;
  font-size: 0.8rem;
`
const FooterLink = styled(Link)`
  color: #fff;
  font-size: 0.8rem;
`