import React from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { Provider, useDispatch } from 'react-redux'
import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit'
import { nutrition } from './reducers/nutrition'
import { ProductMap } from './components/ProductMap'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('pairNutritionState', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('pairNutritionState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}



const reducer = combineReducers({ nutrition: nutrition.reducer })

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => saveToLocalStorage(store.getState()))

const onDetected = (code) => {
  console.log(`Code: ${code}`);
  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      if (json.product) {
        if (json.product.product_name) {
          console.log(json)
        } else {
          console.log('No product name')
        }
      } else {
        console.log('no product')
      }
    });

};

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <label>
          {" "}
        Test codes here:{" "} */}

        {/* </label>
        <p>
          {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p> */}
        {/* <BarcodeScanner onDetected={onDetected}></BarcodeScanner> */}
        <ProductMap />
      </div>
    </Provider>
  );
};
