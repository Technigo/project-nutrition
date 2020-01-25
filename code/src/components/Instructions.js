import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Heading } from './Text/Heading'
import { Paragraph } from './Text/Paragraph'
import { Image } from './Image'
import img from '../images/fork.jpg';

export const Instructions = () => {
  const cameraOn = useSelector(state => state.ui.isCameraOn)

  return (
    <Section>
      {!cameraOn && (
        <Image src={img} alt="A fork." />
      )}
      <Heading level="h2">Check a product for allergens and traces</Heading>
      <Paragraph>Are you wondering if a product contains allergens or traces? Check if it does by scanning its barcode.</Paragraph>
    </Section>
  )
}

const Section = styled.section`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  width: 90%;

  @media screen and (min-width: 668px) {
    max-width: 600px;
    width: 100%;
  }

`

