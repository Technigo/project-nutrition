import React from 'react'
import styled from 'styled-components'

export const Heading = ({ level, text, className, ...props }) => {
  if (level === "h2") return <HeadingTwo className={className}>{props.children}</HeadingTwo>
  if (level === "h3") return <HeadingThree className={className}>{props.children}</HeadingThree>
  return <HeadingOne className={className}>{props.children}</HeadingOne>
}

const HeadingOne = styled.h1`
  &:first-letter {
    text-transform: capitalize;
  }
`

const HeadingTwo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  &:first-letter {
    text-transform: capitalize;
  }
`

const HeadingThree = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  margin-top: 1rem;

  &:first-letter {
    text-transform: capitalize;
  }
`