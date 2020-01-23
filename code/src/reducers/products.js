import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    product: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProduct = (barcode) => {
  return dispatch => {
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`

    dispatch(ui.actions.setLoading(true))
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(products.actions.addProduct(json))
        dispatch(ui.actions.setLoading(false))

      })
  }
}