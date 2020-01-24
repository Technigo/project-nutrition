import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    product: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProducts = barcode => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(products.actions.setProducts(json))
      dispatch(ui.actions.setLoading(false))
    })
  }
}