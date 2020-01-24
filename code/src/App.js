import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { products } from './reducers/products'
import { Product } from './components/Product'
import { LoadingIndicator } from './components/LoadingIndicator'
import { ScanBarcode } from './components/ScanBarcode'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <LoadingIndicator />
        <Product />
        <ScanBarcode />
      </div>
    </Provider>
  )
}
