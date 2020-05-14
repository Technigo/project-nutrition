import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { ui } from './reducers/ui'
import { productStore } from './reducers/productStore'
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ScanBarcode } from "components/ScanBarcode";
import { Provider } from 'react-redux'
import { ProductList } from './components/ProductList'
import { Loading } from './components/Loading'


const reducer = combineReducers({
  ui: ui.reducer,
  productStore: productStore.reducer
})
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Loading />
      <ScanBarcode />
      <ProductList />
    </Provider>
  )
}
