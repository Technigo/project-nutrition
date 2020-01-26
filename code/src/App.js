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
import { Footer } from './components/Footer'

// STYLED COMPONENTS
const OuterContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <OuterContainer>
        <Header />
        <Product />
        <LoadingIndicator />
        <ScanBarcode />
      </OuterContainer>
      <Footer />
    </Provider>
  )
}
