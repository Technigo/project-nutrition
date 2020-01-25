import React from 'react'
import styled from 'styled-components/macro'

export const Image = ({ src, alt, className, ...props }) => {
  return (
    <ImageWrapper>
      <CircularImage src={src} alt={alt} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
    margin: 1rem auto;
    height: 200px;
    width: 200px;
  `

const CircularImage = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: fill;
  width: 100%;
`