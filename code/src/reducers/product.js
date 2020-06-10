import { createSlice } from '@reduxjs/toolkit'
import React from "react"
import { useSelector } from "react-redux"
import { Loading, loader } from "reducers/Loading"

export const products = createSlice({
  name: 'products',
  initialState: {
    product: {}
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProduct = code => {
  return dispatch => {
    dispatch(loader.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(products.actions.setProduct(json))
        dispatch(loader.actions.setLoading(false))
      })
  }
}

