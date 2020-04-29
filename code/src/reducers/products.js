import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const productsList = createSlice({
  name: "productsList",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const fetchProducts = (barcode) => {
  const fetchUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
  // console.log(fetchUrl)
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((json) => {
        dispatch(productsList.actions.addProduct(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
