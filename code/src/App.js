import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { ui } from './reducers/ui'
import { productStore } from './reducers/productStore'
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ScanBarcode } from "components/ScanBarcode";
import { Provider } from 'react-redux'
import { ProductList } from './components/ProductList'



// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };
const reducer = combineReducers({
  ui: ui.reducer,
  productStore: productStore.reducer
})
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
      <ProductList />
    </Provider>
  )
}
{/* <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label> */}
{/* <BarcodeScanner onDetected={onDetected}></BarcodeScanner> */ }