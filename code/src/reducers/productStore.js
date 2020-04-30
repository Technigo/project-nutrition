import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { ui } from './ui'


export const productStore = createSlice({
  name: 'productStore',
  initialState: {
    products: []
  },

  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload
    }
  },
})


export const fetchProduct = (code) => {

  const fetchUrl = `https://world.openfoodfacts.org/api/v0/product/${code}.json`
  return (dispatch) => {
    //dispatch(ui.actions.setLoading(true))
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(productStore.actions.setProduct(json))
      })

  }
}
