import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
import { products } from "./reducers/products";
import { ScanBarcode } from "./components/ScanBarcode";

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
    </Provider>
  );
};
