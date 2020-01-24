import React, { useState } from 'react'
import { Inputs } from 'components/Inputs'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'

export const InputForm = () => {
  const [showinputForm, setShowInputForm] = useState(false)
  const dispatch = useDispatch()


  return (
    <>
      {!showinputForm && (
        <button type="button" onClick={() => setShowInputForm(true)}>
          Show scanner
        </button>
      )}

      {showinputForm && (
        <Inputs handleSubmit={(code) => {
          console.log('Got barcode', code)
          setShowInputForm(false)
          dispatch(fetchProduct(code))
        }} />
      )}
    </>
  )
}