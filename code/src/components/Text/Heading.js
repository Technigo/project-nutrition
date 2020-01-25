import React from 'react'
import styled from 'styled-components'

export const Heading = ({ level, text, className, ...props }) => {
  if (level === "h2") return <HeadingTwo className={className}>{props.children}</HeadingTwo>
  if (level === "h3") return <HeadingThree className={className}>{props.children}</HeadingThree>
  return <HeadingOne className={className}>{props.children}</HeadingOne>
}

const HeadingOne = styled.h1`
  font-family: 'Montserrat', serif;
  &:first-letter {
    text-transform: capitalize;
  }
`

const HeadingTwo = styled.h2`
  font-family: 'Montserrat', serif;
  &:first-letter {
    text-transform: capitalize;
  }
`

const HeadingThree = styled.h3`
  font-family: 'Montserrat', serif;
  margin-bottom: 0.25rem;
  margin-top: 1rem;

  &:first-letter {
    text-transform: capitalize;
  }
`