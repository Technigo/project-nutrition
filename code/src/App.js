import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { products } from 'reducers/products'
import { ui } from 'reducers/ui'
import { LoadingIndicator } from 'components/Loading'
import { ProductList } from 'components/ProductList'
import { ScanBarcode } from 'components/ScanBarcode'
import { Header } from './components/Header'
import styled from 'styled-components'


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <LoadingIndicator />
        <ScanBarcode />
        <ProductList />
      </Main>
    </Provider>

  )
}


const Main = styled.main`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;`
