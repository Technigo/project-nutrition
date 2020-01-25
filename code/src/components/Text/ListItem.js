import React from 'react'
import styled from 'styled-components'

export const ListItem = ({ className, ...props }) => {
  return <Item className={className}>{props.children}</Item>
}

const Item = styled.li`
  line-height: 1.5;
  text-transform: capitalize;
`