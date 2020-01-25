import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'


import { products } from './reducers/products'
import { ui } from './reducers/ui'

import { LandingPage } from './components/LandingPage'
import { ScanBarcode } from './components/ScanBarcode'
import { Product } from './components/Product'


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer,

})

const store = configureStore({ reducer })
export const App = () => {


  return (
    <Provider store={store}>
      <main>
  
        <LandingPage /> 
    
        <ScanBarcode />
    
        <Product />
      </main>
    </Provider>
  )
}
