import React from 'react'
import styled from 'styled-components/macro'

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

const SiteTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`