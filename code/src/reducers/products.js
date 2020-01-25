import { createSlice } from "@reduxjs/toolkit"

// import { useDispatch } from "react-redux"

import { ui } from "./ui"

export const products = createSlice({
  name: "products",
  initialState: {
    product: [],
    // savedProducts: [
    //   {
    //     id: 1,
    //     name: "En produkt"
    //   },
    //   {
    //     id: 2,
    //     name: "En annan produkt"
    //   },
    //   {
    //     id: 3,
    //     name: "En tredje produkt"
    //   }]
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
    // saveProduct: (state, action) => {
    //   // state.savedProducts.push(action.payload)
    //   state.savedProducts.push({ id: Date.now(), name: action.payload })
    // }
  }
})

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