import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const Error = () => {
  const scan = useSelector((state) => state.products.product)

  return (
    <>
      <Text>{scan.status_verbose}</Text>
      <Text>Visit:</Text><Text><a href='https://world.openfoodfacts.org/'>OpenFoodFacts site</a></Text><Text> and add your product</Text>
    </>
  )
}

const Text = styled.div`
text-transform: lowercase;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
font-size: 25px;
`
