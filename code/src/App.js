import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ScanBarcode } from 'components/ScanBarcode'
import { ProductInfo } from 'components/ProductInfo'
import { Header } from 'components/Header'

import { FetchBarcodesBtn } from 'components/FetchBarcodesBtn'

import { barcodes } from 'reducers/barcodes'
import { ui } from 'reducers/ui'


const reducer = combineReducers({
  ui: ui.reducer,
  barcodes: barcodes.reducer,

})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <ProductInfo />
        Barcode scanner
        <ScanBarcode />
        <FetchBarcodesBtn />
      </Provider>
    </div>
  )
}
