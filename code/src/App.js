import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { ui } from 'redusers/ui'
import { products } from 'redusers/products'

import { ScanBarcode } from 'components/ScanBarcode'
// import { Product } from 'components/Product'
// import { LoadingIndicator } from 'components/LoadingIndicator'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
      {/* <Product />
      <LoadingIndicator /> */}
    </Provider>
  )
}
