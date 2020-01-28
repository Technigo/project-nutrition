import React from 'react'
import { Provider } from 'react-redux'
import { ScanBarcode } from 'components/ScanBarcode'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { products } from './reducers/products'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import './app.css'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="background">
        <LoadingIndicator />
        <ScanBarcode />
        <Product />
      </div>
    </Provider>
  )
}
