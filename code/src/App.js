import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'
import { ui } from './reducers/ui'
import { products } from './reducers/products'
import { ScanBarcode } from './components/ScanBarcode'
import { Product } from './components/Product'
import { LoadingIndicator } from './components/LoadingIndicator'
import { Header } from './components/Header'

// STYLED COMPONENTS
const InnerContainer = styled.section`
  height: 100%;
  margin: 0;
  padding-bottom: 50px;
`

// COMBINING REDUCERS
const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

// THE STORE
export const store = configureStore({ reducer })

// APP COMPONENT
export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <InnerContainer>
        <Product />
        <LoadingIndicator />
        <ScanBarcode />
      </InnerContainer>
    </Provider>
  )
}
