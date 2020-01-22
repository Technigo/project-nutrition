import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'Reducers/ui'
import { ScanBarcode } from 'components/ScanBarcode'
import { Product } from 'components/Product'
import { LoadingIndicator } from 'components/LoadingIndicator'
Product

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider>
      <ScanBarcode />
      <Product />
    </Provider>
  )
}
