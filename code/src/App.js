import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "reducers/ui";
import { products } from "reducers/products";
import { TopBar } from "components/TopBar"
import { ScanBarcode } from "components/ScanBarcode";
import { Product } from "components/Product";
import { StartPage } from "components/StartPage";

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <TopBar />
      <StartPage />
      <ScanBarcode />
      <Product />
    </Provider>
  );
};
