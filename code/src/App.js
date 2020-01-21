import React from 'react'
import { Provider } from 'react-redux'
import { ui } from './ reducers/ui'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ScanBarcode } from './components/ScanBarcode'
import { Header } from './components/Header'
import { productFetch } from ' reducers/productFetch'
import { LoadingIndicator } from 'components/LoadingIndicator'

const reducer = combineReducers({
  ui: ui.reducer,
  productFetch : productFetch.reducer

})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <Header />
      <ScanBarcode />
      Find me in src/app.js!
    </Provider>
  )
}
