import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import  { ScanBarcode} from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { NotFound } from 'components/NotFound'
import { Header } from 'components/Header'

import './app.css'

// https://world.openfoodfacts.org/api/v0/product/[barcode].jso

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
  <Provider store={store}>
    <Header />
    <article>
    <LoadingIndicator />
    <div className="scan-container">

      <div className="scan-placeholder">
      {/* <lottie-player src="https://assets4.lottiefiles.com/temporary_files/0j9ST4.json" background="transparent"  speed="1" loop autoplay ></lottie-player> */}
      <h3>Scan barcode here!</h3>
      </div>
    <ScanBarcode />
    </div>
    {/* {if pruduct in api, && <Product>} */}
    <Product />
{/* {if no product in api && <NotFound />} */}
    {/* <NotFound /> */}
    </article>
  </Provider>
  )
}
