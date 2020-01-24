import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products'


export const FetchButton = () => {

  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(fetchProducts())}>
      Fetch!
    </button>
  )
}