import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import { ScanBarcode } from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { InputForm } from 'components/Inputform'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <main>
      <Provider store={store}>
        <section>
          <LoadingIndicator />
          <h1>Good food in the fridge?</h1>
          <h3>Check your store:</h3>
        </section>
        <section>
          <ScanBarcode />
          <InputForm />
        </section>
        <article>
          <Product />
        </article>
      </Provider>
    </main>
  )
}
