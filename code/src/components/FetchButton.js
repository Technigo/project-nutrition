import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components/macro'


export const FetchButton = () => {

  const dispatch = useDispatch()

  return (
    <Button type="button" onClick={() => dispatch(fetchProduct())}>
      Fetch!
    </Button>
  )
}

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #721817;
  cursor: pointer;
  margin-top: 20px;
  padding: 20px 15px;
  background: #f1f1f1;
  border: 3px solid #721817;
  border-radius: 6px;
  transition: 0.4s;
  &:hover {
    background: #D8C0BF;
  }
`