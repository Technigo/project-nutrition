import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Btn = styled.button`
    background-color: white;
    width: 100%;
    max-width: 1088px;
    height: 56px;
    display: flex;
    position: sticky;
    top: 0;
    padding: 0 16px;

    h6 {
      font-size: 20px;
    }
`

export const Button = () => {
  const header = useSelector((store) => store.userinterface.header)
  console.log(header)

  return (
    <Btn></Btn>
  )
}