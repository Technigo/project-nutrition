import React from 'react'
import styled from 'styled-components'

export const Paragraph = ({ className, ...props }) => {
  return <Text className={className}>{props.children}</Text>
}

const Text = styled.p`
  line-height: 1.5;
  margin-bottom: 1.2rem;
`