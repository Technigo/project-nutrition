import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

const initial = {
  product: {}
}

export const products = createSlice({
  name: 'products',
  initialState: {
    product: {}
  },
  reducers: {
    setProductInformation: (state, action) => {
      state.product = action.payload
    },
    return: () => {
      return initial
    }
  }
})

export const fetchProduct = (code) => {
  return (dispatch) => {
    console.log(`Code: ${code}`)
    dispatch(loading.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProductInformation(json))
        dispatch(loading.actions.setLoading(false))
      })
  }
}