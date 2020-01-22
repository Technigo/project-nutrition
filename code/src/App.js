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
// What do I want to display about the product?
// Use resusable Card component for thw products I scan
// A tab bar to wstich between display-stuff: Nutrition, 
// Reducers for ui (loading) and products (fetching product from api)

// COMBINING REDUCERS
const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

// THE STORE
export const store = configureStore({ reducer })

// APP
export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <LoadingIndicator />
        <ScanBarcode />
        <Product />
      </Container>
    </Provider>
  )
}

const Container = styled.main`
  background: #2A2B2A;
  height: 100vh;
  text-align: center;
`