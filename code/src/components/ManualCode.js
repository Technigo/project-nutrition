import React, { useState } from 'react'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components'

export const ManualCode = () => {
  const [showinputForm, setShowInputForm] = useState(false)
  const [code, setCode] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchProduct(code))
    setCode('')
  }

  return (
    <>
    {!showinputForm && (
        <button type="button" onClick={() => setShowInputForm(true)}>
          Barcode search
        </button>
      )}

      {showinputForm && (
        <button type="button" onClick={() => setShowInputForm(false)}>
          Hide Barcode search
        </button>
      )}

  {showinputForm && (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="submit">
          Search
        </button>
        <input 
        type="text"
        placeholder="Enter product code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        />
      </div>
    </form>
  )}
    </>
  )
}