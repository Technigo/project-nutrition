import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const productsList = createSlice({
  name: 'productsList',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload
      }
  },
})

export const fetchProducts = ({ barcode }) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(productsList.actions.addProduct(json))
      dispatch(ui.actions.setLoading(false))
    })
  }
}