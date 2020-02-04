import { createSlice } from '@reduxjs/toolkit';
import { ui } from '../reducers/ui';

export const food = createSlice({
  name: 'food',
  initialState: [],
  reducers: {
    setProduct: (state, action) => {
      return (state = { ...action.payload });
    }
  }
});

export const fetchProduct = barcode => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true));
    fetch(`https://world.openfoodfacts.org/api/v0/product/[${barcode}].json`)
      .then(res => res.json())
      .then(json => {
        dispatch(food.actions.setProduct(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
