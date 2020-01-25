import React from 'react'
import styled from 'styled-components'

export const Button = ({ text, onClick }) => {
  return (
    <CustomButton type="button" onClick={onClick}>{text}</CustomButton>
  )
}

const CustomButton = styled.button`
  background-color: #499091;
  border: none;
  border-radius: 0.2rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 1rem;
  max-width: 300px;

    &:hover {
    background-color: #F17300;
  }
`