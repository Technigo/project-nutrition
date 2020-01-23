import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// REDUCERS
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'

// COMPONENTS
import { ScanBarcode } from 'components/ScanBarcode'
import { Product } from 'components/Product'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer  
})

export const store = configureStore ({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <ScanBarcode />
        {/* <LoadingIndicator /> */}
        <Product />
      </Container>      
    </Provider>
  )
}
