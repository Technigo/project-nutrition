import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { products } from 'reducers/products'

const Button = styled.button`
  padding: 12px;
  margin-top: 20px;
  background-color: #fff;
  border: 3px #000 solid;
  border-radius: 8px;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
`

export const ReturnButton = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(products.actions.return())}>Scan again</Button>
  )
}