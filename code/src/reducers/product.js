import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

export const product = createSlice({
  name: 'product',
  initialState: { product: [] },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProduct = barcode => {
  return dispatch => {
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`

    dispatch(ui.actions.setLoading(true))
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(product.actions.setProduct(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}