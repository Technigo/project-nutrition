import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';

export const barcodes = createSlice({
  name: 'barcodes',
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
    fetch(
      ` https://world.openfoodfacts.org/api/v0/product/${4014400917956}.json`
    )
      .then(res => res.json())
      .then(json => {
        dispatch(barcodes.actions.setBarcode(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
