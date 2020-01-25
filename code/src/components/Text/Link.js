import React from 'react'
import styled from 'styled-components'

export const Link = ({ url, className, ...props }) => {
  return <TextLink href={url} className={className}>{props.children}</TextLink>
}

const TextLink = styled.a`
  color: #499091;
`