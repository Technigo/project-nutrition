import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { BarcodeScanner } from './components/BarcodeScanner'
import { ScanBarcode } from './components/ScanBarcode'
// import { ProductList } from 'components/ProductList'
import { Header } from 'components/header.js'
import { ui } from './reducers/ui'
import { productFetch } from './reducers/productFetch'
import { LoadingIndicator } from './components/LoadingIndicator'

const reducer = combineReducers({
  ui: ui.reducer,
  productFetch: productFetch.reducer
})

export const store = configureStore({ reducer })
export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ScanBarcode />
      <LoadingIndicator />
      Find me in src/app.js!
      {/* <ProductList /> */}
    </Provider>
  )
}