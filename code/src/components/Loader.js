import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinEffect = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`
const Spinner = styled.div`
  width: 150px;
  height: 150px;
  border: 30px solid grey;
  border-top: 30px solid powderblue;
  border-radius: 50%;
  animation-name: ${spinEffect};
  animation-duration: .7s;
  animation-iteration: infinite;
`

export const Loader = () => {

  return <Spinner />
}