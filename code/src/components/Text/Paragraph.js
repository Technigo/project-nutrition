import React from 'react'
import styled from 'styled-components'

export const Paragraph = (props) => {
  return <Text>{props.children}</Text>
}

const Text = styled.p`
  line-height: 1.5;
`