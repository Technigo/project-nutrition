import React from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import { ScanBarcode } from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { Header } from 'components/Header'
import './index.css'

const reducer = combineReducers({ 
 ui: ui.reducer,
 products: products.reducer
})

export const store = configureStore ({reducer})


export const App = () => {
  return (
    <Provider store={store}>
    <div className="Container">
     
      <Header/>
      <LoadingIndicator/>
      <ScanBarcode />
      <Product/>
    </div>
    </Provider>
  )
}
