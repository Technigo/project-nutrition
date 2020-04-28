import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "reducers/productsReducer"
import { Provider } from "react-redux"
import { ScanBarcode } from "components/ScanBarcode.js";
import { Product } from "components/Product";


const reducer = combineReducers({ productsReducer: productsReducer.reducer })

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <h1>Scan a product and compare values to daily recommendations</h1>
      <ScanBarcode />
      <Product />
    </Provider>
  );
};