import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Heading } from './Text/Heading'
import { Paragraph } from './Text/Paragraph'
import { Link } from './Text/Link'

export const Error = () => {
  const cameraOn = useSelector(state => state.ui.isCameraOn)

  return (
    <>
      {!cameraOn && (
        <ErrorMessage>
          <Heading level="h2">Product not found</Heading>
          <Paragraph>Try scanning the barcode again. If the product still doesn't show the product might be missing from the database.
        You can also check Open Food Facts website.<br />
            <Link url="https://world.openfoodfacts.org/">Open Food Facts</Link>
          </Paragraph>
        </ErrorMessage>
      )}
    </>
  )
}

const ErrorMessage = styled.section`
  background-color: rgba(244, 244, 244, 1);
  border-radius: 5px;
  box-shadow: 1px 2px 3px 1px #dad8d8;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;

  @media screen and (min-width: 668px) {
    padding: 2rem;
    max-width: 600px;
    width: 100%;
  }
`