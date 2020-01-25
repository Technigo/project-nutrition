import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    product: []
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    }
  }
})


export const fetchProduct = (barcode) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProduct(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

//THUNK = how we can combine dispatchinng multiply actions inside a  single function which is called a thunk.
//This makes our actions or complicated flows, such as sendign an API request and waiting for it's responses, 
//it makes it into a replayable little package that we dont need to think about so much everytime we use it.
//we can use this to start combining a fetch(??)  

//Thunk is basically a function which is asynchrinous which also has access to reduxes dispatches. 
//Which means that you can tie togehter all those examples (loading and fetching apis) into one package which you can dispatch as it was just a normal action. 
