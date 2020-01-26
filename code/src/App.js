import React from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import { insulinCounter } from 'reducers/insulinCounter'
import { ScanBarcode } from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { InsulinCounter } from 'components/InsulinCounter'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Error } from 'components/Error'
import './index.css'


const reducer = combineReducers({ 
 ui: ui.reducer,
 products: products.reducer,
 insulinCounter: insulinCounter.reducer,
})

export const store = configureStore ({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <div className="Container">
        <Header/>
        <LoadingIndicator/>
        <Product/>
        <ScanBarcode />
        <Error/>
        <Footer/>
      </div>
    </Provider>
  )
}
