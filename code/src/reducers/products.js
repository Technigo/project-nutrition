import { createSlice } from "@reduxjs/toolkit"

// import { useDispatch } from "react-redux"

import { ui } from "./ui"

export const products = createSlice({
  name: "products",
  initialState: {
    product: [],
    savedProducts: []
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
    saveProduct: (state, action) => {
      // state.savedProducts.push(action.payload)
      state.savedProducts.push({ id: Date.now(), name: action.payload })
    }
  }
})
const testCode = 5701073062265
export const fetchProduct = (barcode) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(json => {
        dispatch(products.actions.setProduct(json))
        dispatch(ui.actions.setLoading(false))
      })
  }


}