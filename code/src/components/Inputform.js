import React, { useState } from 'react'
import { Inputs } from 'components/Inputs'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

//Button styling

const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: darkorange;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 5px;
  padding: 3px;
`

export const InputForm = () => {
  const [showinputForm, setShowInputForm] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showinputForm && (
        <Button type="button" onClick={() => setShowInputForm(true)}>
          Use barcode number
        </Button>
      )}

      {showinputForm && (
        <Inputs handleSubmit={code => {
          console.log('Got barcode', code)
          setShowInputForm(false)
          dispatch(fetchProduct(code))
        }} />
      )}
    </>
  )
}