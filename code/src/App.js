import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { products } from 'reducers/products'
import { ui } from 'reducers/ui'
import { LoadingIndicator } from 'components/Loading'
import { ProductList } from 'components/ProductList'
// import { FetchButton } from 'components/FetchButton'
import { ScanBarcode } from 'components/ScanBarcode'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <ScanBarcode />
      <ProductList />
    </Provider>
  )
}


