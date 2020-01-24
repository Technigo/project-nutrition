import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import { ScanBarcode } from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import { ui } from 'reducers/ui'
import { products } from 'reducers/products'

// MY STYLING 

const Box = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Box>
        <Header />
        <LoadingIndicator />
        <ScanBarcode />
        <Product />
        <Footer />
      </Box>
    </Provider>
  )
}
