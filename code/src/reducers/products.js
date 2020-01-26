import { createSlice } from '@reduxjs/toolkit'


import { ui } from "./ui"

// import chocolate from './chocolate.json' // for testing
// import gum from './gum.json' // for testing
import oboy from './oboy.json' // for testing

export const products = createSlice({
  name: "products",
  initialState: {
    item: oboy,
    savedProducts: []
  },

  reducers: {
    setProducts: (state, action) => {
      state.item = action.payload
    }
  }
})

export const fetchProduct = (barcode) => {

  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        dispatch(products.actions.setProducts(json))
        dispatch(ui.actions.setLoading(false))
        dispatch(ui.actions.setShowProduct(true))
      })
  }
}


