import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import { ScanBarcode } from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { Header } from 'components/Header'

import './app.css'
import './components/mediaqueries.css'


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <article>
          <div className="scan-container">
            <div className="scan-placeholder">
              <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_9FZkDo.json" background="transparent" speed="0.5" loop autoplay ></lottie-player>
            </div>
            <ScanBarcode />
          </div>
          <LoadingIndicator />
          <Product />
        </article>
        <footer>
          <img src="palm-tree.png" />
        </footer>
      </Provider>

    </>

  )
}
