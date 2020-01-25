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

// Start scanner with a button onclick function
// Fetch the product from the API
// Reducers for ui (loading) and products (fetching product from api)
// When product is found show TabBar
// When scanning a new product, set products array to 0 to display just scanner?

// STYLED COMPONENTS
const InnerContainer = styled.section`
  background: #f1f1f1;
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
