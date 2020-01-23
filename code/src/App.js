import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ScanBarcode } from 'components/ScanBarcode'
import { ProductInfo } from 'components/ProductInfo'
import { Header } from 'components/Header'

// import { FetchBarcodesBtn } from 'components/FetchBarcodesBtn'

import { products } from 'reducers/products'
import { ui } from 'reducers/ui'


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer,

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
        {/* <FetchBarcodesBtn /> */}
      </Provider>
    </div>
  )
}
