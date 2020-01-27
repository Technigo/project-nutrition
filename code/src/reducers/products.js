import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";
import { getVeganPercentage, getNotVegan } from "../utils/array";

const isItVegan = response => {
  if (response.status === 0) {
    return {
      fetched: true,
      exist: false,
      barcode: response.code,
      text: "Sorry, We dont know if this product is vegan or not"
    };
  }

  const notVegan = getNotVegan(response);
  const percentage = getVeganPercentage(response);

  return {
    fetched: true,
    exist: true,
    barcode: response.code,
    name: response.product.product_name,
    text: notVegan
      ? "This product is NOT vegan!"
      : `${percentage}% of this products' ingredients are vegan`
  };
};

export const products = createSlice({
  name: "products",
  initialState: {
    product: {}
  },
  reducers: {
    setProduct: (state, { payload }) => {
      state.product = { ...payload };
    },
    removeProduct: state => {
      state.product = {};
    }
  }
});

export const fetchProduct = barcode => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true));
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          dispatch(products.actions.setProduct(isItVegan(json)));
          dispatch(ui.actions.setLoading(false));
        }, 2000);
      });
  };
};

export const removeProduct = () => {
  return dispatch => {
    dispatch(products.actions.removeProduct());
  };
};
