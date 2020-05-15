
import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'



export const foods = createSlice ({ 
  name:'foods',
  initialState: 
  {
    foodProduct: []
  },

  reducers: {
    setFoods: (state, action) => {
      state.foodProduct = action.payload
    }
  }
})

// ----Denna är extra utifall vi vill ha en loading funk--------
 export const fetchFoods = (code) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(foods.actions.setFoods(json))
      dispatch(loading.actions.setLoading(false))
    })
  }
}
