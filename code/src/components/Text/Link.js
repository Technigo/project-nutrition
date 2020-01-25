import React from 'react'
import styled from 'styled-components'

export const Link = ({ url, ...props }) => {
  return <TextLink href={url}>{props.children}</TextLink>
}

const TextLink = styled.a`
  color: #499091;
`