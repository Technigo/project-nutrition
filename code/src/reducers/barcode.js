import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';

export const barcode = createSlice({
  name: 'barcode',
  initialState: {
    product: []
  },
  reducers: {
    setBarcode: (state, action) => {
      state.product = action.payload;
    }
  }
});

export const fetchBarcode = barcode => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true));
    console.log(ui.actions.setLoading(true));
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(json => {
        dispatch(barcode.actions.setBarcode(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
