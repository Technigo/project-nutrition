import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsList } from "./reducers/products";
import { Provider } from "react-redux";

// import { BarcodeScanner } from 'components/BarcodeScanner'
import { ScanBarcode } from "./components/ScanBarcode";

const onDetected = (code) => {
  console.log(`Code: ${code}`);
  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
    });
};

// combine reducers
const reducer = combineReducers({
  productsList: productsList.reducer,
});

// setup the store
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      {/* <Input /> */}
      <div>
        <label>
          {" "}
          Test codes here:{" "}
          <input
            type="text"
            onChange={(e) => onDetected(e.target.value)}
          ></input>
        </label>
        <p>
          {" "}
          Use the field above to test barcodes manually and keep an eye on your
          console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
          Pasta: 7310130003530 , Kikärtor: 7340011487906
        </p>
        {/* <BarcodeScanner /> */}
        <ScanBarcode onDetected={onDetected} />
        </div>
    </Provider>
  );
};
