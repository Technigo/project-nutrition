import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { products } from './reducers/products'
import { ScanBarcode } from './components/ScanBarcode'
import { Header } from './components/header'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from './components/Product'
import { Footer } from './components/lib/Footer'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})
export const store = configureStore({ reducer })
export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <LoadingIndicator />
      <ScanBarcode />
      <Product />
      <Footer />
    </Provider>
  )
}
