import React from 'react'

import { Provider } from 'react-redux'
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import styled from 'styled-components'
import { ScanBarcode } from 'components/ScanBarcode'
import { ProductInfo } from 'components/ProductInfo'

// import { BottomBar } from 'components/BottomBar'

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


        {/* <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <ScanBarcode />
            </Route>
            <Route path="/productinfo">
              {/* <Route path="/products/:productsId"> */}
        {/* <ProductInfo />
            </Route>
          </Switch>
        </BrowserRouter > * /} */}


        < ScanBarcode />

        <ProductInfo />


      </Provider >
    </div >
  )
}
