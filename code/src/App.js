import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { products } from 'reducers/products'
import { ui } from 'reducers/ui'

import {ScanBarcode} from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import './index.css'



const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore ({ reducer })

export const App = () => {
  return (
    
    <Provider store={store}>
      <Header/>
        <LoadingIndicator />
        <ScanBarcode />
        <Product/> 
      <Footer/>  
    </Provider> 
  )
}
