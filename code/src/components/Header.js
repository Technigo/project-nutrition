import React from 'react'
import styled from 'styled-components/macro'

import { Heading } from './Text/Heading'

export const Header = ({ siteTitle }) => {
  return (
    <SiteHeader>
      <SiteTitle> {siteTitle}</SiteTitle>
    </SiteHeader>
  )
}

const SiteHeader = styled.header`
  background-color: #499091;
  padding: 1rem 1rem 1rem 2rem;
  width: 100%;
`

const SiteTitle = styled(Heading)`
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
`