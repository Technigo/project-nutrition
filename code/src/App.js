import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ScanBarcode } from './components/ScanBarcode'
import { products } from './reducers/products'
import { ui } from './reducers/ui'
import { Product } from './components/Product'

// Combine reducers
const reducer = combineReducers({
  products: products.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <ScanBarcode />
        <Product />
      </main>
    </Provider>
  )
}
