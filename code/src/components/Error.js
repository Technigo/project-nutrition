import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const Error = () => {
  const scan = useSelector((state) => state.products.product)

  return (
    <Text>{scan.status_verbose}</Text>
  )
}

const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
`
