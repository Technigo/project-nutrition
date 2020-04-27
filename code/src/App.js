import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BarcodeScanner } from 'components/BarcodeScanner';
import { ScanBarcode } from 'components/ScanBarcode'
import { LoaderSpinner } from 'components/LoaderSpinner'
import { products } from 'reducers/products'
import { ui } from 'reducers/ui'
import { ProductInfo } from './components/ProductInfo'


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
});

export const store = configureStore({ reducer });


// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

export const App = () => {
  return (
    <Provider store={store}>

      <ScanBarcode />
      <LoaderSpinner />
      <ProductInfo />
    </Provider>
  );
};
