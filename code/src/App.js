import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { products } from './reducers/products'
import { ui } from './reducers/ui'

import { Header } from './components/Header'
import { Product } from './components/Product'
import { ScanBarcode } from './components/ScanBarcode'
import { Instructions } from './components/Instructions'
import { Footer } from './components/Footer'

// Combine reducers
const reducer = combineReducers({
  products: products.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })


export const App = () => {

  return (
    <Provider store={store}>
      <Header siteTitle='Can I eat this?' />
      <main>
        <Product />
        <Instructions />
        <ScanBarcode />
      </main>
      <Footer />
    </Provider>
  )
}
