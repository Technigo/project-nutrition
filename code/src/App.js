import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'


import { products } from './reducers/products'
import { ui } from './reducers/ui'

import { LandingPage } from './components/LandingPage'
import { ScanBarcode } from './components/ScanBarcode'
import { Product } from './components/Product'
import { Navbar } from './components/Navbar'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer,

})

const store = configureStore({ reducer })
export const App = () => {


  return (
    <Provider store={store}>
       <main>
      <Router>
        <Switch>
         
            <Route path="/" exact>
              <LandingPage /> 
            </Route>
            
            <Route path="/scan">
              <ScanBarcode />
              <Navbar/>
            </Route>
            <Route path="/product">
              <Product />
              <Navbar/>
            </Route>
        </Switch>
      </Router>
      </main>
    </Provider>
  )
}
