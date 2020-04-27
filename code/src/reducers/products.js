import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';

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
});

export const onDetected = (code) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))

  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      dispatch(products.actions.setProduct(json))
      dispatch(ui.actions.setLoading(false))
    });
  }
};