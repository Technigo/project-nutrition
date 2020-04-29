import { createSlice } from '@reduxjs/toolkit';


export const productsReducer = createSlice({
  name: 'productsReducer',
  initialState: {
    product: {}
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  }
});

export const getProduct = (code) => {
  return dispatch => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(productsReducer.actions.setProduct(json))
      });
  }
};
