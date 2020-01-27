import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const isItVegan = response => {
  if (response.status === 0) {
    return {
      fetched: true,
      exist: false,
      code: response.code,
      text: "Sorry, We dont know if this product is vegan or not"
    };
  }

  if (
    response.product.ingredients.every(ingredient => ingredient.vegan !== "no")
  ) {
    return {
      fetched: true,
      exist: true,
      code: response.code,
      name: response.product.product_name,
      text: "Yes! This product is vegan."
    };
  }

  return {
    fetched: true,
    exist: true,
    code: response.code,
    name: response.product.product_name,
    text: "No! This product is NOT vegan."
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
