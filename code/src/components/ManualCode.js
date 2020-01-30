import React, { useState } from 'react'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components'

export const ManualCode = () => {
  const [code, setCode] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefaut()
    dispatch(fetchProduct(code))
    setCode('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <button type="submit">
          Search
        </button>
        <input 
        type="text"
        placeholder="Enter product code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        handlesubmit={code} />
      </section>
    </form>
  )
}