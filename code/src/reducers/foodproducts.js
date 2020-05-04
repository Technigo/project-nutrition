import { createSlice } from '@reduxjs/toolkit'
import { userinterface } from './userinterface'

export const foodproducts = createSlice({
  name: 'foodproducts',
  initialState: {
    foodproduct: ['cake', 'banana']
  },
  reducers: {
    setFoodproduct: (state, action) => {
      state.foodproduct = action.payload
    }
  }
})

export const fetchProduct = barcode => {
  return (dispatch) => {
    dispatch(userinterface.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(foodproducts.actions.setProduct(json))
        dispatch(userinterface.actions.setLoading(false))
      })
  }
}

