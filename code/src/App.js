import React from "react";
import { ScanBarcode } from "components/ScanBarcode";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "reducers/productsReducer"
import { Provider } from "react-redux"
import { Product } from "components/Product"


const reducer = combineReducers({ productsReducer: productsReducer.reducer })

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
      <Product />
    </Provider>
  );
};




{/* <ScanBarcode />
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
<BarcodeScanner onDetected={onDetected}></BarcodeScanner> */}