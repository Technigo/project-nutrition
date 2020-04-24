import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsList } from "./reducers/products";
import { Provider } from "react-redux";
import { Input } from "components/Input"
import { ProductInfo } from "components/ProductInfo"

// import { BarcodeScanner } from 'components/BarcodeScanner'
import { ScanBarcode } from "./components/ScanBarcode";

// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

// combine reducers
const reducer = combineReducers({
  productsList: productsList.reducer,
});

// setup the store
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Input />
      {/* <ScanBarcode onDetected={onDetected} /> */}
      <ScanBarcode />
      <ProductInfo />
    </Provider>
  );
};
