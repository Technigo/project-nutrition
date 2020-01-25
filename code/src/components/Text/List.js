import React from 'react'
import styled from 'styled-components'

export const List = ({ className, ...props }) => {
  return <UnorderedList className={className}>{props.children}</UnorderedList>
}

const UnorderedList = styled.ul`
  margin: 0 1rem;
`