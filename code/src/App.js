import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ScanBarcode } from 'components/ScanBarcode'
import { ui } from "reducers/ui"
import { products } from "reducers/products"

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
    </Provider>

  )
}
