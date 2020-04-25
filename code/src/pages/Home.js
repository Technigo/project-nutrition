import React from "react";
import { Provider } from "react-redux";
import { BarcodeScanner } from "components/BarcodeScanner";
import { ScanBarcode } from "components/ScanBarcode";
import { products, onDetected } from "reducers/products";
import { ui } from "reducers/ui";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const Home = () => {
  const reducer = combineReducers({ ui: ui.reducer, products: products.reducer});
  const store = configureStore({reducer})

  return (
    <Provider store={store}>
    <div>
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>
      {/* <BarcodeScanner onDetected={onDetected}></BarcodeScanner> */}
      <ScanBarcode/>
    </div>
    </Provider>
  );
};
