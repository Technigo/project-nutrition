import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { products } from './reducers/products'
import { ScanBarcode } from './components/ScanBarcode'
import { LoaderIndicator } from 'components/LoaderIndicator'
import { Product } from 'components/Product'
import './index.css'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})
export const store = configureStore({ reducer })
export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Welcome to your Nutrition app</h1>
        <p> please click on the scanner button to open the camera and scan your product.</p>
        <LoaderIndicator />
        <ScanBarcode />
        <Product />
      </main>
    </Provider>
  )
}
