import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { products } from './reducers/products'
import { ScanBarcode } from './components/ScanBarcode'
import { Header } from './components/header'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from './components/Product'
import { Footer } from './components/lib/Footer'
import styled from 'styled-components'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

const Main = styled.main`
// display: flex;
background: #e5faf5;
display-flex; 
height: 1000px;
background-size: cover;
`
export const store = configureStore({ reducer })
export const App = () => {
  return (
    <Provider store={store}>
      <Header />

      <Main>
        <LoadingIndicator />
        <ScanBarcode />
        <Product />
      </Main>

      <Footer />
    </Provider>
  )
}
